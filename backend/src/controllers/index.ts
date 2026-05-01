// Route handlers (thin, call services)
import * as authController from "./auth.controllers";
import * as dashboardController from "./dashboard.controllers";
import * as tabController from "./tab.controllers";
import * as dataSourceController from "./dataSource.controllers";
import * as chartController from "./chart.controllers";
import * as connectionController from "./connection.controllers";

export {
  authController,
  dashboardController,
  tabController,
  dataSourceController,
  chartController,
  connectionController,
};
