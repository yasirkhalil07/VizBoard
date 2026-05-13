import { backendUrl } from "@/lib/utilities";
import { apiGet, apiPost, apiPut, apiDelete } from "./apiFetch";

// ======================================================
// TYPES
// ======================================================

export interface Tab {
  id: number;
  dashboard_id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface CreateTabPayload {
  name: string;
}

export interface UpdateTabPayload {
  name?: string;
}

export interface TabResponse {
  tab: Tab;
  message: string;
}

export interface TabsResponse {
  tabs: Tab[];
  message: string;
}

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
// TABS SERVICE
// ======================================================

export const tabsService = {
  // =========================================
  // GET ALL TABS
  // =========================================
  getTabs: async (
    dashboardId: number,
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ): Promise<TabsResponse> => {
    const token = getAccessToken?.();

    if (!token) {
      throw new Error("No access token available. Please login again.");
    }

    console.log("Tabs service - using token:", token);

    const response = await apiGet(
      `${backendUrl}/api/dashboards/${dashboardId}/tabs`,
      {},
      getAccessToken,
      onTokenRefresh,
    );

    return handleResponse(response);
  },

  // =========================================
  // CREATE TAB
  // =========================================
  createTab: async (
    dashboardId: number,
    payload: CreateTabPayload,
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ): Promise<TabResponse> => {
    const response = await apiPost(
      `${backendUrl}/api/dashboards/${dashboardId}/tabs`,
      payload,
      {},
      getAccessToken,
      onTokenRefresh,
    );

    return handleResponse(response);
  },

  // =========================================
  // UPDATE TAB
  // =========================================
  updateTab: async (
    dashboardId: number,
    tabId: number,
    payload: UpdateTabPayload,
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ): Promise<TabResponse> => {
    const response = await apiPut(
      `${backendUrl}/api/dashboards/${dashboardId}/tabs/${tabId}`,
      payload,
      {},
      getAccessToken,
      onTokenRefresh,
    );

    return handleResponse(response);
  },

  // =========================================
  // DELETE TAB
  // =========================================
  deleteTab: async (
    dashboardId: number,
    tabId: number,
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ): Promise<{ message: string }> => {
    const response = await apiDelete(
      `${backendUrl}/api/dashboards/${dashboardId}/tabs/${tabId}`,
      {},
      getAccessToken,
      onTokenRefresh,
    );

    return handleResponse(response);
  },
};