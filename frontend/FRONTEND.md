# 🎨 VizBoard Frontend Architecture

## 🧠 Project Overview

This is the frontend of VizBoard, a full-stack **Data Visualization Platform** inspired by tools like Google Looker Studio and Power BI.

Built with **Next.js 16.2.4** and **TypeScript**, featuring modern React patterns, Redux Toolkit state management, and a beautiful UI with Tailwind CSS + ShadCN components.

---

## 🎯 Core Features

### 🔐 Authentication System

- JWT-based authentication with refresh tokens
- Access tokens (15 min) + Refresh tokens (7 days)
- Secure cookie-based refresh token storage
- Automatic token refresh on expiry
- Protected routes with middleware

### 📁 Dashboard Management

- View existing dashboards with card layout
- Create new dashboards with modal interface
- Update dashboard names inline
- Delete dashboards with confirmation
- Dynamic project routes `/dashboard/[id]`

### 🔌 Database Connections

- Connect external databases (MySQL, PostgreSQL)
- Test-then-create connection flow
- Connection validation before saving
- Authentication-protected API calls
- Real-time connection status feedback

### 📊 Chart Builder (Future)

- Multiple chart types (Line, Bar, Pie)
- Drag & drop field mapping
- Dynamic chart configuration
- Responsive chart rendering

### 📂 File Upload (Future)

- CSV and Excel file support
- File preview and parsing
- Column mapping interface

---

## 🏗️ Tech Stack

### 🖥️ Core Framework

- **Next.js 16.2.4** (App Router)
- **TypeScript 5** for type safety
- **React 19.2.4** with modern hooks
- **Node.js 20** runtime

### 🎨 UI Framework

- **Tailwind CSS 4** for styling
- **ShadCN UI** component library
- **Lucide React** for icons
- **Radix UI** primitives
- **Class Variance Authority** for component variants

### 🔄 State Management

- **Redux Toolkit 2.11.2** for global state
- **React Redux 9.2.0** for React integration
- **Async thunks** for API calls
- **Centralized slices** for different domains

### 📦 Key Libraries

- **Zod 4.3.6** for validation
- **React Hook Form** for form handling
- **ECharts 6.0.0** for data visualization
- **dnd-kit 6.3.1** for drag & drop
- **React DnD 16.0.1** for advanced drag & drop

---

## 📁 Project Structure

```
frontend/
├── 📁 app/                          # Next.js App Router
│   ├── 📁 auth/                   # Authentication pages
│   │   ├── 📄 login/page.tsx
│   │   └── 📄 register/page.tsx
│   ├── 📁 dashboard/               # Dashboard routes
│   │   ├── 📁 [id]/              # Dynamic project routes
│   │   │   └── 📄 page.tsx    # Dashboard project page
│   │   ├── 📄 layout.tsx       # Dashboard layout with conditional sidebar
│   │   └── 📄 page.tsx        # Dashboard listing
│   ├── 📄 layout.tsx              # Root layout
│   ├── 📄 page.tsx               # Home page
│   └── 📄 globals.css              # Global styles
├── 📁 src/                        # Source code
│   ├── 📁 components/              # Reusable components
│   │   ├── 📁 custom/           # Custom application components
│   │   │   ├── 📄 ConnectionModal.tsx
│   │   │   ├── 📄 CreateDashboardCard.tsx
│   │   │   ├── 📄 CreateDashboardModal.tsx
│   │   │   ├── 📄 DashboardActionsDropdown.tsx
│   │   │   ├── 📄 DashboardBreadcrumb.tsx
│   │   │   ├── 📄 DashboardCard.tsx
│   │   │   ├── 📄 Navbar.tsx
│   │   │   ├── 📄 ThemeSwitcher.tsx
│   │   │   └── 📄 UpdateDashboardModal.tsx
│   │   ├── 📁 shared/           # Shared layout components
│   │   │   ├── 📄 AppSidebar.tsx
│   │   │   ├── 📄 CollapsibleSidebar.tsx
│   │   │   └── 📄 sidebar.tsx
│   │   └── 📁 ui/               # ShadCN UI components
│   │       ├── 📄 breadcrumb.tsx
│   │       ├── 📄 button.tsx
│   │       ├── 📄 card.tsx
│   │       ├── 📄 dialog.tsx
│   │       ├── 📄 dropdown-menu.tsx
│   │       ├── 📄 input.tsx
│   │       ├── 📄 label.tsx
│   │       ├── 📄 select.tsx
│   │       ├── 📄 sidebar.tsx
│   │       ├── 📄 separator.tsx
│   │       ├── 📄 sheet.tsx
│   │       ├── 📄 table.tsx
│   │       ├── 📄 textarea.tsx
│   │       ├── 📄 toast.tsx
│   │       └── 📄 tooltip.tsx
│   ├── 📁 hooks/                # Custom React hooks
│   │   ├── 📄 useAuth.ts
│   │   ├── 📄 useMobile.ts
│   │   └── 📄 useSidebar.ts
│   ├── 📁 lib/                 # Utility libraries
│   │   ├── 📄 toast.ts
│   │   ├── 📄 utils.ts
│   │   └── 📄 utilities.ts
│   ├── 📁 services/            # API services
│   │   ├── 📄 apiFetch.ts
│   │   ├── 📄 authService.ts
│   │   ├── 📄 dashboardService.ts
│   │   ├── 📄 dbConnectionService.ts
│   │   ├── 📄 tabsService.ts
│   │   ├── 📄 chartsService.ts
│   │   ├── 📄 fileService.ts
│   │   └── 📄 exampleService.ts
│   ├── 📁 store/               # Redux store
│   │   ├── 📁 slices/
│   │   │   ├── 📄 authSlice.ts
│   │   │   └── 📄 dashboardSlice.ts
│   │   ├── 📁 thunks/
│   │   │   ├── 📄 authThunks.ts
│   │   │   ├── 📄 dashboardThunks.ts
│   │   │   ├── 📄 dbConnectionThunks.ts
│   │   │   ├── 📄 tabsThunks.ts
│   │   │   ├── 📄 chartsThunks.ts
│   │   │   └── 📄 fileThunks.ts
│   │   └── 📄 store.ts
│   ├── 📁 types/               # TypeScript types
│   ├── 📁 zod/                # Validation schemas
│   └── 📁 assets/              # Static assets
├── 📁 public/                     # Static files
├── 📄 components.json              # ShadCN config
├── 📄 eslint.config.mjs           # ESLint configuration
├── 📄 next.config.ts             # Next.js config
├── 📄 package.json               # Dependencies
├── 📄 pnpm-lock.yaml            # Lock file
├── 📄 tsconfig.json              # TypeScript config
└── 📄 tailwind.config.js         # Tailwind config
```

---

## 🧩 Component Architecture

### 🎯 Custom Components

#### DashboardCard

```typescript
// Card component for dashboard listing
interface DashboardCardProps {
  id: number;
  name: string;
  updatedAt: string;
}

// Features:
- Hover effects and transitions
- Three-dot dropdown menu
- Responsive layout
- Truncate long names
```

#### DashboardActionsDropdown

```typescript
// Three-dot menu with update/delete options
interface DashboardActionsDropdownProps {
  dashboardId: number;
  dashboardName: string;
  onUpdate?: (name: string) => void;
  onDelete?: (id: number) => void;
}

// Features:
- Update and delete actions
- Integrated with Redux thunks
- Modal triggers
```

#### ConnectionModal

```typescript
// Database connection creation modal
interface ConnectionFormValues {
  connection_name: string;
  host: string;
  port: string;
  username: string;
  password: string;
  database_name: string;
  db_type: "mysql" | "postgres";
}

// Features:
- Test-then-create flow
- Form validation with Zod
- Loading states
- Toast notifications
```

#### DashboardBreadcrumb

```typescript
// Navigation breadcrumb component
// Features:
- Dynamic route detection
- Clickable navigation
- Current page highlighting
- Responsive design
```

### 🎨 UI Components (ShadCN)

- **Button**: Variants, sizes, loading states
- **Card**: Consistent card styling
- **Dialog**: Modal dialogs with overlays
- **Input**: Form inputs with validation
- **Select**: Dropdown selection components
- **Sidebar**: Collapsible navigation sidebar
- **Toast**: Notification system
- **Tooltip**: Hover tooltips
- **Breadcrumb**: Navigation breadcrumbs

---

## 🔄 State Management

### Redux Store Structure

```typescript
interface RootState {
  auth: AuthState;
  dashboard: DashboardState;
  // ... other slices
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

interface DashboardState {
  dashboards: Dashboard[];
  loading: boolean;
  error: string | null;
}
```

### Async Thunks

```typescript
// Authentication operations
-registerThunk -
  loginThunk -
  refreshTokenThunk -
  logoutThunk -
  // Dashboard operations
  getDashboardsThunk -
  createDashboardThunk -
  updateDashboardThunk -
  deleteDashboardThunk -
  // Connection operations
  testConnectionRawThunk -
  createConnectionThunk -
  getAllConnectionsThunk -
  updateConnectionThunk -
  deleteConnectionThunk -
  // Tabs operations
  getTabsThunk -
  createTabThunk -
  updateTabThunk -
  deleteTabThunk -
  // Charts operations
  getChartsThunk -
  createChartThunk -
  updateChartThunk -
  deleteChartThunk -
  getDataSourceThunk -
  attachDataSourceThunk -
  updateDataSourceThunk -
  // File operations
  getFilesThunk -
  uploadFileThunk -
  deleteFileThunk -
  getColumnsThunk -
  previewDataThunk;
```

---

## 🌐 API Integration

### Service Layer Architecture

```typescript
// Base API client with token refresh
const apiFetch = (url, options, getAccessToken, onTokenRefresh) => {
  // Automatic token refresh
  // Error handling
  // Response parsing
};

// Service examples
- authService: Login, register, refresh
- dashboardService: CRUD operations
- dbConnectionService: Connection management
```

### Authentication Flow

1. **Login**: User credentials → Access token + refresh token cookie
2. **API Calls**: Access token in Authorization header
3. **Refresh**: Automatic token refresh on expiry
4. **Logout**: Clear tokens and redirect

---

## 🎨 Design System

### Color Palette

```css
/* Light Mode */
--primary: #2563eb (blue-600) --secondary: #64748b (slate-500)
  --background: #ffffff (white) --surface: #f8fafc (slate-50) /* Dark Mode */
  --primary: #3b82f6 (blue-600) --secondary: #94a3b8 (slate-400)
  --background: #020817 (slate-950) --surface: #1e293b (slate-800);
```

### Typography

```css
/* Font Scale */
--text-xs: 0.75rem (12px) --text-sm: 0.875rem (14px) --text-base: 1rem (16px)
  --text-lg: 1.125rem (18px) --text-xl: 1.25rem (20px) /* Font Weights */
  --font-normal: 400 --font-medium: 500 --font-semibold: 600 --font-bold: 700;
```

### Component Variants

```typescript
// Button variants
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
  },
);
```

---

## 📱 Responsive Design

### Breakpoints

```css
/* Tailwind CSS Breakpoints */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Small desktops */
xl: 1280px  /* Desktops */
2xl: 1536px  /* Large desktops */
```

### Mobile Strategy

- **First Mobile**: Design for mobile screens first
- **Progressive Enhancement**: Add features for larger screens
- **Touch-Friendly**: Large tap targets and gestures
- **Responsive Navigation**: Collapsible sidebar on mobile

---

## 🚀 Performance Optimizations

### Code Splitting

```typescript
// Route-based code splitting
const DashboardPage = dynamic(() => import('./dashboard/page'), {
  loading: () => <DashboardSkeleton />
});

// Component lazy loading
const ChartBuilder = lazy(() => import('./components/ChartBuilder'));
```

### Bundle Optimization

```javascript
// next.config.js
module.exports = {
  experimental: {
    optimizePackageImports: ["lucide-react", "echarts"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};
```

### Image Optimization

```typescript
// Next.js Image component
import Image from 'next/image';

<Image
  src={src}
  alt={alt}
  width={width}
  height={height}
  priority={priority}
  placeholder="blur"
/>
```

---

## 🔒 Security Features

### Input Validation

```typescript
// Zod schemas for type-safe validation
const connectionSchema = z.object({
  connection_name: z.string().min(1, "Connection name is required"),
  host: z.string().url("Invalid host format"),
  port: z.number().min(1).max(65535),
  username: z.string().min(1),
  password: z.string().min(1),
  database_name: z.string().min(1),
  db_type: z.enum(["mysql", "postgres"]),
});
```

### Token Management

```typescript
// Secure token handling
const tokenManager = {
  // Automatic refresh
  refreshToken: async () => {
    const response = await fetch("/api/auth/refresh", {
      method: "POST",
      credentials: "include",
    });
    return response.data.accessToken;
  },

  // Secure storage
  storeToken: (token: string) => {
    document.cookie = `token=${token}; HttpOnly; Secure; SameSite=Strict`;
  },
};
```

---

## 🧪 Development Workflow

### Environment Setup

```bash
# Install dependencies
pnpm install

# Development server
pnpm dev

# Build production
pnpm build

# Start production
pnpm start

# Lint code
pnpm lint

# Type check
pnpm type-check
```

### Code Quality

```json
// package.json scripts
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^19",
    "eslint": "^9",
    "typescript": "^5"
  }
}
```

### Git Hooks

```bash
# Pre-commit hooks
husky install
npx husky add .husky/pre-commit "pnpm lint && pnpm type-check"

# Conventional commits
npx commitizen init
```

---

## 🎯 Best Practices

### Component Patterns

- **Composition over Inheritance**: Use composition for reusable logic
- **Custom Hooks**: Extract logic into custom hooks
- **Prop Interfaces**: TypeScript interfaces for all props
- **Error Boundaries**: Handle component errors gracefully
- **Loading States**: Show loading indicators during async operations

### State Management

- **Normalization**: Store normalized data in Redux
- **Optimistic Updates**: Update UI before API response
- **Selective Subscriptions**: Only subscribe to needed state
- **Memoization**: Use React.memo and useMemo wisely

### Performance

- **Virtualization**: For large lists (react-window)
- **Debouncing**: For search and input handlers
- **Code Splitting**: Lazy load components and routes
- **Image Optimization**: Use Next.js Image component

---

## 📊 Future Enhancements

### Planned Features

- **Real-time Collaboration**: WebSocket-based real-time updates
- **Advanced Charts**: More chart types and customization
- **Data Transformations**: Built-in data processing
- **Export Options**: PDF, Excel, PNG exports
- **Dashboard Templates**: Pre-built dashboard templates
- **API Integration**: Connect to external data sources

### Technical Improvements

- **Micro-frontends**: Module federation for scalability
- **Web Workers**: Heavy computations in background
- **Service Workers**: Offline functionality
- **PWA Features**: Installable PWA with offline support

---

## 📌 Conclusion

This frontend represents a **modern, scalable, and production-ready** data visualization platform built with:

- 🏗️ **Modern Architecture**: Next.js 16 + TypeScript + Redux Toolkit
- 🎨 **Beautiful UI**: Tailwind CSS + ShadCN components
- 🔒 **Security First**: JWT auth + input validation + token management
- 📱 **Responsive Design**: Mobile-first approach with progressive enhancement
- 🚀 **Performance Optimized**: Code splitting + lazy loading + bundle optimization
- 🧪 **Developer Experience**: ESLint + TypeScript + Git hooks + hot reload

The codebase follows **React best practices** and **Next.js conventions**, making it maintainable and extensible for future development.
