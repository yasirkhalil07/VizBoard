import { Router } from "express";
import { chartController } from "../controllers";
import { dataSourceController } from "../controllers";
import * as middleware from "../middleware";

// ── Chart routes (mounted at /api/tabs/:id/charts) ─────────
const tabChartRouter: Router = Router({ mergeParams: true });
tabChartRouter.use(middleware.authenticate);
tabChartRouter.get("/", chartController.getCharts);
tabChartRouter.post("/", chartController.createChart);

// ── Chart routes (mounted at /api/charts) ──────────────────
const chartRouter: Router = Router();
chartRouter.use(middleware.authenticate);
chartRouter.put("/:id", chartController.updateChart);
chartRouter.delete("/:id", chartController.deleteChart);

// Data source sub-routes
chartRouter.post("/:id/data-source", dataSourceController.attachDataSource);
chartRouter.put("/:id/data-source", dataSourceController.updateDataSource);
chartRouter.get("/:id/data-source", dataSourceController.getDataSource);

export { tabChartRouter, chartRouter };
