import { Request, Response } from "express";
import { tabService } from "../services";
import {
  createTabSchema,
  updateTabSchema,
} from "../validators/dashboardValidator";

// GET api/
export const getTabs = async (req: Request, res: Response) => {
  try {
    const dashboardId = Number(req.params.id);
    const userId = (req as any).user.id;

    const tabs = await tabService.listTabs(dashboardId, userId);
    if (tabs === null) {
      return res
        .status(404)
        .json({ message: "Dashboard not found or access denied" });
    }

    res.json({ tabs });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch tabs" });
  }
};

export const createTab = async (req: Request, res: Response) => {
  try {
    const parsed = createTabSchema.safeParse(req.body);
    if (!parsed.success) {
      return res
        .status(400)
        .json({ message: "Validation failed", errors: parsed.error.flatten() });
    }

    const dashboardId = Number(req.params.id);
    const userId = (req as any).user.id;

    const tab = await tabService.createTabService(
      dashboardId,
      userId,
      parsed.data,
    );
    if (!tab) {
      return res
        .status(404)
        .json({ message: "Dashboard not found or access denied" });
    }

    res.status(201).json({ tab });
  } catch (error) {
    res.status(500).json({ message: "Failed to create tab" });
  }
};

export const updateTab = async (req: Request, res: Response) => {
  try {
    const parsed = updateTabSchema.safeParse(req.body);
    if (!parsed.success) {
      return res
        .status(400)
        .json({ message: "Validation failed", errors: parsed.error.flatten() });
    }

    const tabId = Number(req.params.tabId);
    const userId = (req as any).user.id;

    const tab = await tabService.updateTabService(tabId, userId, parsed.data);
    if (!tab) {
      return res
        .status(404)
        .json({ message: "Tab not found or access denied" });
    }

    res.json({ tab });
  } catch (error) {
    res.status(500).json({ message: "Failed to update tab" });
  }
};

export const deleteTab = async (req: Request, res: Response) => {
  try {
    const tabId = Number(req.params.tabId);
    const userId = (req as any).user.id;

    const deleted = await tabService.deleteTabService(tabId, userId);
    if (!deleted) {
      return res
        .status(404)
        .json({ message: "Tab not found or access denied" });
    }

    res.json({ message: "Tab deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete tab" });
  }
};
