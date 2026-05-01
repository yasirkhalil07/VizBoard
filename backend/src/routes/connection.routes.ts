import { Router } from "express";
import { connectionController } from "../controllers";
import * as middleware from "../middleware";

const router = Router() as Router;

router.use(middleware.authenticate);

// ── CRUD ───────────────────────────────────────────────────
router.get("/", connectionController.getConnections);
router.post("/", connectionController.createConnection);
router.put("/:id", connectionController.updateConnection);
router.delete("/:id", connectionController.deleteConnection);

// ── Test ───────────────────────────────────────────────────
router.post("/:id/test", connectionController.testConnection);

// ── Schema introspection ───────────────────────────────────
router.get("/:id/tables", connectionController.getTables);
router.get("/:id/tables/:table", connectionController.getColumns);

export default router;
