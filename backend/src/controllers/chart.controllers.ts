import { Request, Response } from "express";
import { chartService } from "../services";
import {
  createChartSchema,
  updateChartSchema,
} from "../validators/chartValidators";

export const getCharts = async (req: Request, res: Response) => {
  try {
    const tabId = Number(req.params.id);
    const userId = (req as any).user!.id;

    const charts = await chartService.listCharts(tabId, userId);
    if (charts === null) {
      return res
        .status(404)
        .json({ message: "Tab not found or access denied" });
    }

    res.json({ charts });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch charts" });
  }
};

export const createChart = async (req: Request, res: Response) => {
  try {
    const parsed = createChartSchema.safeParse(req.body);
    if (!parsed.success) {
      return res
        .status(400)
        .json({ message: "Validation failed", errors: parsed.error.flatten() });
    }

    const tabId = Number(req.params.id);
    const userId = (req as any).user!.id;

    const chart = await chartService.createChartService(
      tabId,
      userId,
      parsed.data,
    );
    if (!chart) {
      return res
        .status(404)
        .json({ message: "Tab not found or access denied" });
    }

    res.status(200).json({ chart });
  } catch (error) {
    res.status(500).json({ message: "Failed to create chart" });
  }
};

export const updateChart = async (req: Request, res: Response) => {
  try {
    const parsed = updateChartSchema.safeParse(req.body);
    if (!parsed.success) {
      return res
        .status(400)
        .json({ message: "Validation failed", errors: parsed.error.flatten() });
    }

    const chartId = Number(req.params.id);
    const userId = (req as any).user!.id;

    const chart = await chartService.updateChartService(
      chartId,
      userId,
      parsed.data,
    );
    if (!chart) {
      return res
        .status(404)
        .json({ message: "Chart not found or access denied" });
    }

    res.json({ chart });
  } catch (error) {
    res.status(500).json({ message: "Failed to update chart" });
  }
};

export const deleteChart = async (req: Request, res: Response) => {
  try {
    const chartId = Number(req.params.id);
    const userId = (req as any).user!.id;

    const deleted = await chartService.deleteChartService(chartId, userId);
    if (!deleted) {
      return res
        .status(404)
        .json({ message: "Chart not found or access denied" });
    }

    res.json({ message: "Chart deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete chart" });
  }
};
