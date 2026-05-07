"use client";

import { Search, Bell, UserCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between flex-1 pl-4">
      {/* Search moved into the Navbar flex container */}
      <div className="relative w-72 lg:w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search dashboards..."
          className="pl-10 bg-input border-none focus-visible:ring-1 focus-visible:ring-ring h-9 text-foreground"
        />
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground rounded-full"
        >
          <Bell className="w-5 h-5" />
        </Button>
        <ThemeSwitcher />
        <Button
          variant="ghost"
          className="flex items-center gap-2 px-3 rounded-full hover:bg-muted"
        >
          <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center">
            <UserCircle className="w-5 h-5 text-blue-600" />
          </div>
          <span className="hidden md:inline text-sm font-medium text-foreground">
            Admin User
          </span>
        </Button>
      </div>
    </div>
  );
};
