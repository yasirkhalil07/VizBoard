-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_data_connections" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "connection_name" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "db_type" TEXT NOT NULL,
    "host" TEXT NOT NULL,
    "port" INTEGER NOT NULL DEFAULT 3306,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "database_name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "data_connections_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_data_connections" ("connection_name", "created_at", "database_name", "db_type", "host", "id", "password", "updated_at", "user_id", "username") SELECT "connection_name", "created_at", "database_name", "db_type", "host", "id", "password", "updated_at", "user_id", "username" FROM "data_connections";
DROP TABLE "data_connections";
ALTER TABLE "new_data_connections" RENAME TO "data_connections";
CREATE UNIQUE INDEX "data_connections_connection_name_key" ON "data_connections"("connection_name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
