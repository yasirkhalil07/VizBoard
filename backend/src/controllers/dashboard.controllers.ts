import { Request, Response } from "express";
import { dashboardService } from "../services";
import {
  createDashboardSchema,
  updateDashboardSchema,
} from "../validators/dashboardValidator";

// Get api/dashboards
export const getDashboards = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const dashboards = await dashboardService.listDashboards(userId);
    res.json({ dashboards });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch dashboards" });
  }
};

// Post api/dashboards
export const createDashboard = async (req: Request, res: Response) => {
  try {
    const parsed = createDashboardSchema.safeParse(req.body);
    if (!parsed.success) {
      return res
        .status(400)
        .json({ message: "Validation failed", errors: parsed.error.flatten() });
    }

    const userId = (req as any).user.id;
    const dashboard = await dashboardService.createDashboardService(
      userId,
      parsed.data,
    );
    res.status(201).json({ dashboard });
  } catch (error) {
    res.status(500).json({ message: "Failed to create dashboard" });
  }
};

// GET api/dashboards/:id (url params)
export const updateDashboard = async (req: Request, res: Response) => {
  try {
    const parsed = updateDashboardSchema.safeParse(req.body);
    if (!parsed.success) {
      return res
        .status(400)
        .json({ message: "Validation failed", errors: parsed.error.flatten() });
    }

    const userId = (req as any).user.id;
    const dashboardId = Number(req.params.id);

    const dashboard = await dashboardService.updateDashboardService(
      dashboardId,
      userId,
      parsed.data,
    );
    if (!dashboard) {
      return res
        .status(404)
        .json({ message: "Dashboard not found or access denied" });
    }

    res.json({ dashboard });
  } catch (error) {
    res.status(500).json({ message: "Failed to update dashboard" });
  }
};

// Delete api/dashboards/:id
export const deleteDashboard = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const dashboardId = Number(req.params.id);

    const deleted = await dashboardService.deleteDashboardService(
      dashboardId,
      userId,
    );
    if (!deleted) {
      return res
        .status(404)
        .json({ message: "Dashboard not found or access denied" });
    }

    res.json({ message: "Dashboard deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete dashboard" });
  }
};
