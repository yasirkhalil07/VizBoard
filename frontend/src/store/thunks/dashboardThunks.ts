import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  dashboardService,
  CreateDashboardPayload,
  UpdateDashboardPayload,
} from "@/services/dashboardService";

import { RootState } from "../store";
import { setCredentials } from "../slices/authSlice";

// ======================================================
// GET DASHBOARDS
// ======================================================

export const getDashboardsThunk = createAsyncThunk(
  "dashboard/getDashboards",

  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      // Check if we have a valid access token
      if (!state.auth.accessToken) {
        throw new Error("No access token available. Please login again.");
      }

      console.log("Fetching dashboards with token:", state.auth.accessToken);

      const response = await dashboardService.getDashboards(
        () => state.auth.accessToken,
        (user, accessToken) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );

      return response;
    } catch (error: any) {
      console.error("Dashboard fetch error:", error);
      return thunkAPI.rejectWithValue(
        error.message || "Failed to fetch dashboards",
      );
    }
  },
);

// ======================================================
// CREATE DASHBOARD
// ======================================================

export const createDashboardThunk = createAsyncThunk(
  "dashboard/createDashboard",

  async (payload: CreateDashboardPayload, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      const response = await dashboardService.createDashboard(
        payload,
        () => state.auth.accessToken,
        (user, accessToken) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );

      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.message || "Failed to create dashboard",
      );
    }
  },
);

// ======================================================
// UPDATE DASHBOARD
// ======================================================

interface UpdateDashboardThunkPayload {
  dashboardId: number;
  payload: UpdateDashboardPayload;
}

export const updateDashboardThunk = createAsyncThunk(
  "dashboard/updateDashboard",

  async ({ dashboardId, payload }: UpdateDashboardThunkPayload, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      const response = await dashboardService.updateDashboard(
        dashboardId,
        payload,
        () => state.auth.accessToken,
        (user, accessToken) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );

      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.message || "Failed to update dashboard",
      );
    }
  },
);

// ======================================================
// DELETE DASHBOARD
// ======================================================

export const deleteDashboardThunk = createAsyncThunk(
  "dashboard/deleteDashboard",

  async (dashboardId: number, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      const response = await dashboardService.deleteDashboard(
        dashboardId,
        () => state.auth.accessToken,
        (user, accessToken) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );

      return {
        ...response,
        dashboardId,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.message || "Failed to delete dashboard",
      );
    }
  },
);
