"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { refreshTokenThunk } from "@/store/thunks/authThunks";
import { setInitialized } from "@/store/slices/authSlice";

interface AuthInitializerProps {
  children: React.ReactNode;
}

export default function AuthInitializer({ children }: AuthInitializerProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, initialized } = useSelector(
    (state: RootState) => state.auth,
  );

  // useEffect(() => {
  //   // Only attempt to refresh token if we might have an existing session
  //   // Check if we have a refresh token cookie first
  //   const initializeAuth = async () => {
  //     try {
  //       // Check if refresh token cookie exists (more efficient check)
  //       const cookies = document.cookie
  //         .split(";")
  //         .map((cookie) => cookie.trim());
  //       const hasRefreshToken = cookies.some((cookie) =>
  //         cookie.startsWith("refreshToken="),
  //       );
  //       console.log("AuthInitializer - all cookies:", cookies);
  //       console.log("AuthInitializer - hasRefreshToken:", hasRefreshToken);

  //       // Alternative: try to access any auth-related cookies
  //       const authCookies = cookies.filter(
  //         (cookie) =>
  //           cookie.includes("refresh") ||
  //           cookie.includes("token") ||
  //           cookie.includes("auth"),
  //       );
  //       console.log("AuthInitializer - auth-related cookies:", authCookies);

  //       // Always try to refresh token - if no refresh token exists, the backend will handle it
  //       // This handles cases where refresh token is httpOnly and not accessible via JS
  //       console.log("AuthInitializer - attempting token refresh");
  //       try {
  //         await dispatch(refreshTokenThunk()).unwrap();
  //         console.log("AuthInitializer - token refresh successful");
  //       } catch (refreshError) {
  //         console.log(
  //           "AuthInitializer - token refresh failed (no valid session):",
  //           refreshError,
  //         );
  //         // Only mark as initialized if refresh actually fails
  //         dispatch(setInitialized());
  //       }
  //     } catch (error) {
  //       // Token refresh failed, user needs to login
  //       console.error("AuthInitializer - token refresh failed:", error);
  //       dispatch(setInitialized());
  //     }
  //   };

  //   initializeAuth();
  // }, [dispatch]);

  useEffect(() => {
    const init = async () => {
      try {
        await dispatch(refreshTokenThunk()).unwrap();
      } catch (err) {
        dispatch(setInitialized());
      }
    };

    init();
  }, [dispatch]);

  return <>{children}</>;
}
