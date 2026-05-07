"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from '@/store';
// import { fetchDashboards } from '@/store/slices/dashboardSlice';

import { CreateDashboardCard } from "@/components/custom/CreateDashboardCard";
import { DashboardCard } from "@/components/custom/DashboardCard";
import { Skeleton } from "@/components/ui/skeleton";
import { ConnectionModal } from "@/components/custom/ConnectionModal";
export default function DashboardHomePage() {
  // const dispatch = useDispatch<AppDispatch>();
  // const { items, loading } = useSelector((state: RootState) => state.dashboards);

  // useEffect(() => {
  //   dispatch(fetchDashboards());
  // }, [dispatch]);

  // dummy data for now
  const items = [
    { id: 1, name: "Sales Dashboard", updatedAt: "2025-10-15" },
    { id: 2, name: "Marketing Analytics", updatedAt: "2025-10-14" },
    { id: 3, name: "User Engagement", updatedAt: "2025-10-13" },
    { id: 4, name: "Revenue Trends", updatedAt: "2025-10-12" },
  ];
  const loading = false;

  return (
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
          items.map((dashboard) => (
            <DashboardCard
              key={dashboard.id}
              name={dashboard.name}
              updatedAt={dashboard.updatedAt}
            />
          ))}
      </div>
    </main>
  );
}
