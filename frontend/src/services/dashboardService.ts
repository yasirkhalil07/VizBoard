import { backendUrl } from "@/lib/utilities";
import { apiGet, apiPost, apiPut, apiDelete } from "./apiFetch";

// ======================================================
// TYPES
// ======================================================

export interface Dashboard {
  id: number;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateDashboardPayload {
  name: string;
  description?: string;
}

export interface UpdateDashboardPayload {
  name?: string;
  description?: string;
}

export interface DashboardResponse {
  dashboard: Dashboard;
  message: string;
}

export interface DashboardsResponse {
  dashboards: Dashboard[];
  message: string;
}

// ======================================================
// BASE URL
// ======================================================

const BASE_URL = `${backendUrl}/api/dashboards`;

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

// ======================================================
// DASHBOARD SERVICE
// ======================================================

export const dashboardService = {
  // =========================================
  // GET ALL DASHBOARDS
  // =========================================
  getDashboards: async (
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ): Promise<DashboardsResponse> => {
    const token = getAccessToken?.();

    if (!token) {
      throw new Error("No access token available. Please login again.");
    }

    console.log("Dashboard service - using token:", token);

    const response = await apiGet(BASE_URL, {}, getAccessToken, onTokenRefresh);

    return handleResponse(response);
  },

  // =========================================
  // CREATE DASHBOARD
  // =========================================
  createDashboard: async (
    payload: CreateDashboardPayload,
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ): Promise<DashboardResponse> => {
    const response = await apiPost(
      BASE_URL,
      payload,
      {},
      getAccessToken,
      onTokenRefresh,
    );

    return handleResponse(response);
  },

  // =========================================
  // UPDATE DASHBOARD
  // =========================================
  updateDashboard: async (
    dashboardId: number,
    payload: UpdateDashboardPayload,
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ): Promise<DashboardResponse> => {
    const response = await apiPut(
      `${BASE_URL}/${dashboardId}`,
      payload,
      {},
      getAccessToken,
      onTokenRefresh,
    );

    return handleResponse(response);
  },

  // =========================================
  // DELETE DASHBOARD
  // =========================================
  deleteDashboard: async (
    dashboardId: number,
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ): Promise<{ message: string }> => {
    const response = await apiDelete(
      `${BASE_URL}/${dashboardId}`,
      {},
      getAccessToken,
      onTokenRefresh,
    );

    return handleResponse(response);
  },
};
