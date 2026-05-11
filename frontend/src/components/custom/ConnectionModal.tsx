"use client";

import React, { useState } from "react";
import {
  Database,
  Plus,
  Server,
  Lock,
  Globe,
  Hash,
  Sparkles,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  connectionFormSchema,
  type ConnectionFormValues,
} from "@/zod/connection";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export function ConnectionModal() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ConnectionFormValues>({
    resolver: zodResolver(connectionFormSchema) as any,
    defaultValues: {
      connectionName: "",
      dbType: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      databaseName: "",
    },
  });

  const selectedDbType = watch("dbType");

  const onSubmit = (data: ConnectionFormValues) => {
    console.log("Submitting Connection:", data);
    reset();
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-bold px-6 py-5 rounded-xl shadow-lg shadow-blue-600/20 gap-2 transition-all active:scale-95">
          <Plus className="w-5 h-5" />
          Add Connection
        </Button>
      </DialogTrigger>

      {/* <DialogContent className="sm:max-w-[580px] p-0 overflow-hidden border-none shadow-2xl rounded-3xl"> */}
      <DialogContent
        className="
    sm:max-w-[580px]
    p-0
    overflow-hidden
    rounded-3xl
    border border-slate-200 dark:border-slate-800
    shadow-2xl
    [&>button]:z-50
  "
      >
        {/* VizBoard Header Branding */}
        <div className="bg-[#f0f7ff] dark:bg-blue-950/30 p-3 border-b border-blue-100 dark:border-slate-800 relative">
          <div className="absolute top-2 right-7 opacity-10">
            <Database className="w-18 h-18 text-blue-600" />
          </div>

          <DialogHeader className="relative z-10">
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 p-3 rounded-2xl shadow-xl shadow-blue-600/30">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-1">
                <DialogTitle className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Database Connection
                </DialogTitle>
                <DialogDescription className="text-slate-500 dark:text-slate-400 font-medium">
                  Connect your external data sources to build dashboards.
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-8 space-y-6 bg-white dark:bg-slate-950"
        >
          <div className="grid grid-cols-2 gap-x-6 gap-y-5">
            {/* Connection Name */}
            <div className="col-span-2 space-y-2">
              <Label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
                Connection Name
              </Label>
              <div className="relative">
                <Sparkles className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
                <Input
                  placeholder="e.g. Production MySQL"
                  {...register("connectionName")}
                  className={cn(
                    "pl-10 h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-none focus-visible:ring-2 focus-visible:ring-blue-500/20 font-medium",
                    errors.connectionName && "ring-2 ring-red-500/20",
                  )}
                />
              </div>
            </div>

            {/* DB Type */}
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
                Type
              </Label>
              <Select
                defaultValue={selectedDbType}
                onValueChange={(val: "mysql" | "postgres") => {
                  setValue("dbType", val);
                  setValue("port", val === "mysql" ? 3306 : 5432);
                }}
              >
                <SelectTrigger className="h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-none">
                  <SelectValue placeholder="Select DB" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-slate-200 dark:border-slate-800">
                  <SelectItem value="mysql">MySQL</SelectItem>
                  <SelectItem value="postgres">PostgreSQL</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Host */}
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
                Host
              </Label>
              <Input
                className="h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-none"
                {...register("host")}
              />
            </div>

            {/* Port & DB Name */}
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
                Port
              </Label>
              <Input
                type="number"
                className="h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-none"
                {...register("port")}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
                Database
              </Label>
              <Input
                className="h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-none"
                {...register("databaseName")}
              />
            </div>

            {/* Username & Password */}
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
                Username
              </Label>
              <Input
                className="h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-none"
                {...register("username")}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
                Password
              </Label>
              <Input
                type="password"
                className="h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-none"
                {...register("password")}
              />
            </div>
          </div>

          <div className="flex justify-end items-center gap-4 pt-6 mt-4 border-t border-slate-100 dark:border-slate-900">
            <Button
              type="button"
              variant="ghost"
              className="font-bold cursor-pointer text-slate-500 hover:text-slate-900 dark:hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-bold h-12 px-8 rounded-xl shadow-lg shadow-blue-600/20 transition-all"
            >
              Test & Save Connection
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
