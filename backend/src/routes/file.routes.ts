import { Router } from "express";
import { fileController } from "../controllers";
import { authenticate } from "../middleware";
import { multerUpload } from "../middleware";

const router: Router = Router();

router.use(authenticate);

// ── Upload ─────────────────────────────────────────────────
router.post("/upload", multerUpload.single("file"), fileController.uploadFile);

// ── List ───────────────────────────────────────────────────
router.get("/", fileController.listFiles);

// ── Preview & columns (IMPORTANT for chart builder) ───────
router.get("/:id/preview", fileController.previewFile);
router.get("/:id/columns", fileController.getFileColumns);

// ── Delete ─────────────────────────────────────────────────
router.delete("/:id", fileController.deleteFile);

export default router;
