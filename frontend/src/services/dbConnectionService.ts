import { backendUrl } from "@/lib/utilities";
import { apiGet, apiPost, apiPut, apiDelete } from "./apiFetch";

const BASE_URL = `${backendUrl}/api/connections`;

// create test update and delete connection service

export const dbConnectionService = {
  //   create connection: http://localhost:3001/api/connections
  createConnection: async (payload: any) => {
    const response = await apiPost(`${BASE_URL}`, payload);
    return response;
  },

  //   test connection: http://localhost:3001/api/connections/1/test
  testConnection: async (connectionId: number, payload: any) => {
    const response = await apiPost(`${BASE_URL}/${connectionId}/test`, payload);
    return response;
  },

  //   update connection: http://localhost:3001/api/connections/1
  updateConnection: async (connectionId: number, payload: any) => {
    const response = await apiPut(`${BASE_URL}/${connectionId}`, payload);
    return response;
  },

  //   delete connection: http://localhost:3001/api/connections/2
  deleteConnection: async (connectionId: number) => {
    const response = await apiDelete(`${BASE_URL}/${connectionId}`);
    return response;
  },

  //   get all connections: http://localhost:3001/api/connections
  getAllConnections: async () => {
    const response = await apiGet(`${BASE_URL}`);
    return response;
  },

  //   get single connection: http://localhost:3001/api/connections/1
  getConnection: async (connectionId: number) => {
    const response = await apiGet(`${BASE_URL}/${connectionId}`);
    return response;
  },
};
