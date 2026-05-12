"use client";

import { Layout, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { DashboardActionsDropdown } from "./DashboardActionsDropdown";

interface DashboardCardProps {
  id: number;
  name: string;
  updatedAt: string;
}

export const DashboardCard = ({ id, name, updatedAt }: DashboardCardProps) => {
  const handleUpdate = (dashboardName: string) => {
    console.log("Update dashboard:", dashboardName);
    // TODO: Implement update functionality
  };

  const handleDelete = (dashboardId: number) => {
    console.log("Delete dashboard ID:", dashboardId);
    // TODO: Implement delete functionality with thunk
  };

  return (
    <Card className="overflow-hidden border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer group">
      {/* Visual Preview Area - Matching Sidebar Tint */}
      <CardContent className="h-40 bg-[#f0f7ff] dark:bg-slate-900/50 flex items-center justify-center border-b border-blue-100/50 dark:border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
          <Layout className="w-10 h-10 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
        </div>

        {/* Hover Action Badge */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg shadow-lg">
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 flex justify-between items-center bg-white dark:bg-slate-950">
        <div className="space-y-1 flex-1 min-w-0 mr-3">
          <h3 className="font-bold text-sm truncate text-slate-900 dark:text-slate-100 tracking-tight">
            {name}
          </h3>
          <p className="text-[11px] text-slate-500 dark:text-slate-500 font-semibold uppercase tracking-wider">
            Updated {new Date(updatedAt).toLocaleDateString()}
          </p>
        </div>
        <DashboardActionsDropdown
          dashboardId={id}
          dashboardName={name}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </CardFooter>
    </Card>
  );
};
