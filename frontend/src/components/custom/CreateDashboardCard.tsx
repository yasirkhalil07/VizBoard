import { Plus } from "lucide-react";
import { Card } from "@/components/ui/card";

export const CreateDashboardCard = () => {
  return (
    <Card
      className="group relative flex flex-col items-center justify-center h-64 border-2 border-dashed border-slate-300 hover:border-blue-500 hover:bg-blue-50/50 cursor-pointer transition-all duration-200"
      onClick={() => console.log("Create new dashboard logic")}
    >
      <div className="p-4 rounded-full bg-slate-100 group-hover:bg-blue-100 transition-colors">
        <Plus className="w-8 h-8 text-slate-500 group-hover:text-blue-600" />
      </div>
      <p className="mt-4 font-medium text-slate-600 group-hover:text-blue-700">
        Blank Dashboard
      </p>
    </Card>
  );
};
