"use client";

import {
  LayoutDashboard,
  Database,
  FileText,
  Share2,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Settings,
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

  return (
    <Sidebar collapsible="icon" className="border-r border-slate-200 bg-white">
      <SidebarHeader className="h-16 flex items-center px-4">
        <div className="flex items-start mt-2 gap-3">
          <div className="bg-blue-600 p-2 rounded-lg shrink-0">
            <BarChart3 className="text-white w-5 h-5" />
          </div>
          {!isCollapsed && (
            <span className="font-bold text-lg tracking-tight text-slate-800 transition-opacity">
              VizBoard
            </span>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        <SidebarMenu>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.name}
                  className={cn(
                    "transition-all duration-200",
                    isActive
                      ? "bg-blue-50 text-blue-700 hover:bg-blue-50 hover:text-blue-700"
                      : "text-slate-600 hover:bg-slate-100",
                  )}
                >
                  <Link href={item.href} className="flex items-center gap-3">
                    <item.icon
                      className={cn(
                        "w-5 h-5",
                        isActive ? "text-blue-600" : "text-slate-400",
                      )}
                    />
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-slate-100">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Settings" className="text-slate-600">
              <Settings className="w-5 h-5 text-slate-400" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
