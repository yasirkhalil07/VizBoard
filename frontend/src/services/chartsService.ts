import { backendUrl } from "@/lib/utilities";
import { apiGet, apiPost, apiPut, apiDelete } from "./apiFetch";

// ======================================================
// TYPES
// ======================================================

export interface Chart {
  id: number;
  tab_id: number;
  name: string;
  type: string;
  created_at: string;
  updated_at: string;
}

export interface DataSource {
  id: number;
  chart_id: number;
  source_type: string;
  config: Record<string, any>;
  created_at: string;
  updated_at: string;
}

// ======================================================
// CHART PAYLOADS
// ======================================================

export interface CreateChartPayload {
  name: string;
  type: string;
}

export interface UpdateChartPayload {
  name?: string;
  type?: string;
}

// ======================================================
// DATA SOURCE PAYLOADS
// ======================================================

export interface AttachDataSourcePayload {
  source_type: string;
  config: Record<string, any>;
}

export interface UpdateDataSourcePayload {
  source_type?: string;
  config?: Record<string, any>;
}

// ======================================================
// RESPONSES
// ======================================================

export interface ChartResponse {
  chart: Chart;
  message: string;
}

export interface ChartsResponse {
  charts: Chart[];
  message: string;
}

export interface DataSourceResponse {
  dataSource: DataSource;
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
// CHARTS SERVICE
// ======================================================

export const chartsService = {
  // =========================================
  // GET CHARTS
  // =========================================
  getCharts: async (
    tabId: number,
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ): Promise<ChartsResponse> => {
    const response = await apiGet(
      `${backendUrl}/api/tabs/${tabId}/charts`,
      {},
      getAccessToken,
      onTokenRefresh,
    );

    return handleResponse(response);
  },

  // =========================================
  // CREATE CHART
  // =========================================
  createChart: async (
    tabId: number,
    payload: CreateChartPayload,
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ): Promise<ChartResponse> => {
    const response = await apiPost(
      `${backendUrl}/api/tabs/${tabId}/charts`,
      payload,
      {},
      getAccessToken,
      onTokenRefresh,
    );

    return handleResponse(response);
  },

  // =========================================
  // UPDATE CHART
  // =========================================
  updateChart: async (
    chartId: number,
    payload: UpdateChartPayload,
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ): Promise<ChartResponse> => {
    const response = await apiPut(
      `${backendUrl}/api/charts/${chartId}`,
      payload,
      {},
      getAccessToken,
      onTokenRefresh,
    );

    return handleResponse(response);
  },

  // =========================================
  // DELETE CHART
  // =========================================
  deleteChart: async (
    chartId: number,
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ): Promise<{ message: string }> => {
    const response = await apiDelete(
      `${backendUrl}/api/charts/${chartId}`,
      {},
      getAccessToken,
      onTokenRefresh,
    );

    return handleResponse(response);
  },

  // ==================================================
  // GET DATA SOURCE
  // ==================================================
  getDataSource: async (
    chartId: number,
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ): Promise<DataSourceResponse> => {
    const response = await apiGet(
      `${backendUrl}/api/charts/${chartId}/data-source`,
      {},
      getAccessToken,
      onTokenRefresh,
    );

    return handleResponse(response);
  },

  // ==================================================
  // ATTACH DATA SOURCE
  // ==================================================
  attachDataSource: async (
    chartId: number,
    payload: AttachDataSourcePayload,
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ): Promise<DataSourceResponse> => {
    const response = await apiPost(
      `${backendUrl}/api/charts/${chartId}/data-source`,
      payload,
      {},
      getAccessToken,
      onTokenRefresh,
    );

    return handleResponse(response);
  },

  // ==================================================
  // UPDATE DATA SOURCE
  // ==================================================
  updateDataSource: async (
    chartId: number,
    payload: UpdateDataSourcePayload,
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ): Promise<DataSourceResponse> => {
    const response = await apiPut(
      `${backendUrl}/api/charts/${chartId}/data-source`,
      payload,
      {},
      getAccessToken,
      onTokenRefresh,
    );

    return handleResponse(response);
  },
};
