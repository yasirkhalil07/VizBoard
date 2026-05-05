import { Request, Response } from "express";
import path from "path";
import { fileService } from "../services";

export const uploadFile = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const userId = (req as any).user!.id;
    const ext = path
      .extname(req.file.originalname)
      .toLowerCase()
      .replace(".", "");
    const fileType = ext === "csv" ? "csv" : "xlsx";

    const { file, sheets } = await fileService.saveFileMetadata(userId, {
      fileName: req.file.originalname,
      fileType,
      filePath: req.file.path,
    });

    // If XLSX with multiple sheets, tell the frontend to prompt a sheet picker.
    // Single-sheet XLSX and all CSVs return requiresSheetSelection: false.
    const requiresSheetSelection = sheets !== null && sheets.length > 1;

    res.status(200).json({
      file,
      sheets, // null for CSV, string[] for XLSX
      requiresSheetSelection, // frontend uses this as the trigger
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to upload file" });
  }
};

export const listFiles = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user!.id;
    const files = await fileService.listFilesService(userId);
    res.json({ files });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch files" });
  }
};

export const previewFile = async (req: Request, res: Response) => {
  try {
    const fileId = Number(req.params.id);
    const userId = (req as any).user!.id;
    const sheetName = req.query.sheet as string | undefined;

    const result = await fileService.previewFileService(
      fileId,
      userId,
      sheetName,
    );
    if (result === null) {
      return res
        .status(404)
        .json({ message: "File not found or access denied" });
    }

    res.json({ rows: result.rows, total: result.total });
  } catch (error: unknown) {
    const isSheetError =
      error instanceof Error && error.message.includes("not found");
    res.status(isSheetError ? 400 : 500).json({
      message: isSheetError ? error.message : "Failed to preview file",
    });
  }
};

export const getFileColumns = async (req: Request, res: Response) => {
  try {
    const fileId = Number(req.params.id);
    const userId = (req as any).user!.id;
    const sheetName = req.query.sheet as string | undefined;

    const result = await fileService.getFileColumnsService(
      fileId,
      userId,
      sheetName,
    );
    if (result === null) {
      return res
        .status(404)
        .json({ message: "File not found or access denied" });
    }

    res.json({ columns: result });
  } catch (error: unknown) {
    const isSheetError =
      error instanceof Error && error.message.includes("not found");
    res.status(isSheetError ? 400 : 500).json({
      message: isSheetError ? error.message : "Failed to extract columns",
    });
  }
};

export const deleteFile = async (req: Request, res: Response) => {
  try {
    const fileId = Number(req.params.id);
    const userId = (req as any).user!.id;

    const deleted = await fileService.deleteFileService(fileId, userId);
    if (!deleted) {
      return res
        .status(404)
        .json({ message: "File not found or access denied" });
    }

    res.json({ message: "File deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete file" });
  }
};
