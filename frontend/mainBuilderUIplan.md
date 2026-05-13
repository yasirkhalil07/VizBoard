app/dashboard/[id]/
└── page.tsx                          ← entry point (thin shell)

src/components/builder/
├── BuilderLayout.tsx                 ← top-level layout shell
├── navbar/
│   └── BuilderNavbar.tsx             ← breadcrumb, zoom, save, share
├── canvas/
│   ├── BuilderCanvas.tsx             ← infinite canvas, dot grid, zoom
│   ├── CanvasWidget.tsx              ← individual draggable/resizable widget
│   └── WidgetRenderer.tsx           ← routes widget.type → chart component
├── charts/
│   ├── KPICard.tsx
│   ├── BarChartWidget.tsx
│   ├── LineChartWidget.tsx
│   ├── PieChartWidget.tsx
│   └── (more as needed)
├── panel/
│   ├── ControlPanel.tsx              ← right panel shell + section tabs
│   ├── DataSourcePanel.tsx           ← file upload / DB connection selector
│   ├── ChartTypePanel.tsx            ← chart type grid + add to canvas
│   ├── FieldsPanel.tsx               ← draggable columns + drop zones
│   ├── StylePanel.tsx                ← palette, toggles, border radius
│   └── FiltersPanel.tsx             ← dynamic filter rows
└── tabs/
    └── BuilderTabs.tsx               ← Power BI bottom tabs

src/store/slices/
└── builderSlice.ts                   ← widgets, tabs, layout, selections

src/store/thunks/
└── builderThunks.ts                  ← save/load dashboard, fetch columns

src/types/
└── builder.types.ts                  ← Widget, Tab, ChartType, DropZone etc.

src/hooks/
├── useBuilderCanvas.ts              ← drag, zoom, selection logic
└── useWidgetDrag.ts                 ← widget drag-on-canvas logic

src/services/
└── builderService.ts                ← save/load API calls




Phase 1 — Types + Store

builder.types.ts — all interfaces
builderSlice.ts — full state + reducers
builderThunks.ts — save/load stubs

Phase 2 — Layout Shell
4. BuilderLayout.tsx
5. BuilderNavbar.tsx
6. app/dashboard/[id]/page.tsx

Phase 3 — Canvas
7. BuilderCanvas.tsx
8. useBuilderCanvas.ts + useWidgetDrag.ts
9. CanvasWidget.tsx
10. WidgetRenderer.tsx

Phase 4 — Charts
11. KPICard.tsx
12. BarChartWidget.tsx (ECharts)
13. LineChartWidget.tsx (ECharts)
14. (others follow same pattern)

Phase 5 — Control Panel
15. ControlPanel.tsx
16. DataSourcePanel.tsx
17. ChartTypePanel.tsx
18. FieldsPanel.tsx
19. StylePanel.tsx
20. FiltersPanel.tsx

Phase 6 — Tabs
21. BuilderTabs.tsx

Phase 7 — Wire everything
22. Connect Redux to all components
23. builderService.ts + real save/load thunks