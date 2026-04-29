import { Router } from "express";
import { tabController } from "../controllers";
import * as middleware from "../middleware";

const router: Router = Router({ mergeParams: true }); // mergeParams to access :id from parent route

router.use(middleware.authenticate);

// GET  /api/dashboards/:id/tabs  → list tabs for dashboard
router.get("/", tabController.getTabs);

// POST /api/dashboards/:id/tabs  → create tab in dashboard
router.post("/", tabController.createTab);

// PUT /api/dashboards/:id/tabs/:tabId  → update specific tab in dashboard
router.put("/:tabId", tabController.updateTab);

// DELETE /api/dashboards/:id/tabs/:tabId  → delete specific tab from dashboard
router.delete("/:tabId", tabController.deleteTab);

export default router;
