import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  chartsService,
  CreateChartPayload,
  UpdateChartPayload,
  AttachDataSourcePayload,
  UpdateDataSourcePayload,
} from "@/services/chartsService";

import { RootState } from "../store";
import { setCredentials } from "../slices/authSlice";

// ======================================================
// GET CHARTS
// ======================================================

export const getChartsThunk = createAsyncThunk(
  "charts/getCharts",

  async (tabId: number, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      // Check if we have a valid access token
      if (!state.auth.accessToken) {
        throw new Error("No access token available. Please login again.");
      }

      console.log("Fetching charts with token:", state.auth.accessToken);

      const response = await chartsService.getCharts(
        tabId,
        () => state.auth.accessToken,
        (user, accessToken) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );

      return response;
    } catch (error: any) {
      console.error("Charts fetch error:", error);
      return thunkAPI.rejectWithValue(
        error.message || "Failed to fetch charts",
      );
    }
  },
);

// ======================================================
// CREATE CHART
// ======================================================

interface CreateChartThunkPayload {
  tabId: number;
  payload: CreateChartPayload;
}

export const createChartThunk = createAsyncThunk(
  "charts/createChart",

  async ({ tabId, payload }: CreateChartThunkPayload, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      if (!state.auth.accessToken) {
        throw new Error("No access token available. Please login again.");
      }

      const response = await chartsService.createChart(
        tabId,
        payload,
        () => state.auth.accessToken,
        (user, accessToken) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );

      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.message || "Failed to create chart",
      );
    }
  },
);

// ======================================================
// UPDATE CHART
// ======================================================

interface UpdateChartThunkPayload {
  chartId: number;
  payload: UpdateChartPayload;
}

export const updateChartThunk = createAsyncThunk(
  "charts/updateChart",

  async ({ chartId, payload }: UpdateChartThunkPayload, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      if (!state.auth.accessToken) {
        throw new Error("No access token available. Please login again.");
      }

      const response = await chartsService.updateChart(
        chartId,
        payload,
        () => state.auth.accessToken,
        (user, accessToken) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );

      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.message || "Failed to update chart",
      );
    }
  },
);

// ======================================================
// DELETE CHART
// ======================================================

export const deleteChartThunk = createAsyncThunk(
  "charts/deleteChart",

  async (chartId: number, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      if (!state.auth.accessToken) {
        throw new Error("No access token available. Please login again.");
      }

      const response = await chartsService.deleteChart(
        chartId,
        () => state.auth.accessToken,
        (user, accessToken) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );

      return {
        ...response,
        chartId,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.message || "Failed to delete chart",
      );
    }
  },
);

// ======================================================
// GET DATA SOURCE
// ======================================================

export const getDataSourceThunk = createAsyncThunk(
  "charts/getDataSource",

  async (chartId: number, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      // Check if we have a valid access token
      if (!state.auth.accessToken) {
        throw new Error("No access token available. Please login again.");
      }

      console.log("Fetching data source with token:", state.auth.accessToken);

      const response = await chartsService.getDataSource(
        chartId,
        () => state.auth.accessToken,
        (user, accessToken) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );

      return response;
    } catch (error: any) {
      console.error("Data source fetch error:", error);
      return thunkAPI.rejectWithValue(
        error.message || "Failed to fetch data source",
      );
    }
  },
);

// ======================================================
// ATTACH DATA SOURCE
// ======================================================

interface AttachDataSourceThunkPayload {
  chartId: number;
  payload: AttachDataSourcePayload;
}

export const attachDataSourceThunk = createAsyncThunk(
  "charts/attachDataSource",

  async ({ chartId, payload }: AttachDataSourceThunkPayload, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      if (!state.auth.accessToken) {
        throw new Error("No access token available. Please login again.");
      }

      const response = await chartsService.attachDataSource(
        chartId,
        payload,
        () => state.auth.accessToken,
        (user, accessToken) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );

      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.message || "Failed to attach data source",
      );
    }
  },
);

// ======================================================
// UPDATE DATA SOURCE
// ======================================================

interface UpdateDataSourceThunkPayload {
  chartId: number;
  payload: UpdateDataSourcePayload;
}

export const updateDataSourceThunk = createAsyncThunk(
  "charts/updateDataSource",

  async ({ chartId, payload }: UpdateDataSourceThunkPayload, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      if (!state.auth.accessToken) {
        throw new Error("No access token available. Please login again.");
      }

      const response = await chartsService.updateDataSource(
        chartId,
        payload,
        () => state.auth.accessToken,
        (user, accessToken) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );

      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.message || "Failed to update data source",
      );
    }
  },
);
