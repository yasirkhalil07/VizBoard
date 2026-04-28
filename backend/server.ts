import dotenv from "dotenv";

// Load environment variables FIRST, before any other imports
dotenv.config();

import express from "express";
import { errorHandler } from "./src/middleware";
import routes from "./src/routes";
import morgan from "morgan";
import { config } from "./src/config/env";
import cookieParser from "cookie-parser";

const app = express() as express.Application;
const port = config.port;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(":method :url :status - :response-time ms"));

// Routes
app.use("/api", routes);

// Error handling
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Database URL: ${config.databaseUrl}`);
});
