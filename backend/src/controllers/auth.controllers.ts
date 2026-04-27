import { Request, Response } from "express";
import * as services from "../services";

// POST /api/register
export const register = async (req: Request, res: Response) => {
  try {
    const user = await services.authService.registerUser(req.body);
    res.status(200).json({
      success: true,
      message: "User registered successfully",
      data: { user },
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

// POST /api/login
export const login = async (req: Request, res: Response) => {
  try {
    const { user, token } = await services.authService.loginUser(req.body);
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: { user, token },
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
