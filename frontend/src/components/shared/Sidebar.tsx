"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Database,
  FileText,
  Settings,
  Share2,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboards", href: "/", icon: LayoutDashboard },
  { name: "Data Sources", href: "/connections", icon: Database },
  { name: "Files", href: "/files", icon: FileText },
  { name: "Shared with me", href: "/shared", icon: Share2 },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-gradient-to-b from-blue-50 to-indigo-50 h-screen sticky top-0 flex flex-col">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-blue-600 p-2 rounded-lg">
          <BarChart3 className="text-white w-6 h-6" />
        </div>
        <span className="font-bold text-xl tracking-tight text-slate-800">
          VizBoard
        </span>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
              )}
            >
              <item.icon
                className={cn(
                  "w-5 h-5",
                  isActive ? "text-blue-600" : "text-slate-400",
                )}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t">
        <button className="flex items-center gap-3 px-3 py-2 w-full text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-md transition-colors">
          <Settings className="w-5 h-5 text-slate-400" />
          Settings
        </button>
      </div>
    </aside>
  );
};
