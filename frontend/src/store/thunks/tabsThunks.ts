import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  tabsService,
  CreateTabPayload,
  UpdateTabPayload,
} from "@/services/tabsService";

import { RootState } from "../store";
import { setCredentials } from "../slices/authSlice";

// ======================================================
// GET TABS
// ======================================================

export const getTabsThunk = createAsyncThunk(
  "tabs/getTabs",

  async (dashboardId: number, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      // Check if we have a valid access token
      if (!state.auth.accessToken) {
        throw new Error("No access token available. Please login again.");
      }

      console.log("Fetching tabs with token:", state.auth.accessToken);

      const response = await tabsService.getTabs(
        dashboardId,
        () => state.auth.accessToken,
        (user, accessToken) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );

      return response;
    } catch (error: any) {
      console.error("Tabs fetch error:", error);
      return thunkAPI.rejectWithValue(error.message || "Failed to fetch tabs");
    }
  },
);

// ======================================================
// CREATE TAB
// ======================================================

interface CreateTabThunkPayload {
  dashboardId: number;
  payload: CreateTabPayload;
}

export const createTabThunk = createAsyncThunk(
  "tabs/createTab",

  async ({ dashboardId, payload }: CreateTabThunkPayload, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      if (!state.auth.accessToken) {
        throw new Error("No access token available. Please login again.");
      }

      const response = await tabsService.createTab(
        dashboardId,
        payload,
        () => state.auth.accessToken,
        (user, accessToken) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );

      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Failed to create tab");
    }
  },
);

// ======================================================
// UPDATE TAB
// ======================================================

interface UpdateTabThunkPayload {
  dashboardId: number;
  tabId: number;
  payload: UpdateTabPayload;
}

export const updateTabThunk = createAsyncThunk(
  "tabs/updateTab",

  async ({ dashboardId, tabId, payload }: UpdateTabThunkPayload, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      if (!state.auth.accessToken) {
        throw new Error("No access token available. Please login again.");
      }

      const response = await tabsService.updateTab(
        dashboardId,
        tabId,
        payload,
        () => state.auth.accessToken,
        (user, accessToken) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );

      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Failed to update tab");
    }
  },
);

// ======================================================
// DELETE TAB
// ======================================================

interface DeleteTabThunkPayload {
  dashboardId: number;
  tabId: number;
}

export const deleteTabThunk = createAsyncThunk(
  "tabs/deleteTab",

  async ({ dashboardId, tabId }: DeleteTabThunkPayload, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      if (!state.auth.accessToken) {
        throw new Error("No access token available. Please login again.");
      }

      const response = await tabsService.deleteTab(
        dashboardId,
        tabId,
        () => state.auth.accessToken,
        (user, accessToken) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );

      return {
        ...response,
        tabId,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Failed to delete tab");
    }
  },
);
