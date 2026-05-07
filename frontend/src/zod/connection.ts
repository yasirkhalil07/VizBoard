import * as z from "zod";

export const connectionFormSchema = z.object({
  connectionName: z.string().min(2, "Name is too short"),
  dbType: z.enum(["mysql", "postgres"]),
  host: z.string().min(1, "Host is required"),
  port: z.preprocess(
    (val) => Number(val),
    z.number().min(1, "Valid port required"),
  ),
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
  databaseName: z.string().min(1, "Database name is required"),
});

export type ConnectionFormValues = z.infer<typeof connectionFormSchema>;
