import dotenv from "dotenv";

// Load environment variables FIRST, before any other imports
dotenv.config();

import express from "express";
import * as middleware from "./src/middleware";
import routes from "./src/routes";
import morgan from "morgan";
import { config } from "./src/config/env";
import cookieParser from "cookie-parser";
import cors from "cors";
/// <reference path="./src/types/express.d.ts" />

const app = express() as express.Application;
const port = config.port;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(":method :url :status - :response-time ms"));
app.use(
  cors({
    origin: "http://localhost:3000", // your frontend
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// Auth Routes (Public)
app.use("/api/auth", routes.authRoutes);

// Protected Routes
// Dashboard
app.use("/api/dashboards", routes.dashboardRoutes);

//  TAB
app.use("/api/dashboards/:id/tabs", routes.tabRoutes);

//  CHARTS
app.use("/api/tabs/:id/charts", routes.tabChartRouter);
app.use("/api/charts", routes.chartRouter);

// Data Connections
app.use("/api/connections", routes.connectionRoutes);

// Files upload
app.use("/api/files", routes.fileRoutes);

// Error handling
app.use(middleware.errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Database URL: ${config.databaseUrl}`);
});
