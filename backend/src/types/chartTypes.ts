export interface CreateChartInput {
  name: string;
  chartType: "line" | "bar" | "pie";
  config: Record<string, unknown>;
  positionX?: number;
  positionY?: number;
  width?: number;
  height?: number;
}

export interface UpdateChartInput {
  name?: string;
  chartType?: "line" | "bar" | "pie";
  config?: Record<string, unknown>;
  positionX?: number;
  positionY?: number;
  width?: number;
  height?: number;
}

// chart datasource types
export interface FileSourceInput {
  type: "file";
  fileId: number;
}

export interface DbSourceInput {
  type: "db";
  connectionId: number;
}

export type DataSourceInput = FileSourceInput | DbSourceInput;
