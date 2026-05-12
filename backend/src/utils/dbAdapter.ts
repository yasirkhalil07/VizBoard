import mysql from "mysql2/promise";
import { Client as PgClient } from "pg";

export interface DbConnection {
  dbType: "mysql" | "postgres";
  host: string;
  port: number;
  username: string;
  password: string;
  databaseName: string;
}

export interface ColumnInfo {
  name: string;
  type: string;
  nullable: boolean;
}

// ── Attempt a live connection and immediately close it ─────
export async function pingConnection(conn: DbConnection): Promise<void> {
  if (conn.dbType === "mysql") {
    try {
      const connection = await mysql.createConnection({
        host: conn.host,
        port: conn.port,
        user: conn.username,
        password: conn.password,
        database: conn.databaseName,
        connectTimeout: 5000,
      });
      await connection.end();
    } catch (error) {
      console.error("MySQL connection error:", error);
      throw error;
    }
  } else {
    try {
      const client = new PgClient({
        host: conn.host,
        port: conn.port,
        user: conn.username,
        password: conn.password,
        database: conn.databaseName,
        connectionTimeoutMillis: 5000,
      });
      await client.connect();
      await client.end();
    } catch (error) {
      console.error("PostgreSQL connection error:", error);
      throw error;
    }
  }
}

// ── Fetch user-defined tables (excludes system tables) ─────
export async function fetchTables(conn: DbConnection): Promise<string[]> {
  if (conn.dbType === "mysql") {
    const connection = await mysql.createConnection({
      host: conn.host,
      port: conn.port,
      user: conn.username,
      password: conn.password,
      database: conn.databaseName,
      connectTimeout: 5000,
    });

    const [rows] = await connection.execute<mysql.RowDataPacket[]>(
      `SELECT TABLE_NAME FROM information_schema.TABLES
       WHERE TABLE_SCHEMA = ? AND TABLE_TYPE = 'BASE TABLE'
       ORDER BY TABLE_NAME`,
      [conn.databaseName],
    );

    await connection.end();
    return rows.map((r) => r.TABLE_NAME as string);
  } else {
    const client = new PgClient({
      host: conn.host,
      port: conn.port,
      user: conn.username,
      password: conn.password,
      database: conn.databaseName,
      connectionTimeoutMillis: 5000,
    });

    await client.connect();
    const result = await client.query(
      `SELECT tablename FROM pg_tables
       WHERE schemaname = 'public'
       ORDER BY tablename`,
    );
    await client.end();

    return result.rows.map((r) => r.tablename as string);
  }
}

// ── Fetch columns for a specific table ────────────────────
// export async function fetchColumns(
//   conn: DbConnection,
//   tableName: string,
// ): Promise<ColumnInfo[]> {
//   // Sanitize table name — only allow alphanumeric, underscore, hyphen
//   if (!/^[a-zA-Z0-9_-]+$/.test(tableName)) {
//     throw new Error("Invalid table name");
//   }

//   if (conn.dbType === "mysql") {
//     const connection = await mysql.createConnection({
//       host: conn.host,
//       port: conn.port,
//       user: conn.username,
//       password: conn.password,
//       database: conn.databaseName,
//       connectTimeout: 5000,
//     });

//     // First check if table exists
//     const [tableCheck] = await connection.execute<mysql.RowDataPacket[]>(
//       `SELECT TABLE_NAME
//        FROM information_schema.TABLES
//        WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?`,
//       [conn.databaseName, tableName],
//     );

//     if (tableCheck.length === 0) {
//       await connection.end();
//       throw new Error(`Table '${tableName}' doesn't exist`);
//     }

//     // Table exists, now get columns
//     const [rows] = await connection.execute<mysql.RowDataPacket[]>(
//       `SELECT COLUMN_NAME, DATA_TYPE, IS_NULLABLE
//        FROM information_schema.COLUMNS
//        WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?
//        ORDER BY ORDINAL_POSITION`,
//       [conn.databaseName, tableName],
//     );

//     await connection.end();

//     // Return empty array if table has no columns (rare but valid)
//     return rows.map((r) => ({
//       name: r.COLUMN_NAME as string,
//       type: r.DATA_TYPE as string,
//       nullable: r.IS_NULLABLE === "YES",
//     }));
//   } else {
//     const client = new PgClient({
//       host: conn.host,
//       port: conn.port,
//       user: conn.username,
//       password: conn.password,
//       database: conn.databaseName,
//       connectionTimeoutMillis: 5000,
//     });

//     await client.connect();

//     // First check if table exists
//     const tableCheck = await client.query(
//       `SELECT tablename
//        FROM pg_tables
//        WHERE schemaname = 'public' AND tablename = $1`,
//       [tableName],
//     );

//     if (tableCheck.rows.length === 0) {
//       await client.end();
//       throw new Error(`Table '${tableName}' doesn't exist`);
//     }

//     // Table exists, now get columns
//     const result = await client.query(
//       `SELECT column_name, data_type, is_nullable
//        FROM information_schema.columns
//        WHERE table_schema = 'public' AND table_name = $1
//        ORDER BY ordinal_position`,
//       [tableName],
//     );
//     await client.end();

//     // Return empty array if table has no columns (rare but valid)
//     return result.rows.map((r) => ({
//       name: r.column_name as string,
//       type: r.data_type as string,
//       nullable: r.is_nullable === "YES",
//     }));
//   }
// }

export async function fetchColumns(
  conn: DbConnection,
  tableName: string,
): Promise<ColumnInfo[]> {
  // Sanitize table name — only allow alphanumeric, underscore, hyphen
  if (!/^[a-zA-Z0-9_-]+$/.test(tableName)) {
    throw new Error("Invalid table name");
  }

  if (conn.dbType === "mysql") {
    const connection = await mysql.createConnection({
      host: conn.host,
      port: conn.port,
      user: conn.username,
      password: conn.password,
      database: conn.databaseName,
      connectTimeout: 5000,
    });

    try {
      // First check if table exists
      const [tableCheck] = await connection.execute<mysql.RowDataPacket[]>(
        `SELECT TABLE_NAME 
         FROM information_schema.TABLES 
         WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?`,
        [conn.databaseName, tableName],
      );

      if (tableCheck.length === 0) {
        throw new Error(`Table '${tableName}' doesn't exist`);
      }

      // Table exists, now get columns
      const [rows] = await connection.execute<mysql.RowDataPacket[]>(
        `SELECT COLUMN_NAME, DATA_TYPE, IS_NULLABLE
         FROM information_schema.COLUMNS
         WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?
         ORDER BY ORDINAL_POSITION`,
        [conn.databaseName, tableName],
      );

      // Return empty array if table has no columns (rare but valid)
      return rows.map((r) => ({
        name: r.COLUMN_NAME as string,
        type: r.DATA_TYPE as string,
        nullable: r.IS_NULLABLE === "YES",
      }));
    } finally {
      await connection.end();
    }
  } else {
    const client = new PgClient({
      host: conn.host,
      port: conn.port,
      user: conn.username,
      password: conn.password,
      database: conn.databaseName,
      connectionTimeoutMillis: 5000,
    });

    await client.connect();

    try {
      // First check if table exists
      const tableCheck = await client.query(
        `SELECT tablename 
         FROM pg_tables 
         WHERE schemaname = 'public' AND tablename = $1`,
        [tableName],
      );

      if (tableCheck.rows.length === 0) {
        throw new Error(`Table '${tableName}' doesn't exist`);
      }

      // Table exists, now get columns
      const result = await client.query(
        `SELECT column_name, data_type, is_nullable
         FROM information_schema.columns
         WHERE table_schema = 'public' AND table_name = $1
         ORDER BY ordinal_position`,
        [tableName],
      );

      // Return empty array if table has no columns (rare but valid)
      return result.rows.map((r) => ({
        name: r.column_name as string,
        type: r.data_type as string,
        nullable: r.is_nullable === "YES",
      }));
    } finally {
      await client.end();
    }
  }
}
