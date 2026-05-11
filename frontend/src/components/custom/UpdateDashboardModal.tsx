"use client";

import { Loader2, LayoutList, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { showToast } from "@/lib/toast";
import { cn } from "@/lib/utils";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { updateDashboardThunk } from "@/store/thunks/dashboardThunks";
import { useState } from "react";

interface UpdateDashboardModalProps {
  dashboardId: number;
  initialName: string;
  open: boolean;
  onClose: () => void;
}

export function UpdateDashboardModal({
  dashboardId,
  initialName,
  open,
  onClose,
}: UpdateDashboardModalProps) {
  const [name, setName] = useState(initialName);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      showToast.error("Dashboard name is required");
      return;
    }

    setLoading(true);
    try {
      await dispatch(
        updateDashboardThunk({
          dashboardId,
          payload: {
            name: name.trim(),
          },
        })
      ).unwrap();
      showToast.success("Dashboard updated successfully!");
      onClose();
    } catch (error: any) {
      showToast.error(error.message || "Failed to update dashboard");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-2xl backdrop-blur-xl transition-colors duration-300">
        {/* Decorative Header - Adaptive Gradients */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-600/20 dark:to-indigo-600/20 p-6 border-b border-slate-100 dark:border-slate-800">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-1">
              <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-600/20">
                <LayoutList className="w-5 h-5 text-white" />
              </div>
              <DialogTitle className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Update Dashboard
              </DialogTitle>
            </div>
            <DialogDescription className="text-slate-500 dark:text-slate-400">
              Update your dashboard name and settings.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <Label
                htmlFor="name"
                className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400"
              >
                Dashboard Name
              </Label>
            </div>
            <div
              className={cn(
                "relative transition-all duration-300 rounded-xl border group",
                "bg-slate-50 dark:bg-slate-900/50",
                isFocused
                  ? "border-blue-500 ring-4 ring-blue-500/10 dark:ring-blue-500/20"
                  : "border-slate-200 dark:border-slate-800",
              )}
            >
              <Sparkles
                className={cn(
                  "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors",
                  isFocused
                    ? "text-blue-500"
                    : "text-slate-400 dark:text-slate-600",
                )}
              />
              <Input
                id="name"
                type="text"
                placeholder="e.g. Sales Performance 2026"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                disabled={loading}
                className="bg-transparent border-none text-slate-900 dark:text-white h-12 pl-10 focus-visible:ring-0 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                maxLength={100}
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="ghost"
              onClick={handleClose}
              disabled={loading}
              className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 font-medium"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={loading || !name.trim()}
              className="bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-bold px-6 h-11 rounded-xl shadow-lg shadow-blue-600/20 transition-all active:scale-95 disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <LayoutList className="mr-2 h-4 w-4" />
              )}
              Update Dashboard
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
