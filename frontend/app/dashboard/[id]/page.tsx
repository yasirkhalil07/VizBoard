"use client";
import { useParams } from "next/navigation";

export default function DashboardProjectPage() {
  const params = useParams();
  const dashboardId = params.id as string;

  return <div>`dashboard {dashboardId}`</div>;
}
