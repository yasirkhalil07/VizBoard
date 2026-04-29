import { prisma } from "../utils/prisma";
import {
  CreateDashboardInput,
  UpdateDashboardInput,
} from "../types/dashboardTypes";

export const listDashboards = async (userId: number) => {
  return prisma.dashboard.findMany({
    where: { user_id: userId },
    orderBy: { created_at: "asc" },
  });
};

export const createDashboardService = async (
  userId: number,
  data: CreateDashboardInput,
) => {
  return prisma.dashboard.create({
    data: {
      name: data.name,
      user_id: userId,
    },
  });
};

export const updateDashboardService = async (
  dashboardId: number,
  userId: number,
  data: UpdateDashboardInput,
) => {
  // Verify ownership before updating
  const existing = await prisma.dashboard.findFirst({
    where: { id: dashboardId, user_id: userId },
  });

  if (!existing) return null;

  return prisma.dashboard.update({
    where: { id: dashboardId },
    data: {
      name: data.name,
      updated_at: new Date(),
    },
  });
};

export const deleteDashboardService = async (
  dashboardId: number,
  userId: number,
) => {
  // Verify ownership before deleting
  const existing = await prisma.dashboard.findFirst({
    where: { id: dashboardId, user_id: userId },
  });

  if (!existing) return null;

  await prisma.dashboard.delete({ where: { id: dashboardId } });
  return true;
};
