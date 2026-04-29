import { Request, Response } from "express";
import * as services from "../services";

// POST /api/auth/register
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

// POST /api/auth/login
export const login = async (req: Request, res: Response) => {
  try {
    const { user, accessToken, refreshToken } =
      await services.authService.loginUser(req.body);
    // send refresh token in cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: { user, accessToken },
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

// POST /api/auth/logout
export const logout = async (req: Request, res: Response) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (refreshToken) {
      // Remove from DB (hashed or plain)
      await services.authService.logoutUser(refreshToken);
    }

    // Clear cookie
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

// POST /api/auth/refreshToken
export const refreshToken = async (req: Request, res: Response) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    const {
      user,
      accessToken,
      refreshToken: newRefreshToken,
    } = await services.authService.refreshToken(refreshToken);

    // send the new refresh token via cookie
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({
      success: true,
      message: "Token refreshed successfully",
      data: { user, accessToken },
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
