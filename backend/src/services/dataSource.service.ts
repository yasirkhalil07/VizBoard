import { prisma } from "../utils/prisma";
import { verifyChartOwnership } from "./chart.service";
import { DataSourceInput } from "../types/chartTypes";

export const attachDataSourceService = async (
  chartId: number,
  userId: number,
  data: DataSourceInput,
) => {
  const chart = await verifyChartOwnership(chartId, userId);
  if (!chart) return null;

  // Check if one already exists (1:1 relationship)
  const existing = await prisma.chartDataSource.findUnique({
    where: { chart_id: chartId },
  });
  if (existing) return "conflict" as const;

  return prisma.chartDataSource.create({
    data: {
      chart_id: chartId,
      type: data.type,
      file_id: data.type === "file" ? data.fileId : null,
      connection_id: data.type === "db" ? data.connectionId : null,
    },
    include: {
      file: data.type === "file",
      connection: data.type === "db",
    },
  });
};

export const updateDataSourceService = async (
  chartId: number,
  userId: number,
  data: DataSourceInput,
) => {
  const chart = await verifyChartOwnership(chartId, userId);
  if (!chart) return null;

  const existing = await prisma.chartDataSource.findUnique({
    where: { chart_id: chartId },
  });
  if (!existing) return null;

  return prisma.chartDataSource.update({
    where: { chart_id: chartId },
    data: {
      type: data.type,
      // Swap source: clear the unused FK, set the active one
      file_id: data.type === "file" ? data.fileId : null,
      connection_id: data.type === "db" ? data.connectionId : null,
    },
    include: {
      file: true,
      connection: true,
    },
  });
};

export const getDataSourceService = async (chartId: number, userId: number) => {
  const chart = await verifyChartOwnership(chartId, userId);
  if (!chart) return null;

  const dataSource = await prisma.chartDataSource.findUnique({
    where: { chart_id: chartId },
    include: {
      file: true,
      connection: true,
    },
  });

  return dataSource ?? null;
};
