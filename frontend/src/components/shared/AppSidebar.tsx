"use client";

import {
  LayoutDashboard,
  Database,
  FileText,
  Share2,
  BarChart3,
  LogOut,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

const navItems = [
  { name: "Dashboards", href: "/", icon: LayoutDashboard },
  { name: "Data Sources", href: "/connections", icon: Database },
  { name: "Files", href: "/files", icon: FileText },
  { name: "Shared", href: "/shared", icon: Share2 },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <Sidebar
      collapsible="icon"
      // UPDATED: bg-blue-50/80 for high visibility light mode, deeper slate for dark mode
      className="border-r border-blue-100/50 dark:border-slate-800 bg-[#f0f7ff] dark:bg-slate-950 transition-colors duration-300 shadow-xl"
    >
      {/* Sidebar Header with the branding area */}
      <SidebarHeader className="h-20 flex items-center px-4 bg-gradient-to-b from-blue-100/50 to-transparent dark:from-blue-900/20 dark:to-transparent">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-600/30 shrink-0">
            <BarChart3 className="text-white w-5 h-5" />
          </div>
          {!isCollapsed && (
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
              VizBoard
            </span>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-6 bg-gradient-to-b from-transparent to-blue-100/50 dark:from-transparent dark:to-blue-900/20">
        <SidebarMenu className="gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.name}
                  className={cn(
                    "h-11 px-4 transition-all duration-200 rounded-xl",
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 hover:text-white"
                      : "text-slate-600 dark:text-slate-400 hover:bg-blue-100/50 dark:hover:bg-slate-900 hover:text-blue-700 dark:hover:text-slate-100",
                  )}
                >
                  <Link href={item.href} className="flex items-center gap-3">
                    <item.icon
                      className={cn(
                        "w-5 h-5 transition-colors",
                        isActive
                          ? "text-white"
                          : "text-slate-400 dark:text-slate-500",
                      )}
                    />
                    <span
                      className={cn("font-semibold", isCollapsed && "hidden")}
                    >
                      {item.name}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-transparent dark:border-slate-800 bg-gradient-to-b from-blue-100/30 to-blue-100/50 dark:from-blue-900/20 dark:to-transparent">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Logout"
              className="h-11 px-4 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-xl transition-all cursor-pointer"
              onClick={handleLogout}
            >
              <LogOut className="w-5 h-5" />
              {!isCollapsed && (
                <span className="font-semibold ml-1">Logout</span>
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
