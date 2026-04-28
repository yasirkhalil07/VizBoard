import jwt from "jsonwebtoken";
import { config } from "../config/env";

//  non-null assertion operator (!) tells TypeScript that the value will never be null or undefined at runtime
const JWT_SECRET = config.jwtSecret;
const JWT_ACCESS_EXPIRES_IN = config.jwtAccessExpiresIn as string | any;
const JWT_REFRESH_EXPIRES_IN = config.jwtRefreshExpiresIn as string | any;

export const generateAccessToken = (payload: any) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_ACCESS_EXPIRES_IN });
};

export const generateRefreshToken = (payload: any) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_REFRESH_EXPIRES_IN });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
