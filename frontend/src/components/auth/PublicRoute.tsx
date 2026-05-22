"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Skeleton } from "@/components/ui/skeleton";

interface PublicRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
  fallback?: React.ReactNode;
}

export default function PublicRoute({
  children,
  redirectTo = "/dashboard",
  fallback,
}: PublicRouteProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isChecking, setIsChecking] = useState(true);

  const { isAuthenticated, initialized, loading } = useSelector(
    (state: RootState) => state.auth,
  );

  useEffect(() => {
    // If auth state is not initialized yet, wait
    if (!initialized) {
      return;
    }

    // If still loading (login/register in progress), wait for it to complete
    if (loading) {
      return;
    }

    // If already authenticated and not loading, redirect to dashboard or callback URL
    if (isAuthenticated) {
      const callbackUrl = searchParams.get("callbackUrl");
      const redirectUrl = callbackUrl || redirectTo;
      router.push(redirectUrl);
      return;
    }

    // Auth check complete
    setIsChecking(false);
  }, [isAuthenticated, initialized, loading, router, redirectTo, searchParams]);

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

  // If not authenticated and initialized, render children
  return <>{children}</>;
}
