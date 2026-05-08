"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BarChart3, ArrowRight, Mail, Lock, User, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerThunk } from "@/store/thunks/authThunks";
import { AppDispatch, RootState } from "@/store/store";
import { showToast } from "@/lib/toast";
import { registerSchema, type RegisterFormData } from "@/zod/auth";
import PublicRoute from "@/components/auth/PublicRoute";

export default function RegisterPage() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, isAuthenticated } = useSelector(
    (state: RootState) => state.auth,
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // Note: Redirect is handled by PublicRoute wrapper

  // Show error toast when error occurs
  useEffect(() => {
    if (error) {
      showToast.error(error);
    }
  }, [error]);

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const result = await dispatch(registerThunk(data));
      if (registerThunk.fulfilled.match(result)) {
        showToast.success(
          result.payload.message || "Account created successfully!",
        );
        // Redirect will happen via useEffect when isAuthenticated updates
      }
    } catch (error) {
      // Error is handled by Redux slice and shown via toast
    }
  };

  return (
    <PublicRoute>
      <div className="min-h-screen w-full flex items-center justify-center bg-[#0f172a] relative overflow-hidden p-4">
        {/* Background Decorative Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" />

        <div className="w-full max-w-[1000px] grid lg:grid-cols-2 bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl relative z-10">
          {/* Left Panel: Value Proposition */}
          <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
            <div>
              <div className="flex items-center gap-2 mb-12">
                <div className="bg-white/20 p-2 rounded-lg backdrop-blur-md">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight">
                  VizBoard
                </span>
              </div>

              <h2 className="text-4xl font-extrabold leading-tight mb-8">
                The modern way to <br />
                <span className="text-blue-200">visualize big data.</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Direct Connect",
                    desc: "Native support for SQL & NoSQL",
                  },
                  { title: "AI Insights", desc: "Automated trend detection" },
                  {
                    title: "Zero Latency",
                    desc: "Blazing fast cloud rendering",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="mt-1 bg-white/10 p-1 rounded-full">
                      <Check className="w-4 h-4 text-blue-200" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-blue-100 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-blue-100/60 text-xs">
              Trusted by 500+ data teams worldwide.
            </div>
          </div>

          {/* Right Panel: The Form */}
          <div className="p-8 lg:p-12 bg-slate-950/40">
            <div className="max-w-sm mx-auto space-y-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-white">Get Started</h1>
                <p className="text-slate-400 text-sm">
                  Create your free account in less than a minute.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-slate-300 text-xs font-semibold uppercase tracking-wider ml-1"
                  >
                    Full Name
                  </Label>
                  <div
                    className={cn(
                      "group relative transition-all duration-200 rounded-xl border bg-slate-900/50",
                      errors.name
                        ? "border-red-500 ring-4 ring-red-500/10"
                        : "border-slate-800",
                    )}
                  >
                    <User
                      className={cn(
                        "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors",
                        errors.name ? "text-red-500" : "text-slate-500",
                      )}
                    />
                    <Input
                      id="name"
                      placeholder="Steve Jobs"
                      {...register("name")}
                      className="bg-transparent border-none text-white h-12 pl-10 focus-visible:ring-0 placeholder:text-slate-600"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-xs text-red-500 font-medium">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-slate-300 text-xs font-semibold uppercase tracking-wider ml-1"
                  >
                    Email Address
                  </Label>
                  <div
                    className={cn(
                      "group relative transition-all duration-200 rounded-xl border bg-slate-900/50",
                      errors.email
                        ? "border-red-500 ring-4 ring-red-500/10"
                        : "border-slate-800",
                    )}
                  >
                    <Mail
                      className={cn(
                        "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors",
                        errors.email ? "text-red-500" : "text-slate-500",
                      )}
                    />
                    <Input
                      id="email"
                      type="email"
                      placeholder="steve@apple.com"
                      {...register("email")}
                      className="bg-transparent border-none text-white h-12 pl-10 focus-visible:ring-0 placeholder:text-slate-600"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-red-500 font-medium">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="password"
                    className="text-slate-300 text-xs font-semibold uppercase tracking-wider ml-1"
                  >
                    Password
                  </Label>
                  <div
                    className={cn(
                      "group relative transition-all duration-200 rounded-xl border bg-slate-900/50",
                      errors.password
                        ? "border-red-500 ring-4 ring-red-500/10"
                        : "border-slate-800",
                    )}
                  >
                    <Lock
                      className={cn(
                        "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors",
                        errors.password ? "text-red-500" : "text-slate-500",
                      )}
                    />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      {...register("password")}
                      className="bg-transparent border-none text-white h-12 pl-10 focus-visible:ring-0 placeholder:text-slate-600"
                    />
                  </div>
                  {errors.password && (
                    <p className="text-xs text-red-500 font-medium">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 transition-all group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Creating Account...
                      </>
                    ) : (
                      <>
                        Create Account{" "}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </Button>
              </form>

              <div className="pt-4 text-center">
                <p className="text-slate-500 text-sm">
                  Already member?{" "}
                  <Link
                    href="/auth/login"
                    className="text-blue-400 hover:text-blue-300 font-bold ml-1"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicRoute>
  );
}
