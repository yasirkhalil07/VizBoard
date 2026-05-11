// dbConnection.thunks.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { dbConnectionService } from "@/services/dbConnectionService";

// create connection
export const createConnectionThunk = createAsyncThunk(
  "dbConnection/create",
  async (payload: any, thunkAPI) => {
    try {
      const response = await dbConnectionService.createConnection(payload);
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
      const response = await dbConnectionService.testConnection(
        connectionId,
        payload,
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
      const response = await dbConnectionService.updateConnection(
        connectionId,
        payload,
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
      const response = await dbConnectionService.deleteConnection(connectionId);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.message || "Delete connection failed",
      );
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
