"use client";

import { Plus, LayoutDashboard, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { CreateDashboardModal } from "./CreateDashboardModal";
import { cn } from "@/lib/utils";

export function CreateDashboardCard() {
  return (
    <CreateDashboardModal>
      <Card
        className={cn(
          "group relative flex flex-col items-center justify-center h-64 cursor-pointer overflow-hidden transition-all duration-300",
          // Light Mode: Soft blue tint and clean border
          "bg-[#f0f7ff]/50 border-2 border-dashed border-blue-200 hover:border-blue-500 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10",
          // Dark Mode: Deep slate with glass effect
          "dark:bg-slate-950/40 dark:border-slate-800 dark:hover:border-blue-500 dark:hover:bg-slate-900 dark:hover:shadow-blue-500/5",
        )}
      >
        {/* Animated Background Glow (Dark Mode Only) */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Icon Container */}
        <div
          className={cn(
            "relative z-10 p-5 rounded-2xl transition-all duration-300 transform group-hover:scale-110",
            "bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800",
            "group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:shadow-lg group-hover:shadow-blue-600/30",
          )}
        >
          <Plus className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />

          {/* Sparkle Decoration */}
          <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity delay-100" />
        </div>

        {/* Text Section */}
        <div className="relative z-10 mt-5 text-center px-4">
          <p className="font-bold text-slate-900 dark:text-slate-100 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            Blank Dashboard
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-500 font-medium">
            Start a new workspace from scratch
          </p>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 transition-all duration-300" />
      </Card>
    </CreateDashboardModal>
  );
}
