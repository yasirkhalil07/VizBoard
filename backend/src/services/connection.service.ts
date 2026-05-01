import { prisma } from "../utils/prisma";
import { pingConnection, fetchTables, fetchColumns } from "../utils/dbAdapter";

interface CreateConnectionInput {
  connectionName: string;
  dbType: "mysql" | "postgres";
  host: string;
  port: number;
  username: string;
  password: string;
  databaseName: string;
}

interface UpdateConnectionInput {
  connectionName?: string;
  dbType?: "mysql" | "postgres";
  host?: string;
  port?: number;
  username?: string;
  password?: string;
  databaseName?: string;
}

type TestResult = { success: true } | { success: false; error: string };

type TablesResult =
  | { success: true; tables: string[] }
  | { success: false; error: string };

type ColumnsResult =
  | {
      success: true;
      columns: { name: string; type: string; nullable: boolean }[];
    }
  | { success: false; error: string };

// ── Helper ─────────────────────────────────────────────────
const verifyOwnership = async (connectionId: number, userId: number) => {
  return prisma.dataConnection.findFirst({
    where: { id: connectionId, user_id: userId },
  });
};

// ── CRUD ───────────────────────────────────────────────────
export const listConnections = async (userId: number) => {
  return prisma.dataConnection.findMany({
    where: { user_id: userId },
    // Never return the raw password to the client
    select: {
      id: true,
      connection_name: true,
      db_type: true,
      host: true,
      port: true,
      username: true,
      database_name: true,
      created_at: true,
      updated_at: true,
    },
    orderBy: { created_at: "desc" },
  });
};

export const createConnectionService = async (
  userId: number,
  data: CreateConnectionInput,
) => {
  // Enforce unique connection name per user
  const existing = await prisma.dataConnection.findFirst({
    where: { connection_name: data.connectionName, user_id: userId },
  });
  if (existing) return "duplicate_name" as const;

  return prisma.dataConnection.create({
    data: {
      connection_name: data.connectionName,
      db_type: data.dbType,
      host: data.host,
      port: data.port,
      username: data.username,
      password: data.password, // TODO: encrypt at rest (future)
      database_name: data.databaseName,
      user_id: userId,
    },
    select: {
      id: true,
      connection_name: true,
      db_type: true,
      host: true,
      port: true,
      username: true,
      database_name: true,
      created_at: true,
    },
  });
};

export const updateConnectionService = async (
  connectionId: number,
  userId: number,
  data: UpdateConnectionInput,
) => {
  const existing = await verifyOwnership(connectionId, userId);
  if (!existing) return null;

  return prisma.dataConnection.update({
    where: { id: connectionId },
    data: {
      ...(data.connectionName && { connection_name: data.connectionName }),
      ...(data.dbType && { db_type: data.dbType }),
      ...(data.host && { host: data.host }),
      ...(data.port && { port: data.port }),
      ...(data.username && { username: data.username }),
      ...(data.password && { password: data.password }),
      ...(data.databaseName && { database_name: data.databaseName }),
      updated_at: new Date(),
    },
    select: {
      id: true,
      connection_name: true,
      db_type: true,
      host: true,
      port: true,
      username: true,
      database_name: true,
      updated_at: true,
    },
  });
};

export const deleteConnectionService = async (
  connectionId: number,
  userId: number,
) => {
  const existing = await verifyOwnership(connectionId, userId);
  if (!existing) return null;

  await prisma.dataConnection.delete({ where: { id: connectionId } });
  return true;
};

// ── Test live connection ───────────────────────────────────
export const testConnectionService = async (
  connectionId: number,
  userId: number,
): Promise<TestResult | null> => {
  const conn = await prisma.dataConnection.findFirst({
    where: { id: connectionId, user_id: userId },
  });
  if (!conn) return null;

  try {
    await pingConnection({
      dbType: conn.db_type as "mysql" | "postgres",
      host: conn.host,
      port: conn.port,
      username: conn.username,
      password: conn.password,
      databaseName: conn.database_name,
    });
    return { success: true };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return { success: false, error: message };
  }
};

// ── Schema introspection ───────────────────────────────────
export const getTablesService = async (
  connectionId: number,
  userId: number,
): Promise<TablesResult | null> => {
  const conn = await prisma.dataConnection.findFirst({
    where: { id: connectionId, user_id: userId },
  });
  if (!conn) return null;

  try {
    const tables = await fetchTables({
      dbType: conn.db_type as "mysql" | "postgres",
      host: conn.host,
      port: conn.port,
      username: conn.username,
      password: conn.password,
      databaseName: conn.database_name,
    });
    return { success: true, tables };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return { success: false, error: message };
  }
};

export const getColumnsService = async (
  connectionId: number,
  userId: number,
  tableName: string,
): Promise<ColumnsResult | null> => {
  const conn = await prisma.dataConnection.findFirst({
    where: { id: connectionId, user_id: userId },
  });
  if (!conn) return null;

  try {
    const columns = await fetchColumns(
      {
        dbType: conn.db_type as "mysql" | "postgres",
        host: conn.host,
        port: conn.port,
        username: conn.username,
        password: conn.password,
        databaseName: conn.database_name,
      },
      tableName,
    );
    return { success: true, columns };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return { success: false, error: message };
  }
};
