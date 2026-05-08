// auth.slice.ts

import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  logoutThunk,
  refreshTokenThunk,
  registerThunk,
} from "../thunks/authThunks";

// ======================================================
// TYPES
// ======================================================

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;

  isAuthenticated: boolean;

  loading: boolean;
  error: string | null;

  initialized: boolean;
}

// ======================================================
// INITIAL STATE
// ======================================================

const initialState: AuthState = {
  user: null,
  accessToken: null,

  isAuthenticated: false,

  loading: false,
  error: null,

  initialized: false,
};

// ======================================================
// SLICE
// ======================================================

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    clearError: (state) => {
      state.error = null;
    },

    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;
    },

    setInitialized: (state) => {
      state.initialized = true;
    },
  },

  extraReducers: (builder) => {
    // ======================================================
    // REGISTER
    // ======================================================

    builder
      .addCase(registerThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(registerThunk.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(registerThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // ======================================================
    // LOGIN
    // ======================================================

    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;

        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;

        state.isAuthenticated = true;
      })

      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload as string;

        state.user = null;
        state.accessToken = null;

        state.isAuthenticated = false;
      });

    // ======================================================
    // REFRESH TOKEN
    // ======================================================

    builder
      .addCase(refreshTokenThunk.pending, (state) => {
        state.loading = true;
      })

      .addCase(refreshTokenThunk.fulfilled, (state, action) => {
        state.loading = false;

        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;

        state.isAuthenticated = true;
        state.initialized = true;
      })

      .addCase(refreshTokenThunk.rejected, (state) => {
        state.loading = false;

        state.user = null;
        state.accessToken = null;

        state.isAuthenticated = false;
        state.initialized = true;
      });

    // ======================================================
    // LOGOUT
    // ======================================================

    builder
      .addCase(logoutThunk.pending, (state) => {
        state.loading = true;
      })

      .addCase(logoutThunk.fulfilled, (state) => {
        state.loading = false;

        state.user = null;
        state.accessToken = null;

        state.isAuthenticated = false;
      })

      .addCase(logoutThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError, setCredentials, setInitialized } = authSlice.actions;

export default authSlice.reducer;
