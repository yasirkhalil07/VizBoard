import { prisma } from "../utils/prisma";
import { CreateChartInput, UpdateChartInput } from "../types/chartTypes";

// Helper: verify chart belongs to a tab → dashboard → user
export const verifyChartOwnership = async (chartId: number, userId: number) => {
  return prisma.chart.findFirst({
    where: {
      id: chartId,
      tab: {
        dashboard: { user_id: userId },
      },
    },
  });
};

// Helper: verify tab belongs to a dashboard → user
const verifyTabOwnership = async (tabId: number, userId: number) => {
  return prisma.tab.findFirst({
    where: {
      id: tabId,
      dashboard: { user_id: userId },
    },
  });
};

export const listCharts = async (tabId: number, userId: number) => {
  const tab = await verifyTabOwnership(tabId, userId);
  if (!tab) return null;

  return prisma.chart.findMany({
    where: { tab_id: tabId },
    include: { data_source: true },
    orderBy: { created_at: "asc" },
  });
};

export const createChartService = async (
  tabId: number,
  userId: number,
  data: CreateChartInput,
) => {
  const tab = await verifyTabOwnership(tabId, userId);
  if (!tab) return null;

  return prisma.chart.create({
    data: {
      name: data.name,
      chart_type: data.chartType,
      config: JSON.stringify(data.config),
      position_x: data.positionX ?? 0,
      position_y: data.positionY ?? 0,
      width: data.width ?? 400,
      height: data.height ?? 300,
      tab_id: tabId,
    },
  });
};

export const updateChartService = async (
  chartId: number,
  userId: number,
  data: UpdateChartInput,
) => {
  const chart = await verifyChartOwnership(chartId, userId);
  if (!chart) return null;

  return prisma.chart.update({
    where: { id: chartId },
    data: {
      ...(data.name !== undefined && { name: data.name }),
      ...(data.chartType !== undefined && { chart_type: data.chartType }),
      ...(data.config !== undefined && { config: JSON.stringify(data.config) }),
      ...(data.positionX !== undefined && { position_x: data.positionX }),
      ...(data.positionY !== undefined && { position_y: data.positionY }),
      ...(data.width !== undefined && { width: data.width }),
      ...(data.height !== undefined && { height: data.height }),
      updated_at: new Date(),
    },
  });
};

export const deleteChartService = async (chartId: number, userId: number) => {
  const chart = await verifyChartOwnership(chartId, userId);
  if (!chart) return null;

  await prisma.chart.delete({ where: { id: chartId } });
  return true;
};
