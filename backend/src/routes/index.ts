// Express routers mapping endpoints to controllers
import authRoutes from "./auth.routes";
import dashboardRoutes from "./dashboard.routes";
import tabRoutes from "./tabs.routes";
import { chartRouter, tabChartRouter } from "./chart.routes";

export default {
  authRoutes,
  dashboardRoutes,
  tabRoutes,
  chartRouter,
  tabChartRouter,
} as const;
