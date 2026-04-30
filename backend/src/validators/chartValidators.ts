import { z } from "zod";

const chartTypeEnum = z.enum(["line", "bar", "pie"]);

// ── Chart ──────────────────────────────────────────────────
export const createChartSchema = z.object({
  name: z.string().min(1, "Chart name is required").max(100),
  chartType: chartTypeEnum,
  config: z.record(z.string(), z.unknown()).default({}), // flexible JSON config
  positionX: z.number().default(0),
  positionY: z.number().default(0),
  width: z.number().positive().default(400),
  height: z.number().positive().default(300),
});

export const updateChartSchema = z
  .object({
    name: z.string().min(1).max(100).optional(),
    chartType: chartTypeEnum.optional(),
    config: z.record(z.string(), z.unknown()).optional(),
    positionX: z.number().optional(),
    positionY: z.number().optional(),
    width: z.number().positive().optional(),
    height: z.number().positive().optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field must be provided",
  });

// ── Data Source ────────────────────────────────────────────
export const dataSourceSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("file"),
    fileId: z.number().int().positive("fileId is required for file source"),
  }),
  z.object({
    type: z.literal("db"),
    connectionId: z
      .number()
      .int()
      .positive("connectionId is required for db source"),
  }),
]);

export type DataSourceInput = z.infer<typeof dataSourceSchema>;
