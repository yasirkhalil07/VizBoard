export interface CreateDashboardInput {
  name: string;
}

export interface UpdateDashboardInput {
  name: string;
}
// Tabs

export interface CreateTabInput {
  name: string;
  orderIndex?: number;
}

export interface UpdateTabInput {
  name?: string;
  orderIndex?: number;
}
