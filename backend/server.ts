import fs from "fs";
import express from "express";
import { errorHandler } from "./src/middleware";
import routes from "./src/routes";
import morgan from "morgan";
import { config } from "./src/config/env";
import dotenv from "dotenv";
dotenv.config();

const app = express() as express.Application;
const port = config.port;

// Middleware
app.use(express.json());
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
