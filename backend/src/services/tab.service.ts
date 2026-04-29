import { CreateTabInput, UpdateTabInput } from "../types/dashboardTypes";
import { prisma } from "../utils/prisma";

// Helper: verify the dashboard belongs to the user
const verifyDashboardOwnership = async (
  dashboardId: number,
  userId: number,
) => {
  return prisma.dashboard.findFirst({
    where: { id: dashboardId, user_id: userId },
  });
};

// Helper: verify the tab belongs to a dashboard owned by the user
const verifyTabOwnership = async (tabId: number, userId: number) => {
  return prisma.tab.findFirst({
    where: {
      id: tabId,
      dashboard: { user_id: userId },
    },
  });
};

export const listTabs = async (dashboardId: number, userId: number) => {
  const dashboard = await verifyDashboardOwnership(dashboardId, userId);
  if (!dashboard) return null;

  return prisma.tab.findMany({
    where: { dashboard_id: dashboardId },
    orderBy: { order_index: "asc" },
  });
};

export const createTabService = async (
  dashboardId: number,
  userId: number,
  data: CreateTabInput,
) => {
  const dashboard = await verifyDashboardOwnership(dashboardId, userId);
  if (!dashboard) return null;

  // Auto-assign next order_index if not provided
  let orderIndex = data.orderIndex;
  if (orderIndex === undefined) {
    const lastTab = await prisma.tab.findFirst({
      where: { dashboard_id: dashboardId },
      orderBy: { order_index: "desc" },
    });
    orderIndex = lastTab ? lastTab.order_index + 1 : 0;
  }

  return prisma.tab.create({
    data: {
      name: data.name,
      dashboard_id: dashboardId,
      order_index: orderIndex,
    },
  });
};

export const updateTabService = async (
  tabId: number,
  userId: number,
  data: UpdateTabInput,
) => {
  const tab = await verifyTabOwnership(tabId, userId);
  if (!tab) return null;

  return prisma.tab.update({
    where: { id: tabId },
    data: {
      ...(data.name !== undefined && { name: data.name }),
      ...(data.orderIndex !== undefined && { order_index: data.orderIndex }),
      updated_at: new Date(),
    },
  });
};

export const deleteTabService = async (tabId: number, userId: number) => {
  const tab = await verifyTabOwnership(tabId, userId);
  if (!tab) return null;

  await prisma.tab.delete({ where: { id: tabId } });
  return true;
};
