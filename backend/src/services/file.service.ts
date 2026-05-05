import fs from "fs";
import { prisma } from "../utils/prisma";
import { parseFile, extractColumns, getSheetNames } from "../utils/fileParser";

const PREVIEW_LIMIT = 50;

interface SaveFileInput {
  fileName: string;
  fileType: "csv" | "xlsx";
  filePath: string;
}

// ── Helper: verify file belongs to user ───────────────────
const verifyOwnership = async (fileId: number, userId: number) => {
  return prisma.file.findFirst({ where: { id: fileId, user_id: userId } });
};

// ── Save metadata after multer write ──────────────────────
// For XLSX files, also returns sheet names so the controller
// can tell the frontend if a sheet picker is needed.
export const saveFileMetadata = async (userId: number, data: SaveFileInput) => {
  const file = await prisma.file.create({
    data: {
      file_name: data.fileName,
      file_type: data.fileType,
      file_path: data.filePath,
      user_id: userId,
    },
  });

  const sheets = data.fileType === "xlsx" ? getSheetNames(data.filePath) : null;

  return { file, sheets };
};

// ── List ──────────────────────────────────────────────────
export const listFilesService = async (userId: number) => {
  return prisma.file.findMany({
    where: { user_id: userId },
    select: {
      id: true,
      file_name: true,
      file_type: true,
      created_at: true,
      // file_path is internal — never expose it to the client
    },
    orderBy: { created_at: "desc" },
  });
};

// ── Preview (first 50 rows) ───────────────────────────────
export const previewFileService = async (
  fileId: number,
  userId: number,
  sheetName?: string,
) => {
  const file = await verifyOwnership(fileId, userId);
  if (!file) return null;

  const allRows = await parseFile(file.file_path, sheetName);
  const rows = allRows.slice(0, PREVIEW_LIMIT);

  return { rows, total: allRows.length };
};

// ── Extract column names ──────────────────────────────────
export const getFileColumnsService = async (
  fileId: number,
  userId: number,
  sheetName?: string,
) => {
  const file = await verifyOwnership(fileId, userId);
  if (!file) return null;

  return extractColumns(file.file_path, sheetName);
};

// ── Delete: remove DB record + file from disk ─────────────
export const deleteFileService = async (fileId: number, userId: number) => {
  const file = await verifyOwnership(fileId, userId);
  if (!file) return null;

  // Delete the physical file first, then the DB record
  try {
    if (fs.existsSync(file.file_path)) {
      fs.unlinkSync(file.file_path);
    }
  } catch {
    // Log warning but still proceed with DB deletion
    console.warn(`Could not delete file from disk: ${file.file_path}`);
  }

  await prisma.file.delete({ where: { id: fileId } });
  return true;
};
