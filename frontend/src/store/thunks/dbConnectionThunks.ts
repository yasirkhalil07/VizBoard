// dbConnection.thunks.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { dbConnectionService } from "@/services/dbConnectionService";
import { RootState } from "@/store/store";
import { setCredentials } from "@/store/slices/authSlice";

// create connection
export const createConnectionThunk = createAsyncThunk(
  "dbConnection/create",
  async (payload: any, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      // Check if we have a valid access token
      if (!state.auth.accessToken) {
        throw new Error("No access token available. Please login again.");
      }

      const response = await dbConnectionService.createConnection(
        payload,
        () => state.auth.accessToken,
        (user, accessToken) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.message || "Create connection failed",
      );
    }
  },
);

// test connection
export const testConnectionThunk = createAsyncThunk(
  "dbConnection/test",
  async (
    { connectionId, payload }: { connectionId: number; payload: any },
    thunkAPI,
  ) => {
    try {
      const state = thunkAPI.getState() as RootState;

      // Check if we have a valid access token
      if (!state.auth.accessToken) {
        throw new Error("No access token available. Please login again.");
      }

      const response = await dbConnectionService.testConnection(
        connectionId,
        payload,
        () => state.auth.accessToken,
        (user, accessToken) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.message || "Test connection failed",
      );
    }
  },
);

// Raw Test Connection
export const testConnectionRawThunk = createAsyncThunk(
  "dbConnection/testRaw",
  async (payload: any, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      // Check if we have a valid access token
      if (!state.auth.accessToken) {
        throw new Error("No access token available. Please login again.");
      }

      console.log("Testing connection with token:", state.auth.accessToken);

      const response = await dbConnectionService.testConnectionRaw(
        payload,
        () => state.auth.accessToken,
        (user, accessToken) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.message || "Test connection failed",
      );
    }
  },
);

// update connection
export const updateConnectionThunk = createAsyncThunk(
  "dbConnection/update",
  async (
    { connectionId, payload }: { connectionId: number; payload: any },
    thunkAPI,
  ) => {
    try {
      const state = thunkAPI.getState() as RootState;

      // Check if we have a valid access token
      if (!state.auth.accessToken) {
        throw new Error("No access token available. Please login again.");
      }

      const response = await dbConnectionService.updateConnection(
        connectionId,
        payload,
        () => state.auth.accessToken,
        (user, accessToken) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.message || "Update connection failed",
      );
    }
  },
);

// delete connection
export const deleteConnectionThunk = createAsyncThunk(
  "dbConnection/delete",
  async (connectionId: number, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      // Check if we have a valid access token
      if (!state.auth.accessToken) {
        throw new Error("No access token available. Please login again.");
      }

      const response = await dbConnectionService.deleteConnection(
        connectionId,
        () => state.auth.accessToken,
        (user, accessToken) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.message || "Delete connection failed",
      );
    }
  },
);

// get tables thunk
export const getTablesThunk = createAsyncThunk(
  "dbConnection/getTables",
  async (connectionId: number, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      // Check if we have a valid access token
      if (!state.auth.accessToken) {
        throw new Error("No access token available. Please login again.");
      }

      const response = await dbConnectionService.getTables(
        connectionId,
        () => state.auth.accessToken,
        (user: any, accessToken: string) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Get tables failed");
    }
  },
);

// get columns thunk
export const getColumnsThunk = createAsyncThunk(
  "dbConnection/getColumns",
  async (connectionId: number, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      // Check if we have a valid access token
      if (!state.auth.accessToken) {
        throw new Error("No access token available. Please login again.");
      }

      const response = await dbConnectionService.getColumns(
        connectionId,
        () => state.auth.accessToken,
        (user: any, accessToken: string) => {
          thunkAPI.dispatch(setCredentials({ user, accessToken }));
        },
      );
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Get columns failed");
    }
  },
);

// // get all connections
// export const getAllConnectionsThunk = createAsyncThunk(
//   "dbConnection/getAll",
//   async (_, thunkAPI) => {
//     try {
//       const response = await dbConnectionService.getAllConnections();
//       return response;
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(
//         error.message || "Get connections failed",
//       );
//     }
//   },
// );

// // get single connection
// export const getConnectionThunk = createAsyncThunk(
//   "dbConnection/get",
//   async (connectionId: number, thunkAPI) => {
//     try {
//       const response = await dbConnectionService.getConnection(connectionId);
//       return response;
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(error.message || "Get connection failed");
//     }
//   },
// );
