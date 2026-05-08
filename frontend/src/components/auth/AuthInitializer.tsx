"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { refreshTokenThunk } from "@/store/thunks/authThunks";
import { setInitialized } from "@/store/slices/authSlice";

interface AuthInitializerProps {
  children: React.ReactNode;
}

export default function AuthInitializer({ children }: AuthInitializerProps) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Only attempt to refresh token if we might have an existing session
    // Check if we have a refresh token cookie first
    const initializeAuth = async () => {
      try {
        // Check if refresh token cookie exists (more efficient check)
        const hasRefreshToken = document.cookie.includes("refreshToken");

        if (hasRefreshToken) {
          await dispatch(refreshTokenThunk()).unwrap();
        } else {
          // No refresh token, mark as initialized without trying to refresh
          dispatch(setInitialized());
        }
      } catch (error) {
        // Token refresh failed, user needs to login
        console.log("No active session found");
        dispatch(setInitialized());
      }
    };

    initializeAuth();
  }, [dispatch]);

  return <>{children}</>;
}
