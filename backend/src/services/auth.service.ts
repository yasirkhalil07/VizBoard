import { prisma } from "../utils/prisma";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwtHelper";

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

  const token = generateToken(user.id);

  return { user, token };
};
