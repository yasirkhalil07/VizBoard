"use client";

import React, { useState } from "react";
import { Search, Bell, UserCircle, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div className="flex items-center justify-between flex-1 px-6 h-16 bg-gradient-to-b from-blue-50/80 to-blue-50/50 dark:from-slate-950 dark:to-slate-900 backdrop-blur-md border-b border-blue-100/50 dark:border-slate-800 transition-colors duration-300">
      {/* Search Section with Active States */}
      <div className="relative w-72 lg:w-96 group">
        <div
          className={cn(
            "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors",
            isSearchFocused ? "text-blue-500" : "text-slate-400",
          )}
        >
          <Search className="w-4 h-4" />
        </div>
        <Input
          placeholder="Search dashboards..."
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
          className={cn(
            "pl-10 h-10 w-full transition-all duration-300 rounded-xl border-none font-medium",
            "bg-white/80 dark:bg-slate-900/50",
            "placeholder:text-slate-400 dark:placeholder:text-slate-600",
            "text-slate-900 dark:text-slate-100",
            isSearchFocused
              ? "ring-2 ring-blue-500/20 bg-white dark:bg-slate-800 shadow-sm"
              : "hover:bg-blue-100/50 dark:hover:bg-slate-800/50",
          )}
        />
        {isSearchFocused && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Sparkles className="w-3 h-3 text-blue-500 animate-pulse" />
          </div>
        )}
      </div>

      {/* Actions Section */}
      <div className="flex items-center gap-3">
        {/* Notification Button */}
        <Button
          variant="ghost"
          size="icon"
          className="relative text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-100/50 dark:hover:bg-slate-900/30 rounded-xl transition-all"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-blue-600 rounded-full border-2 border-white dark:border-slate-950" />
        </Button>

        <div className="w-[1px] h-6 bg-slate-200 dark:bg-slate-800 mx-1" />

        <ThemeSwitcher />

        {/* User Profile Button */}
        <Button
          variant="ghost"
          className="flex items-center gap-3 px-2 py-1.5 h-11 rounded-xl hover:bg-blue-100/50 dark:hover:bg-slate-900/30 transition-all group"
        >
          <div className="flex flex-col items-end hidden lg:flex">
            <span className="text-xs font-bold text-slate-900 dark:text-slate-100 leading-none">
              Admin User
            </span>
            <span className="text-[10px] font-medium text-slate-500 dark:text-slate-500 mt-1 uppercase tracking-tighter">
              Administrator
            </span>
          </div>

          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform">
            <UserCircle className="w-6 h-6 text-white" />
          </div>
        </Button>
      </div>
    </div>
  );
};
