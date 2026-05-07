"use client";

import React, { useState } from "react";
import { Database, Plus, Server, Lock, Globe, Hash } from "lucide-react";
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
    // Future Thunk call goes here
    reset();
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700 gap-2 shadow-md transition-all">
          <Plus className="w-4 h-4" />
          Add Connection
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden border-none shadow-2xl">
        <div className="bg-blue-600 p-6 text-white">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <Database className="w-6 h-6 text-white" />
              </div>
              <DialogTitle className="text-2xl text-white">
                Database Connection
              </DialogTitle>
            </div>
            <DialogDescription className="text-blue-100 mt-2">
              Enter your database credentials to link your data to VizBoard.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 space-y-6 bg-white"
        >
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            {/* Connection Name - Full Width */}
            <div className="col-span-2 space-y-2">
              <Label htmlFor="connectionName">Connection Name</Label>
              <Input
                id="connectionName"
                placeholder="e.g. Production MySQL"
                {...register("connectionName")}
                className={errors.connectionName ? "border-red-500" : ""}
              />
              {errors.connectionName && (
                <p className="text-xs text-red-500 font-medium">
                  {errors.connectionName.message}
                </p>
              )}
            </div>

            {/* DB Type */}
            <div className="space-y-2">
              <Label>Database Type</Label>
              <Select
                defaultValue={selectedDbType}
                onValueChange={(val: "mysql" | "postgres") => {
                  setValue("dbType", val);
                  setValue("port", val === "mysql" ? 3306 : 5432);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select DB" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mysql">MySQL</SelectItem>
                  <SelectItem value="postgres">PostgreSQL</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Host */}
            <div className="space-y-2">
              <Label htmlFor="host" className="flex items-center gap-2">
                <Globe className="w-3 h-3" /> Host
              </Label>
              <Input id="host" {...register("host")} />
              {errors.host && (
                <p className="text-xs text-red-500 font-medium">
                  {errors.host.message}
                </p>
              )}
            </div>

            {/* Port */}
            <div className="space-y-2">
              <Label htmlFor="port" className="flex items-center gap-2">
                <Hash className="w-3 h-3" /> Port
              </Label>
              <Input id="port" type="number" {...register("port")} />
            </div>

            {/* Database Name */}
            <div className="space-y-2">
              <Label htmlFor="databaseName" className="flex items-center gap-2">
                <Server className="w-3 h-3" /> DB Name
              </Label>
              <Input id="databaseName" {...register("databaseName")} />
              {errors.databaseName && (
                <p className="text-xs text-red-500 font-medium">
                  {errors.databaseName.message}
                </p>
              )}
            </div>

            {/* Username */}
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" {...register("username")} />
              {errors.username && (
                <p className="text-xs text-red-500 font-medium">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="flex items-center gap-2">
                <Lock className="w-3 h-3" /> Password
              </Label>
              <Input id="password" type="password" {...register("password")} />
              {errors.password && (
                <p className="text-xs text-red-500 font-medium">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-10"
            >
              Test & Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
