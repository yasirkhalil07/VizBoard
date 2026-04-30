import { Request, Response } from "express";
import { dataSourceService } from "../services";
import { dataSourceSchema } from "../validators/chartValidators";

export const attachDataSource = async (req: Request, res: Response) => {
  try {
    const parsed = dataSourceSchema.safeParse(req.body);
    if (!parsed.success) {
      return res
        .status(400)
        .json({ message: "Validation failed", errors: parsed.error.flatten() });
    }

    const chartId = Number(req.params.id);
    const userId = (req as any).user!.id;

    const result = await dataSourceService.attachDataSourceService(
      chartId,
      userId,
      parsed.data,
    );
    if (result === null) {
      return res
        .status(404)
        .json({ message: "Chart not found or access denied" });
    }
    if (result === "conflict") {
      return res
        .status(409)
        .json({ message: "Data source already attached. Use PUT to update." });
    }

    res.status(200).json({ dataSource: result });
  } catch (error) {
    res.status(500).json({ message: "Failed to attach data source", error });
  }
};

export const updateDataSource = async (req: Request, res: Response) => {
  try {
    const parsed = dataSourceSchema.safeParse(req.body);
    if (!parsed.success) {
      return res
        .status(400)
        .json({ message: "Validation failed", errors: parsed.error.flatten() });
    }

    const chartId = Number(req.params.id);
    const userId = (req as any).user!.id;

    const result = await dataSourceService.updateDataSourceService(
      chartId,
      userId,
      parsed.data,
    );
    if (result === null) {
      return res
        .status(404)
        .json({ message: "Chart or data source not found, or access denied" });
    }

    res.json({ dataSource: result });
  } catch (error) {
    res.status(500).json({ message: "Failed to update data source" });
  }
};

export const getDataSource = async (req: Request, res: Response) => {
  try {
    const chartId = Number(req.params.id);
    const userId = (req as any).user!.id;

    const result = await dataSourceService.getDataSourceService(
      chartId,
      userId,
    );
    if (result === null) {
      return res
        .status(404)
        .json({ message: "Chart or data source not found, or access denied" });
    }

    res.json({ dataSource: result });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch data source" });
  }
};
