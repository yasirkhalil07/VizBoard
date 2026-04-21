// JWT helper utilities
import jwt from 'jsonwebtoken';

export const generateToken = (payload: any): string => {
  return jwt.sign(payload, process.env.JWT_SECRET || 'fallback-secret');
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret');
};
