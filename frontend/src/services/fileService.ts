import { backendUrl } from "@/lib/utilities";
import { apiGet, apiDelete } from "./apiFetch";

// ======================================================
// TYPES
// ======================================================

export interface FileItem {
  id: number;
  filename: string;
  original_name: string;
  mimetype: string;
  size: number;
  created_at: string;
  updated_at: string;
}

export interface FileColumn {
  name: string;
  type: string;
}

export interface PreviewRow {
  [key: string]: any;
}

// ======================================================
// RESPONSES
// ======================================================

export interface FilesResponse {
  files: FileItem[];
  message: string;
}

export interface FileResponse {
  file: FileItem;
  message: string;
}

export interface ColumnsResponse {
  columns: FileColumn[];
  message: string;
}

export interface PreviewDataResponse {
  rows: PreviewRow[];
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
// FILE SERVICE
// ======================================================

export const fileService = {
  // =========================================
  // GET FILES
  // =========================================
  getFiles: async (
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ): Promise<FilesResponse> => {
    const response = await apiGet(
      `${backendUrl}/api/files`,
      {},
      getAccessToken,
      onTokenRefresh,
    );

    return handleResponse(response);
  },

  // =========================================
  // UPLOAD FILE
  // =========================================
  uploadFile: async (
    file: File,
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ): Promise<FileResponse> => {
    const token = getAccessToken?.();

    if (!token) {
      throw new Error("No access token available. Please login again.");
    }

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${backendUrl}/api/files/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    return handleResponse(response);
  },

  // =========================================
  // DELETE FILE
  // =========================================
  deleteFile: async (
    fileId: number,
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ): Promise<{ message: string }> => {
    const response = await apiDelete(
      `${backendUrl}/api/files/${fileId}`,
      {},
      getAccessToken,
      onTokenRefresh,
    );

    return handleResponse(response);
  },

  // =========================================
  // GET FILE COLUMNS
  // =========================================
  getColumns: async (
    fileId: number,
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ): Promise<ColumnsResponse> => {
    const response = await apiGet(
      `${backendUrl}/api/files/${fileId}/columns`,
      {},
      getAccessToken,
      onTokenRefresh,
    );

    return handleResponse(response);
  },

  // =========================================
  // PREVIEW FILE DATA
  // =========================================
  previewData: async (
    fileId: number,
    getAccessToken?: () => string | null,
    onTokenRefresh?: (user: any, accessToken: string) => void,
  ): Promise<PreviewDataResponse> => {
    const response = await apiGet(
      `${backendUrl}/api/files/${fileId}/preview`,
      {},
      getAccessToken,
      onTokenRefresh,
    );

    return handleResponse(response);
  },
};
