import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwtHelper";
import { prisma } from "../utils/prisma";

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    const token = authHeader.split(" ")[1];

    // Verify JWT
    let decoded: any;
    try {
      decoded = verifyToken(token);
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired token",
        error: err instanceof Error ? err.message : "Unknown error",
      });
    }

    // Optional: fetch user (recommended)
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        email: true,
        name: true,
        role_id: true,
      },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    // Attach user to request
    (req as any).user = user;

    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Authentication failed",
    });
  }
};
