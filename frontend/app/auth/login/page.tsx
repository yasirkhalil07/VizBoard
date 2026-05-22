"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BarChart3, LogIn, Mail, Lock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginThunk } from "@/store/thunks/authThunks";
import { AppDispatch, RootState } from "@/store/store";
import { showToast } from "@/lib/toast";
import { loginSchema, type LoginFormData } from "@/zod/auth";
import PublicRoute from "@/components/auth/PublicRoute";

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, isAuthenticated } = useSelector(
    (state: RootState) => state.auth,
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Handle error toast
  useEffect(() => {
    if (error) {
      showToast.error(error);
    }
  }, [error]);

  // Handle redirect after successful login - keep loader visible during redirect
  useEffect(() => {
    if (isAuthenticated) {
      // Small delay to ensure loader is visible during transition
      const timer = setTimeout(() => {
        router.push("/dashboard");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, router]);

  const onSubmit = async (data: LoginFormData) => {
    try {
      const result = await dispatch(loginThunk(data));
      if (loginThunk.fulfilled.match(result)) {
        showToast.success(result.payload.message || "Welcome back!");
        // Redirect will happen via useEffect when isAuthenticated updates
      }
    } catch (error) {
      // Error is handled by Redux slice and shown via toast
    }
  };

  return (
    <PublicRoute>
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden p-4">
        {/* Ambient Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[140px] rounded-full" />
        </div>

        <div className="w-full max-w-[460px] relative z-10">
          {/* Card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-2xl shadow-2xl hover:shadow-blue-500/5 transition">
            {/* Header */}
            <div className="text-center mb-8">
              {/* Logo */}
              <div className="flex flex-col items-center mb-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-600 blur-xl opacity-40 rounded-2xl" />
                  <div className="relative bg-blue-600 p-3 rounded-2xl shadow-xl">
                    <BarChart3 className="text-white w-7 h-7" />
                  </div>
                </div>

                <h1 className="text-2xl font-bold text-white mt-4 tracking-tight">
                  VizBoard
                </h1>
                <p className="text-slate-400 text-sm mt-1">
                  Data dashboards made simple
                </p>
              </div>
              {/* <h2 className="text-2xl font-semibold text-white">Welcome Back</h2>
            <p className="text-slate-400 text-sm mt-2">
              Sign in to continue your workspace
            </p> */}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <Label className="text-slate-300 text-xs uppercase tracking-widest">
                  Email
                </Label>

                <div
                  className={cn(
                    "flex items-center gap-3 rounded-xl border bg-slate-950/40 px-4 transition-all",
                    errors.email
                      ? "border-red-500 ring-2 ring-red-500/20"
                      : "border-white/10",
                  )}
                >
                  <Mail
                    className={cn(
                      "w-4 h-4",
                      errors.email ? "text-red-400" : "text-slate-500",
                    )}
                  />

                  <Input
                    type="email"
                    placeholder="you@company.com"
                    {...register("email")}
                    className="border-none bg-transparent text-white focus-visible:ring-0 placeholder:text-slate-600 h-12"
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-500 font-medium">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label className="text-slate-300 text-xs uppercase tracking-widest">
                    Password
                  </Label>

                  <Link
                    href="#"
                    className="text-xs text-blue-400 hover:text-blue-300 transition"
                  >
                    Forgot?
                  </Link>
                </div>

                <div
                  className={cn(
                    "flex items-center gap-3 rounded-xl border bg-slate-950/40 px-4 transition-all",
                    errors.password
                      ? "border-red-500 ring-2 ring-red-500/20"
                      : "border-white/10",
                  )}
                >
                  <Lock
                    className={cn(
                      "w-4 h-4",
                      errors.password ? "text-red-400" : "text-slate-500",
                    )}
                  />

                  <Input
                    type="password"
                    placeholder="••••••••"
                    {...register("password")}
                    className="border-none bg-transparent text-white focus-visible:ring-0 placeholder:text-slate-600 h-12"
                  />
                </div>
                {errors.password && (
                  <p className="text-xs text-red-500 font-medium">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98] group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="flex items-center gap-2">
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Signing In...
                    </>
                  ) : (
                    <>
                      Sign In
                      <LogIn className="w-4 h-4 group-hover:translate-x-1 transition" />
                    </>
                  )}
                </span>
              </Button>
            </form>

            {/* Footer */}
            <div className="mt-8 text-center space-y-4">
              <p className="text-slate-500 text-sm">
                Don&apos;t have an account?{" "}
                <Link
                  href="/auth/register"
                  className="text-blue-400 hover:text-blue-300 font-medium"
                >
                  Sign up
                </Link>
              </p>

              <div className="flex justify-center">
                <div className="flex items-center gap-2 text-xs text-slate-500 border border-white/10 bg-slate-950/40 px-3 py-1.5 rounded-full">
                  <ShieldCheck className="w-3 h-3 text-green-400" />
                  Secure encrypted login
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicRoute>
  );
}
