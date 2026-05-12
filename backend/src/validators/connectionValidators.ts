import { z } from "zod";

const dbTypeEnum = z.enum(["mysql", "postgres"]);

// ── Create ─────────────────────────────────────────────────
export const createConnectionSchema = z.object({
  connectionName: z
    .string()
    .min(1, "Connection name is required")
    .max(100)
    .regex(
      /^[a-zA-Z0-9 _-]+$/,
      "Only letters, numbers, spaces, hyphens and underscores allowed",
    ),

  dbType: dbTypeEnum,

  host: z.string().min(1, "Host is required").max(253),
  // accepts both hostnames and IPs — deep URL validation is not needed here
  // because the real validation happens on the live test connection

  port: z.number().int().min(1).max(65535).default(3306),

  username: z.string().min(1, "Username is required").max(100),

  password: z.string().min(1, "Password is required"),

  databaseName: z.string().min(1, "Database name is required").max(100),
});

// ── Update (all optional, at least one required) ───────────
export const updateConnectionSchema = z
  .object({
    connectionName: z
      .string()
      .min(1)
      .max(100)
      .regex(/^[a-zA-Z0-9 _-]+$/)
      .optional(),

    dbType: dbTypeEnum.optional(),

    host: z.string().min(1).max(253).optional(),

    port: z.number().int().min(1).max(65535).optional(),

    username: z.string().min(1).max(100).optional(),

    password: z.string().min(1).optional(),

    databaseName: z.string().min(1).max(100).optional(),
  })
  .refine((data) => Object.values(data).some((v) => v !== undefined), {
    message: "At least one field must be provided",
  });
// ── Test with raw credentials (no saved record) ────────────
// Used by the "Test Connection" button before saving.
export const testConnectionRawSchema = z.object({
  dbType: dbTypeEnum,

  host: z.string().min(1, "Host is required").max(253),

  port: z.number().int().min(1).max(65535).default(3306),

  username: z.string().min(1, "Username is required").max(100),

  password: z.string().min(1, "Password is required"),

  databaseName: z.string().min(1, "Database name is required").max(100),
});

export type TestConnectionRawInput = z.infer<typeof testConnectionRawSchema>;
export type CreateConnectionInput = z.infer<typeof createConnectionSchema>;
export type UpdateConnectionInput = z.infer<typeof updateConnectionSchema>;
