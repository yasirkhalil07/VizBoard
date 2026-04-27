-- CreateTable
CREATE TABLE "roles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "users_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "data_connections" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "connection_name" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "db_type" TEXT NOT NULL,
    "host" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "database_name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "data_connections_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "dashboards" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "dashboards_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "dashboard_access" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dashboard_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    CONSTRAINT "dashboard_access_dashboard_id_fkey" FOREIGN KEY ("dashboard_id") REFERENCES "dashboards" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "dashboard_access_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tabs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dashboard_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "order_index" INTEGER NOT NULL DEFAULT 0,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "tabs_dashboard_id_fkey" FOREIGN KEY ("dashboard_id") REFERENCES "dashboards" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "charts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tab_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "chart_type" TEXT NOT NULL,
    "config" TEXT NOT NULL,
    "position_x" REAL NOT NULL DEFAULT 0,
    "position_y" REAL NOT NULL DEFAULT 0,
    "width" REAL NOT NULL DEFAULT 400,
    "height" REAL NOT NULL DEFAULT 300,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "charts_tab_id_fkey" FOREIGN KEY ("tab_id") REFERENCES "tabs" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "files" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "file_name" TEXT NOT NULL,
    "file_type" TEXT NOT NULL,
    "file_path" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "files_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "chart_data_sources" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "chart_id" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "file_id" INTEGER,
    "connection_id" INTEGER,
    CONSTRAINT "chart_data_sources_chart_id_fkey" FOREIGN KEY ("chart_id") REFERENCES "charts" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "chart_data_sources_file_id_fkey" FOREIGN KEY ("file_id") REFERENCES "files" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "chart_data_sources_connection_id_fkey" FOREIGN KEY ("connection_id") REFERENCES "data_connections" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "data_connections_connection_name_key" ON "data_connections"("connection_name");

-- CreateIndex
CREATE UNIQUE INDEX "dashboard_access_dashboard_id_user_id_key" ON "dashboard_access"("dashboard_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "chart_data_sources_chart_id_key" ON "chart_data_sources"("chart_id");
