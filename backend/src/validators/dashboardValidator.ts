import { z } from "zod";

// ── Dashboard ──────────────────────────────────────────────
export const createDashboardSchema = z.object({
  name: z.string().min(1, "Dashboard name is required").max(100),
});

export const updateDashboardSchema = z.object({
  name: z.string().min(1, "Dashboard name is required").max(100),
});

// ── Tab ────────────────────────────────────────────────────
export const createTabSchema = z.object({
  name: z.string().min(1, "Tab name is required").max(100),
  orderIndex: z.number().int().nonnegative().optional(),
});

export const updateTabSchema = z
  .object({
    name: z.string().min(1).max(100).optional(),
    orderIndex: z.number().int().nonnegative().optional(),
  })
  .refine((data) => data.name !== undefined || data.orderIndex !== undefined, {
    message: "At least one field (name or orderIndex) must be provided",
  });
