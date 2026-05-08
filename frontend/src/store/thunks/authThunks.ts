// auth.thunks.ts

import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  authService,
  LoginPayload,
  RegisterPayload,
} from "@/services/authService";

// ======================================================
// REGISTER
// ======================================================

export const registerThunk = createAsyncThunk(
  "auth/register",

  async (payload: RegisterPayload, thunkAPI) => {
    try {
      const response = await authService.register(payload);

      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Registration failed");
    }
  },
);

// ======================================================
// LOGIN
// ======================================================

export const loginThunk = createAsyncThunk(
  "auth/login",

  async (payload: LoginPayload, thunkAPI) => {
    try {
      const response = await authService.login(payload);

      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Login failed");
    }
  },
);

// ======================================================
// REFRESH TOKEN
// ======================================================

export const refreshTokenThunk = createAsyncThunk(
  "auth/refreshToken",

  async (_, thunkAPI) => {
    try {
      const response = await authService.refreshToken();

      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Refresh failed");
    }
  },
);

// ======================================================
// LOGOUT
// ======================================================

export const logoutThunk = createAsyncThunk(
  "auth/logout",

  async (_, thunkAPI) => {
    try {
      const response = await authService.logout();

      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Logout failed");
    }
  },
);
