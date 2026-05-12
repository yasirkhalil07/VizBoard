import { backendUrl } from "@/lib/utilities";
import { apiGet, apiPost, apiPut, apiDelete } from "./apiFetch";

const BASE_URL = `${backendUrl}/api/connections`;

// ======================================================
// HELPER FUNCTION
// ======================================================

const handleResponse = async (response: Response) => {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

// create test update and delete connection service

export const dbConnectionService = {
  //   create connection: http://localhost:3001/api/connections
  createConnection: async (
    payload: any,
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ) => {
    const response = await apiPost(
      `${BASE_URL}`,
      payload,
      {},
      getAccessToken,
      onTokenRefresh,
    );
    return handleResponse(response);
  },

  //   test connection: http://localhost:3001/api/connections/1/test
  testConnection: async (
    connectionId: number,
    payload: any,
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ) => {
    const response = await apiPost(
      `${BASE_URL}/${connectionId}/test`,
      payload,
      {},
      getAccessToken,
      onTokenRefresh,
    );
    return handleResponse(response);
  },

  // Raw test connection :http://localhost:3001/api/connections/test
  testConnectionRaw: async (
    payload: any,
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ) => {
    const response = await apiPost(
      `${BASE_URL}/test`,
      payload,
      {},
      getAccessToken,
      onTokenRefresh,
    );
    return handleResponse(response);
  },

  //   update connection: http://localhost:3001/api/connections/1
  updateConnection: async (
    connectionId: number,
    payload: any,
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ) => {
    const response = await apiPut(
      `${BASE_URL}/${connectionId}`,
      payload,
      {},
      getAccessToken,
      onTokenRefresh,
    );
    return handleResponse(response);
  },

  //   delete connection: http://localhost:3001/api/connections/2
  deleteConnection: async (
    connectionId: number,
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ) => {
    const response = await apiDelete(
      `${BASE_URL}/${connectionId}`,
      {},
      getAccessToken,
      onTokenRefresh,
    );
    return handleResponse(response);
  },

  //   get all connections: http://localhost:3001/api/connections
  getAllConnections: async (
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ) => {
    const response = await apiGet(
      `${BASE_URL}`,
      {},
      getAccessToken,
      onTokenRefresh,
    );
    return handleResponse(response);
  },

  //   get single connection: http://localhost:3001/api/connections/1
  getConnection: async (
    connectionId: number,
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ) => {
    const response = await apiGet(
      `${BASE_URL}/${connectionId}`,
      {},
      getAccessToken,
      onTokenRefresh,
    );
    return handleResponse(response);
  },
};
