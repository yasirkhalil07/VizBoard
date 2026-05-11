import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/shared/AppSidebar";
import { Navbar } from "@/components/custom/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <div className="flex min-h-screen w-full bg-slate-50 dark:bg-slate-900/50">
          {/* Modern Collapsible Sidebar */}
          <AppSidebar />

          <SidebarInset className="flex flex-col bg-inherit">
            {/* Top Header with Sidebar Trigger */}
            <header className="h-16 border-b bg-gradient-to-b from-blue-50/80 to-blue-50/50 dark:from-slate-950 dark:to-slate-900 flex items-center justify-between px-4 sticky top-0 z-10">
              <div className="flex items-center gap-4 ">
                <SidebarTrigger className="text-slate-500 dark:text-slate-400 hover:bg-blue-100/50 dark:hover:bg-slate-900/30 rounded-xl transition-all" />
                <div className="h-6 w-px bg-blue-100/50 dark:bg-slate-800" />
                {/* Optional: Breadcrumbs could go here */}
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
