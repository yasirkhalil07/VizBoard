"use client";

import { Plus } from "lucide-react";
import { Card } from "@/components/ui/card";

export const CreateDashboardCard = () => {
  return (
    <Card
      className="group relative flex flex-col items-center justify-center h-64 border-2 border-dashed border-muted-foreground/30 hover:border-primary hover:bg-muted/50 cursor-pointer transition-all duration-200"
      onClick={() => console.log("Create new dashboard logic")}
    >
      <div className="p-4 rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
        <Plus className="w-8 h-8 text-muted-foreground group-hover:text-primary" />
      </div>
      <p className="mt-4 font-medium text-muted-foreground group-hover:text-primary">
        Blank Dashboard
      </p>
    </Card>
  );
};
