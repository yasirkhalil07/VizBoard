// dashboard.slice.ts

import { createSlice } from "@reduxjs/toolkit";
import {
  getDashboardsThunk,
  createDashboardThunk,
  updateDashboardThunk,
  deleteDashboardThunk,
} from "../thunks/dashboardThunks";

// ======================================================
// TYPES
// ======================================================

export interface Dashboard {
  id: number;
  name: string;
  user_id: number;
  created_at: string;
  updated_at: string;
}

interface DashboardState {
  dashboards: Dashboard[];
  loading: boolean;
  error: string | null;
}

// ======================================================
// INITIAL STATE
// ======================================================

const initialState: DashboardState = {
  dashboards: [],
  loading: false,
  error: null,
};

// ======================================================
// SLICE
// ======================================================

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,

  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    // ======================================================
    // GET DASHBOARDS
    // ======================================================

    builder
      .addCase(getDashboardsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getDashboardsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.dashboards = action.payload.dashboards;
      })

      .addCase(getDashboardsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // ======================================================
    // CREATE DASHBOARD
    // ======================================================

    builder
      .addCase(createDashboardThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(createDashboardThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.dashboards.unshift(action.payload.dashboard);
      })

      .addCase(createDashboardThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // ======================================================
    // UPDATE DASHBOARD
    // ======================================================

    builder
      .addCase(updateDashboardThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(updateDashboardThunk.fulfilled, (state, action) => {
        state.loading = false;
        const updatedDashboard = action.payload.dashboard;
        const index = state.dashboards.findIndex(
          (dashboard) => dashboard.id === updatedDashboard.id
        );
        if (index !== -1) {
          state.dashboards[index] = updatedDashboard;
        }
      })

      .addCase(updateDashboardThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // ======================================================
    // DELETE DASHBOARD
    // ======================================================

    builder
      .addCase(deleteDashboardThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(deleteDashboardThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.dashboards = state.dashboards.filter(
          (dashboard) => dashboard.id !== action.meta.arg
        );
      })

      .addCase(deleteDashboardThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = dashboardSlice.actions;

export default dashboardSlice.reducer;
