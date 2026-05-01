import { Request, Response } from "express";
import { connectionService } from "../services";
import {
  createConnectionSchema,
  updateConnectionSchema,
} from "../validators/connectionValidators";

export const getConnections = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user!.id;
    const connections = await connectionService.listConnections(userId);
    res.json({ connections });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch connections", error });
  }
};

export const createConnection = async (req: Request, res: Response) => {
  try {
    const parsed = createConnectionSchema.safeParse(req.body);
    if (!parsed.success) {
      return res
        .status(400)
        .json({ message: "Validation failed", errors: parsed.error.flatten() });
    }

    const userId = (req as any).user!.id;
    const connection = await connectionService.createConnectionService(
      userId,
      parsed.data,
    );
    if (connection === "duplicate_name") {
      return res
        .status(409)
        .json({ message: "Connection name already exists" });
    }

    res.status(201).json({ connection });
  } catch (error) {
    res.status(500).json({ message: "Failed to create connection" });
  }
};

export const updateConnection = async (req: Request, res: Response) => {
  try {
    const parsed = updateConnectionSchema.safeParse(req.body);
    if (!parsed.success) {
      return res
        .status(400)
        .json({ message: "Validation failed", errors: parsed.error.flatten() });
    }

    const connectionId = Number(req.params.id);
    const userId = (req as any).user!.id;

    const connection = await connectionService.updateConnectionService(
      connectionId,
      userId,
      parsed.data,
    );
    if (!connection) {
      return res
        .status(404)
        .json({ message: "Connection not found or access denied" });
    }

    res.json({ connection });
  } catch (error) {
    res.status(500).json({ message: "Failed to update connection" });
  }
};

export const deleteConnection = async (req: Request, res: Response) => {
  try {
    const connectionId = Number(req.params.id);
    const userId = (req as any).user!.id;

    const deleted = await connectionService.deleteConnectionService(
      connectionId,
      userId,
    );
    if (!deleted) {
      return res
        .status(404)
        .json({ message: "Connection not found or access denied" });
    }

    res.json({ message: "Connection deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete connection" });
  }
};

export const testConnection = async (req: Request, res: Response) => {
  try {
    const connectionId = Number(req.params.id);
    const userId = (req as any).user!.id;

    const result = await connectionService.testConnectionService(
      connectionId,
      userId,
    );
    if (result === null) {
      return res
        .status(404)
        .json({ message: "Connection not found or access denied" });
    }

    if (!result.success) {
      return res
        .status(400)
        .json({ message: "Connection test failed", error: result.error });
    }

    res.json({ message: "Connection successful" });
  } catch (error) {
    res.status(500).json({ message: "Failed to test connection" });
  }
};

export const getTables = async (req: Request, res: Response) => {
  try {
    const connectionId = Number(req.params.id);
    const userId = (req as any).user!.id;

    const result = await connectionService.getTablesService(
      connectionId,
      userId,
    );
    if (result === null) {
      return res
        .status(404)
        .json({ message: "Connection not found or access denied" });
    }

    if (!result.success) {
      return res
        .status(400)
        .json({ message: "Failed to fetch tables", error: result.error });
    }

    res.json({ tables: result.tables });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch tables" });
  }
};

export const getColumns = async (req: Request, res: Response) => {
  try {
    const connectionId = Number(req.params.id);
    const tableName = Array.isArray(req.params.table)
      ? req.params.table[0]
      : req.params.table;
    const userId = (req as any).user!.id;

    const result = await connectionService.getColumnsService(
      connectionId,
      userId,
      tableName,
    );
    if (result === null) {
      return res
        .status(404)
        .json({ message: "Connection not found or access denied" });
    }

    if (!result.success) {
      return res
        .status(400)
        .json({ message: "Failed to fetch columns", error: result.error });
    }

    res.json({ table: tableName, columns: result.columns });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch columns" });
  }
};
