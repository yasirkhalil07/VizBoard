import multer from "multer";
import path from "path";
import fs from "fs";
import { Request } from "express";
import { config } from "../config/env";

const UPLOAD_DIR = config.uploadDir || path.join(process.cwd(), "uploads");

// Ensure the uploads directory exists on startup
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, UPLOAD_DIR);
  },
  filename: (_req, file, cb) => {
    // Prefix with timestamp to avoid name collisions
    const uniqueName = `${Date.now()}-${file.originalname.replace(/\s+/g, "_")}`;
    cb(null, uniqueName);
  },
});

const fileFilter = (
  _req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback,
) => {
  const allowed = [
    "text/csv",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];
  const ext = path.extname(file.originalname).toLowerCase();

  if (allowed.includes(file.mimetype) || ext === ".csv" || ext === ".xlsx") {
    cb(null, true);
  } else {
    cb(new Error("Only CSV and Excel (.xlsx) files are allowed"));
  }
};

export const multerUpload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB max
  },
});
