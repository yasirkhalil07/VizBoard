"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Skeleton } from "@/components/ui/skeleton";

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
  fallback?: React.ReactNode;
}

export default function ProtectedRoute({
  children,
  redirectTo = "/auth/login",
  fallback,
}: ProtectedRouteProps) {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  const { isAuthenticated, initialized, loading } = useSelector(
    (state: RootState) => state.auth,
  );

  useEffect(() => {
    // If auth state is not initialized yet, wait
    if (!initialized) {
      return;
    }

    // If not authenticated, redirect to login
    if (!isAuthenticated) {
      const currentPath = window.location.pathname;
      const loginUrl = `${redirectTo}?callbackUrl=${encodeURIComponent(currentPath)}`;
      router.push(loginUrl);
      return;
    }

    // Auth check complete
    setIsChecking(false);
  }, [isAuthenticated, initialized, router, redirectTo]);

  // Show loading spinner while checking auth state
  if (isChecking || loading) {
    return (
      fallback || (
        <div className="flex items-center justify-center min-h-screen">
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      )
    );
  }

  // If authenticated and initialized, render children
  return <>{children}</>;
}
