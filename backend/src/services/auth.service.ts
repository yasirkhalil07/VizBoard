import { prisma } from "../utils/prisma";
import bcrypt from "bcrypt";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
} from "../utils/jwtHelper";

export const registerUser = async (data: any) => {
  const existing = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (existing) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const role = await prisma.role.findFirst({
    where: { name: "client" },
  });

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role_id: role!.id,
    },
  });

  return user;
};

// Login user
export const loginUser = async (data: any) => {
  const user = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (!user) throw new Error("User not found");

  const isPasswordValid = await bcrypt.compare(data.password, user.password);

  if (!isPasswordValid) throw new Error("Invalid password");

  const accessToken = generateAccessToken({ userId: user.id });
  const refreshToken = generateRefreshToken({ userId: user.id });

  // hash the refresh token and store it to the db
  const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
  await prisma.refreshToken.create({
    data: {
      token: hashedRefreshToken,
      user_id: user.id,
      expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    },
  });

  return { user, accessToken, refreshToken };
};

// logout user
export const logoutUser = async (refreshToken: string) => {
  // Find all tokens for this user
  const storedTokens = await prisma.refreshToken.findMany();

  for (const t of storedTokens) {
    const match = await bcrypt.compare(refreshToken, t.token);
    if (match) {
      await prisma.refreshToken.delete({
        where: { id: t.id },
      });
      return true;
    }
  }

  throw new Error("Refresh token not found");
};

// refresh token
export const refreshToken = async (refreshToken: string) => {
  if (!refreshToken) {
    throw new Error("No refresh token provided");
  }

  let decoded: any;
  try {
    decoded = verifyToken(refreshToken);
  } catch {
    throw new Error("Invalid refresh token");
  }

  const tokens = await prisma.refreshToken.findMany({
    where: { user_id: decoded.userId },
    include: { user: true },
  });

  let storedToken = null;

  for (const t of tokens) {
    const isMatch = await bcrypt.compare(refreshToken, t.token);
    if (isMatch) {
      storedToken = t;
      break;
    }
  }

  if (!storedToken) {
    throw new Error("Refresh token not found in DB");
  }

  if (storedToken.expires_at < new Date()) {
    throw new Error("Refresh token expired");
  }

  const newAccessToken = generateAccessToken({ userId: decoded.userId });
  const newRefreshToken = generateRefreshToken({ userId: decoded.userId });

  await prisma.refreshToken.update({
    where: { id: storedToken.id },
    data: {
      token: await bcrypt.hash(newRefreshToken, 10),
      expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  });

  return {
    user: storedToken.user,
    accessToken: newAccessToken,
    refreshToken: newRefreshToken,
  };
};
