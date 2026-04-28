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
        <div className="flex min-h-screen w-full bg-slate-50">
          {/* Modern Collapsible Sidebar */}
          <AppSidebar />

          <SidebarInset className="flex flex-col">
            {/* Top Header with Sidebar Trigger */}
            <header className="h-16 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-10">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="text-slate-500 hover:bg-slate-100" />
                <div className="h-6 w-px bg-slate-200" />
                {/* Optional: Breadcrumbs could go here */}
              </div>

              <Navbar />
            </header>

            {/* Page Content */}
            <main className="flex-1 overflow-y-auto">{children}</main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
}
