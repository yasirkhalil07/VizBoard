"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { getDashboardsThunk } from "@/store/thunks/dashboardThunks";
import { CreateDashboardCard } from "@/components/custom/CreateDashboardCard";
import { DashboardCard } from "@/components/custom/DashboardCard";
import { Skeleton } from "@/components/ui/skeleton";
import { ConnectionModal } from "@/components/custom/ConnectionModal";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function DashboardHomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const { dashboards, loading, error } = useSelector(
    (state: RootState) => state.dashboard,
  );
  const { isAuthenticated, accessToken } = useSelector(
    (state: RootState) => state.auth,
  );

  useEffect(() => {
    console.log("Dashboard auth state:", { isAuthenticated, accessToken });

    // Only fetch dashboards when we have an access token
    if (isAuthenticated && accessToken) {
      console.log("Fetching dashboards...");
      dispatch(getDashboardsThunk());
    } else {
      console.log("Not fetching dashboards - missing auth:", {
        isAuthenticated,
        accessToken,
      });
    }
  }, [dispatch, isAuthenticated, accessToken]);

  return (
    <ProtectedRoute>
      <main className="p-8 max-w-7xl mx-auto">
        <header>
          <div className="mb-8 flex justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Recent Reports
              </h1>
              <p className="text-muted-foreground">
                Manage and create your data visualizations
              </p>
            </div>
            {/* to be added next */}
            <ConnectionModal />
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {/* Always show Create button first */}
          <CreateDashboardCard />

          {/* Loading State */}
          {loading &&
            Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-64 w-full rounded-xl" />
            ))}

          {/* Data List */}
          {!loading &&
            dashboards.map((dashboard) => (
              <DashboardCard
                key={dashboard.id}
                name={dashboard.name}
                updatedAt={dashboard.updated_at}
              />
            ))}
        </div>
      </main>
    </ProtectedRoute>
  );
}
