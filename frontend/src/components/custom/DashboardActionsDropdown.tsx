"use client";

import { MoreVertical, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { deleteDashboardThunk } from "@/store/thunks/dashboardThunks";
import { useState } from "react";
import { UpdateDashboardModal } from "./UpdateDashboardModal";
import { Fragment } from "react";

interface DashboardActionsDropdownProps {
  dashboardId: number;
  dashboardName: string;
  onUpdate?: (name: string) => void;
  onDelete?: (id: number) => void;
}

export const DashboardActionsDropdown = ({
  dashboardId,
  dashboardName,
  onUpdate,
  onDelete,
}: DashboardActionsDropdownProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const handleUpdate = () => {
    console.log("Update dashboard:", dashboardName);
    setShowUpdateModal(true);
    onUpdate?.(dashboardName);
  };

  const handleDelete = async () => {
    console.log("Delete dashboard ID:", dashboardId);
    try {
      await dispatch(deleteDashboardThunk(dashboardId)).unwrap();
      console.log("Dashboard deleted successfully");
      onDelete?.(dashboardId);
    } catch (error) {
      console.error("Failed to delete dashboard:", error);
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 text-slate-400 hover:text-blue-600"
          >
            <MoreVertical className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem
            onClick={handleUpdate}
            className="cursor-pointer hover:bg-blue-50 dark:hover:bg-slate-800 focus:bg-blue-50 dark:focus:bg-slate-800"
          >
            <Edit className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-slate-700 dark:text-slate-300">Update</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={handleDelete}
            className="cursor-pointer hover:bg-red-50 dark:hover:bg-slate-800 focus:bg-red-50 dark:focus:bg-slate-800"
          >
            <Trash2 className="mr-2 h-4 w-4 text-red-600 dark:text-red-400" />
            <span className="text-slate-700 dark:text-slate-300">Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Update Dashboard Modal */}
      <UpdateDashboardModal
        dashboardId={dashboardId}
        initialName={dashboardName}
        open={showUpdateModal}
        onClose={() => setShowUpdateModal(false)}
      />
    </>
  );
};
