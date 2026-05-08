import { backendUrl } from "@/lib/utilities";
import { apiPost } from "./apiFetch";

// ======================================================
// TYPES
// ======================================================

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

// Register response
export interface RegisterResponse {
  user: User;
  message: string;
}

// Login / Refresh response
export interface AuthResponse {
  accessToken: string;
  user: User;
  message: string;
}

// ======================================================
// BASE URL
// ======================================================

const BASE_URL = `${backendUrl}/api/auth`;

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
// AUTH SERVICE
// ======================================================

export const authService = {
  // =========================================
  // REGISTER
  // =========================================
  register: async (payload: RegisterPayload): Promise<RegisterResponse> => {
    const response = await apiPost(`${BASE_URL}/register`, payload, {
      skipAuth: true,
    });

    return handleResponse(response);
  },

  // =========================================
  // LOGIN
  // =========================================
  login: async (payload: LoginPayload): Promise<AuthResponse> => {
    const response = await apiPost(`${BASE_URL}/login`, payload, {
      skipAuth: true,
    });

    return handleResponse(response);
  },

  // =========================================
  // LOGOUT
  // =========================================
  logout: async (): Promise<{ message: string }> => {
    const response = await apiPost(`${BASE_URL}/logout`);

    return handleResponse(response);
  },

  // =========================================
  // REFRESH TOKEN
  // =========================================
  refreshToken: async (): Promise<AuthResponse> => {
    const response = await fetch(`${BASE_URL}/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    return handleResponse(response);
  },
};
