import { createAsyncThunk } from "@reduxjs/toolkit";

import { fileService } from "@/services/fileService";

import { RootState } from "../store";
import { setCredentials } from "../slices/authSlice";

// ======================================================
// GET FILES
// ======================================================

export const getFilesThunk = createAsyncThunk(
  "files/getFiles",

  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      // Check if we have a valid access token
      if (!state.auth.accessToken) {
        throw new Error("No access token available. Please login again.");
      }

      console.log("Fetching files with token:", state.auth.accessToken);

      const response = await fileService.getFiles(
        () => state.auth.accessToken,
        (user, accessToken) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );

      return response;
    } catch (error: any) {
      console.error("Files fetch error:", error);
      return thunkAPI.rejectWithValue(error.message || "Failed to fetch files");
    }
  },
);

// ======================================================
// UPLOAD FILE
// ======================================================

export const uploadFileThunk = createAsyncThunk(
  "files/uploadFile",

  async (file: File, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      const response = await fileService.uploadFile(
        file,
        () => state.auth.accessToken,
        (user, accessToken) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );

      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Failed to upload file");
    }
  },
);

// ======================================================
// DELETE FILE
// ======================================================

export const deleteFileThunk = createAsyncThunk(
  "files/deleteFile",

  async (fileId: number, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      const response = await fileService.deleteFile(
        fileId,
        () => state.auth.accessToken,
        (user, accessToken) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );

      return {
        ...response,
        fileId,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Failed to delete file");
    }
  },
);

// ======================================================
// GET FILE COLUMNS
// ======================================================

export const getColumnsThunk = createAsyncThunk(
  "files/getColumns",

  async (fileId: number, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      // Check if we have a valid access token
      if (!state.auth.accessToken) {
        throw new Error("No access token available. Please login again.");
      }

      console.log("Fetching columns with token:", state.auth.accessToken);

      const response = await fileService.getColumns(
        fileId,
        () => state.auth.accessToken,
        (user, accessToken) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );

      return response;
    } catch (error: any) {
      console.error("Columns fetch error:", error);
      return thunkAPI.rejectWithValue(
        error.message || "Failed to fetch columns",
      );
    }
  },
);

// ======================================================
// PREVIEW FILE DATA
// ======================================================

export const previewDataThunk = createAsyncThunk(
  "files/previewData",

  async (fileId: number, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      // Check if we have a valid access token
      if (!state.auth.accessToken) {
        throw new Error("No access token available. Please login again.");
      }

      console.log("Fetching preview data with token:", state.auth.accessToken);

      const response = await fileService.previewData(
        fileId,
        () => state.auth.accessToken,
        (user, accessToken) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );

      return response;
    } catch (error: any) {
      console.error("Preview data fetch error:", error);
      return thunkAPI.rejectWithValue(
        error.message || "Failed to fetch preview data",
      );
    }
  },
);
