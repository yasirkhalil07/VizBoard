"use client";

import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/shared/AppSidebar";
import { Navbar } from "@/components/custom/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";
import { DashboardBreadcrumb } from "@/components/custom/DashboardBreadcrumb";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isProjectRoute = pathname?.match(/^\/dashboard\/[^\/]+$/); // Matches /dashboard/[id] but not /dashboard/[id]/something

  return (
    <TooltipProvider>
      <SidebarProvider
        defaultOpen={false} // Force collapsed by default for dashboard routes
      >
        <div className="flex min-h-screen w-full bg-slate-50 dark:bg-slate-900/50">
          {/* Show sidebar only if NOT on project route */}
          {!isProjectRoute && <AppSidebar />}

          <SidebarInset className="flex flex-col bg-inherit">
            {/* Top Header - only show sidebar trigger if sidebar is visible */}
            <header className="h-16 border-b bg-gradient-to-b from-blue-50/80 to-blue-50/50 dark:from-slate-950 dark:to-slate-900 flex items-center justify-between px-4 sticky top-0 z-10">
              <div className="flex items-center gap-4">
                {!isProjectRoute && (
                  <>
                    <SidebarTrigger className="text-slate-500 dark:text-slate-400 hover:bg-blue-100/50 dark:hover:bg-slate-900/30 rounded-xl transition-all" />
                    <div className="h-6 w-px bg-blue-100/50 dark:bg-slate-800" />
                  </>
                )}

                {/* Breadcrumbs */}
                <DashboardBreadcrumb />
              </div>

              <Navbar />
            </header>

            {/* Page Content */}
            <main className="flex-1 overflow-y-auto bg-inherit">
              {children}
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
}
