import { Router } from "express";
import { dashboardController } from "../controllers";
import * as middleware from "../middleware";

const router = Router() as Router;

// Apply authenticate middleware to all dashboard routes
router.use(middleware.authenticate);

// GET /api/dashboard - Get all dashboards for authenticated user
router.get("/", dashboardController.getDashboards);

// POST /api/dashboard - Create new dashboard for authenticated user
router.post("/", dashboardController.createDashboard);

// PUT /api/dashboard/:id - Update specific dashboard (user must own it)
router.put("/:id", dashboardController.updateDashboard);

// DELETE /api/dashboard/:id - Delete specific dashboard (user must own it)
router.delete("/:id", dashboardController.deleteDashboard);

export default router;
