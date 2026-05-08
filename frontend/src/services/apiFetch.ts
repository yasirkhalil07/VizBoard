import { store } from "@/store/store";
import { setCredentials } from "@/store/slices/authSlice";
import { authService } from "./authService";

// ======================================================
// TYPES
// ======================================================

interface ApiFetchOptions extends RequestInit {
  skipAuth?: boolean;
}

// ======================================================
// GLOBAL REFRESH STATE
// ======================================================

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

// ======================================================
// HELPER FUNCTIONS
// ======================================================

const subscribeTokenRefresh = (callback: (token: string) => void) => {
  refreshSubscribers.push(callback);
};

const onTokenRefreshed = (token: string) => {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
};

const getAccessToken = (): string | null => {
  const state = store.getState();
  return state.auth.accessToken;
};

// ======================================================
// API FETCH WRAPPER
// ======================================================

export const apiFetch = async (
  url: string,
  options: ApiFetchOptions = {},
): Promise<Response> => {
  const { skipAuth = false, ...fetchOptions } = options;

  // Get current access token
  const accessToken = getAccessToken();

  // Prepare headers
  const headers = new Headers(fetchOptions.headers);

  // Add content-type if body exists and it's not already set
  if (fetchOptions.body && !headers.has("Content-Type")) {
    if (fetchOptions.body instanceof FormData) {
      // Don't set Content-Type for FormData - browser will set it with boundary
    } else {
      headers.set("Content-Type", "application/json");
    }
  }

  // Add authorization header if not skipping auth and token exists
  if (!skipAuth && accessToken) {
    headers.set("Authorization", `Bearer ${accessToken}`);
  }

  // Make initial request
  let response = await fetch(url, {
    ...fetchOptions,
    headers,
    credentials: "include", // Always include cookies for refresh token
  });

  // Handle 401 Unauthorized
  if (response.status === 401 && !skipAuth) {
    if (isRefreshing) {
      // If already refreshing, wait for the new token
      const newToken = await new Promise<string>((resolve) => {
        subscribeTokenRefresh((token) => resolve(token));
      });

      // Retry request with new token
      const retryHeaders = new Headers(fetchOptions.headers);
      if (fetchOptions.body && !retryHeaders.has("Content-Type")) {
        if (fetchOptions.body instanceof FormData) {
          // Don't set Content-Type for FormData
        } else {
          retryHeaders.set("Content-Type", "application/json");
        }
      }
      retryHeaders.set("Authorization", `Bearer ${newToken}`);

      response = await fetch(url, {
        ...fetchOptions,
        headers: retryHeaders,
        credentials: "include",
      });
    } else {
      // Start refresh process
      isRefreshing = true;

      try {
        // Call refresh endpoint
        const refreshResponse = await authService.refreshToken();

        // Save new token to Redux
        store.dispatch(
          setCredentials({
            user: refreshResponse.user,
            accessToken: refreshResponse.accessToken,
          }),
        );

        // Notify all subscribers
        onTokenRefreshed(refreshResponse.accessToken);

        // Retry original request with new token
        const retryHeaders = new Headers(fetchOptions.headers);
        if (fetchOptions.body && !retryHeaders.has("Content-Type")) {
          if (fetchOptions.body instanceof FormData) {
            // Don't set Content-Type for FormData
          } else {
            retryHeaders.set("Content-Type", "application/json");
          }
        }
        retryHeaders.set(
          "Authorization",
          `Bearer ${refreshResponse.accessToken}`,
        );

        response = await fetch(url, {
          ...fetchOptions,
          headers: retryHeaders,
          credentials: "include",
        });
      } catch (refreshError) {
        // Refresh failed, dispatch logout or handle error
        console.error("Token refresh failed:", refreshError);

        // You might want to dispatch logout here
        // store.dispatch(logoutThunk());

        throw new Error("Session expired. Please login again.");
      } finally {
        isRefreshing = false;
      }
    }
  }

  return response;
};

// ======================================================
// CONVENIENCE METHODS
// ======================================================

export const apiGet = (url: string, options: ApiFetchOptions = {}) =>
  apiFetch(url, { ...options, method: "GET" });

export const apiPost = (
  url: string,
  data?: any,
  options: ApiFetchOptions = {},
) =>
  apiFetch(url, {
    ...options,
    method: "POST",
    body: data
      ? data instanceof FormData
        ? data
        : JSON.stringify(data)
      : undefined,
  });

export const apiPut = (
  url: string,
  data?: any,
  options: ApiFetchOptions = {},
) =>
  apiFetch(url, {
    ...options,
    method: "PUT",
    body: data
      ? data instanceof FormData
        ? data
        : JSON.stringify(data)
      : undefined,
  });

export const apiPatch = (
  url: string,
  data?: any,
  options: ApiFetchOptions = {},
) =>
  apiFetch(url, {
    ...options,
    method: "PATCH",
    body: data
      ? data instanceof FormData
        ? data
        : JSON.stringify(data)
      : undefined,
  });

export const apiDelete = (url: string, options: ApiFetchOptions = {}) =>
  apiFetch(url, { ...options, method: "DELETE" });
