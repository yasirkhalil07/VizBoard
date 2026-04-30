# 📊 Data Visualization Platform (Mini Looker Studio)

## 🧠 Project Overview

This project name as VizBoard is a full-stack **Data Visualization Platform** inspired by tools like Google Looker Studio and Power BI.

It allows users (Admins & Clients) to:

- Create dashboards
- Connect external databases
- Upload files (CSV / Excel)
- Build interactive charts
- Organize charts into tabs
- Share dashboards with clients

---

## 🎯 Core Features

### 🔐 Authentication & Roles

- JWT-based authentication with refresh tokens
- Access tokens (15 min) + Refresh tokens (7 days)
- Secure cookie-based refresh token storage
- Roles:
  - Admin → Can create dashboards, connections, charts
  - Client → Can view assigned dashboards

---

### 📁 Dashboard System

- Users land on a dashboard home page
- View existing dashboards
- Create new dashboards

---

### 🔌 Data Connections

Users can connect external databases:

- MySQL
- PostgreSQL

#### Connection Fields:

- Connection Name (unique)
- Host
- Username
- Password
- Database Name

✅ Connection is validated before saving

---

### 📂 File Upload Support

- CSV
- Excel (XLSX)

Libraries:

- `xlsx`
- `csv-parser`

---

### 📑 Tabs System (Power BI Style)

- Each dashboard can have multiple tabs
- Tabs can be ordered
- Charts are grouped inside tabs

---

### 📊 Chart Builder

- Supports chart types:
  - Line
  - Bar
  - Pie

- Users can:
  - Select data source (File or DB)
  - Select tables and Map their columns (e.g., xAxis, yAxis)
  - Drag & drop fields

---

### 🔗 Data Source Types

#### 1. File Source

- CSV / Excel
- Parsed on backend

#### 2. Database Source

- Uses saved connections
- Fetches tables and columns
- Executes safe SELECT queries

---

### 🧩 Chart Configuration

Each chart stores dynamic config as JSON:

```json
***BAR***
{
  "name": "Sales Chart",
  "chartType": "bar",
  "config": {
    "data": {
      "table": "sales",
      "dimensions": ["month"],
      "measures": [
        {
          "field": "revenue",
          "aggregation": "sum"
        }
      ]
    },
    "visual": {
      "xAxis": "month",
      "yAxis": "revenue",
      "title": "Monthly Sales",
      "showLegend": true
    }
  },
  "positionX": 0,
  "positionY": 0,
  "width": 400,
  "height": 300
}

***PIE***
{
  "name": "Revenue by Category",
  "chartType": "pie",
  "config": {
    "data": {
      "table": "sales",
      "dimensions": ["category"],
      "measures": [
        {
          "field": "revenue",
          "aggregation": "sum"
        }
      ]
    },
    "visual": {
      "label": "category",
      "value": "revenue",
      "title": "Revenue Distribution",
      "showLegend": true
    }
  },
  "positionX": 0,
  "positionY": 0,
  "width": 400,
  "height": 300
}

***LINE***
{
  "name": "Sales Trend",
  "chartType": "line",
  "config": {
    "data": {
      "table": "sales",
      "dimensions": ["date"],
      "measures": [
        {
          "field": "revenue",
          "aggregation": "sum"
        }
      ]
    },
    "visual": {
      "xAxis": "date",
      "yAxis": "revenue",
      "title": "Sales Over Time",
      "showLegend": true
    }
  },
  "positionX": 0,
  "positionY": 0,
  "width": 500,
  "height": 300
}
```

---

### 📤 Export System

- Export dashboards as PDF
- Uses Puppeteer

---

## 🏗️ Tech Stack

### 🖥️ Frontend

- Next.js (TypeScript)
- Tailwind CSS + ShadCN UI
- Redux Toolkit (UI state)
- ECharts (data visualization)
- Zod (validation)
- dnd-kit (drag & drop)
- React DnD (advanced drag & drop)
- React Dropzone (file uploads)

---

### ⚙️ Backend

- Express.js
- Prisma ORM
- Zod (validation)
- JWT Authentication
- Multer (file uploads)
- Puppeteer (PDF export)
- Winston (logging)

---

### 🗄️ Database

- SQLite (initial)
- Prisma ORM

---

## 📁 Project Structure

```
VizBoard/
├── 📁 backend/                    # Express.js API Server
│   ├── 📄 .env                   # Environment variables
│   ├── 📄 package.json           # Dependencies & scripts
│   ├── 📄 server.ts              # Main entry point
│   ├── 📄 prisma.config.ts        # Prisma configuration
│   ├── 📁 prisma/                # Database schema & migrations
│   │   ├── 📄 schema.prisma      # Database model definitions
│   │   ├── 📄 dev.db            # SQLite database (development)
│   │   └── 📁 migrations/       # Database migration files
│   └── 📁 src/                   # Source code
│       ├── 📁 config/           # Configuration files
│       │   └── 📄 env.ts        # Environment variable handling
│       ├── 📁 controllers/      # Request handlers
│       │   └── 📄 auth.controllers.ts
│       ├── 📁 middleware/       # Express middleware
│       ├── 📁 models/           # Data models
│       ├── 📁 routes/           # API routes
│       │   └── 📄 auth.routes.ts
│       ├── 📁 services/         # Business logic
│       │   └── 📄 auth.service.ts
│       ├── 📁 types/            # TypeScript type definitions
│       ├── 📁 utils/            # Utility functions
│       │   ├── 📄 jwtHelper.ts  # JWT token utilities
│       │   └── 📄 prisma.ts     # Prisma client setup
│       └── 📁 validators/       # Input validation
│
├── 📁 frontend/                  # Next.js Frontend
│   ├── 📄 package.json          # Dependencies & scripts
│   ├── 📄 next.config.ts         # Next.js configuration
│   ├── 📄 tailwind.config.js     # Tailwind CSS configuration
│   ├── 📄 tsconfig.json          # TypeScript configuration
│   ├── � components.json        # ShadCN UI configuration
│   ├── �📁 app/                   # App Router (Next.js 13+)
│   │   ├── 📄 page.tsx          # Home page (dashboard listing)
│   │   ├── 📁 auth/              # Authentication pages
│   │   ├── 📁 dashboard/         # Dashboard layout wrapper
│   │   │   └── 📄 layout.tsx    # Sidebar and header layout
│   │   ├── 📄 layout.tsx        # Root layout
│   │   └── � globals.css       # Global styles
│   ├── 📁 public/                # Static assets
│   └── 📁 src/                   # Source code
│       ├── 📁 components/        # All components
│       │   ├── 📁 custom/         # Custom application components
│       │   │   ├── 📄 DashboardCard.tsx
│       │   │   ├── 📄 CreateDashboardCard.tsx
│       │   │   └── 📄 Navbar.tsx
│       │   ├── 📁 shared/        # Shared layout components
│       │   │   ├── 📄 AppSidebar.tsx  # Collapsible sidebar with logout
│       │   │   └── 📄 CollapsibleSidebar.tsx
│       │   └── 📁 ui/            # ShadCN UI components
│       │       ├── 📄 sidebar.tsx    # Sidebar components
│       │       ├── 📄 tooltip.tsx    # Tooltip components
│       │       ├── � button.tsx     # Button components
│       │       └── ...              # Other UI components
│       ├── �📁 hooks/             # Custom React hooks
│       ├── 📁 store/             # Redux store configuration
│       ├── 📁 types/             # TypeScript types
│       ├── 📁 services/          # API services
│       ├── 📁 utils/             # Utility functions
│       ├── � config/            # Configuration files
│       ├── � constants/         # Application constants
│       ├── 📁 assets/            # Static assets
│       └── 📁 lib/               # Utility libraries
│           └── � utils.ts       # Utility functions
│
└── 📄 vizboard.md               # Project documentation
```

---

## 📦 Package.json Files

### Backend Package.json

```json
{
  "name": "backend",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon server.ts"
  },
  "dependencies": {
    "@prisma/adapter-better-sqlite3": "^7.8.0",
    "@prisma/client": "^7.7.0",
    "bcrypt": "^6.0.0",
    "better-sqlite3": "12.9.0",
    "cookie-parser": "^1.4.7",
    "dotenv": "^17.4.2",
    "express": "5.2.1",
    "jsonwebtoken": "^9.0.3",
    "morgan": "1.10.1",
    "multer": "2.1.1",
    "puppeteer": "24.41.0",
    "winston": "3.19.0",
    "zod": "4.3.6"
  },
  "devDependencies": {
    "@types/bcrypt": "^6.0.0",
    "@types/cookie-parser": "^1.4.10",
    "@types/express": "^5.0.6",
    "@types/jsonwebtoken": "^9.0.10",
    "@types/morgan": "1.9.10",
    "@types/multer": "2.1.0",
    "@types/node": "25.6.0",
    "prisma": "^7.7.0",
    "ts-node": "10.9.2",
    "typescript": "6.0.3"
  }
}
```

### Frontend Package.json

```json
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@dnd-kit/core": "^6.3.1",
    "@dnd-kit/sortable": "^10.0.0",
    "@reduxjs/toolkit": "^2.11.2",
    "autoprefixer": "^10.5.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "csv-parser": "^3.2.0",
    "echarts": "^6.0.0",
    "echarts-for-react": "^3.0.6",
    "lucide-react": "^1.8.0",
    "next": "16.2.4",
    "postcss": "^8.5.10",
    "radix-ui": "^1.4.3",
    "react": "19.2.4",
    "react-dnd": "^16.0.1",
    "react-dnd-html5-backend": "^16.0.1",
    "react-dom": "19.2.4",
    "react-dropzone": "^15.0.0",
    "react-redux": "^9.2.0",
    "shadcn": "^4.4.0",
    "tailwind-merge": "^3.5.0",
    "tw-animate-css": "^1.4.0",
    "xlsx": "^0.18.5",
    "zod": "^4.3.6"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.4",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

---

## 🗃️ Database Schema (Prisma)

### 🎭 Roles

```sql
CREATE TABLE roles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT UNIQUE NOT NULL -- "admin" | "client"
);
```

### 👥 Users

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role_id INTEGER NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (role_id) REFERENCES roles(id)
);
```

### 🔌 Data Connections

```sql
CREATE TABLE data_connections (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  connection_name TEXT UNIQUE NOT NULL,
  user_id INTEGER NOT NULL,
  db_type TEXT NOT NULL, -- "mysql" | "postgres"
  host TEXT NOT NULL,
  username TEXT NOT NULL,
  password TEXT NOT NULL,
  database_name TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

### 📊 Dashboards

```sql
CREATE TABLE dashboards (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  user_id INTEGER NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

### 🔗 Dashboard Access (M:M)

```sql
CREATE TABLE dashboard_access (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  dashboard_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  UNIQUE(dashboard_id, user_id), -- Prevent duplicates
  FOREIGN KEY (dashboard_id) REFERENCES dashboards(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

### 📑 Tabs

```sql
CREATE TABLE tabs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  dashboard_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  order_index INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (dashboard_id) REFERENCES dashboards(id) ON DELETE CASCADE
);
```

### 📈 Charts

```sql
CREATE TABLE charts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tab_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  chart_type TEXT NOT NULL, -- "line" | "bar" | "pie"
  config TEXT NOT NULL, -- JSON string (SQLite limitation)
  position_x REAL DEFAULT 0,
  position_y REAL DEFAULT 0,
  width REAL DEFAULT 400,
  height REAL DEFAULT 300,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (tab_id) REFERENCES tabs(id) ON DELETE CASCADE
);
```

### 📂 Files

```sql
CREATE TABLE files (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  file_name TEXT NOT NULL,
  file_type TEXT NOT NULL, -- "csv" | "xlsx"
  file_path TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

### 🔗 Chart Data Sources (Polymorphic)

```sql
CREATE TABLE chart_data_sources (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  chart_id INTEGER UNIQUE NOT NULL, -- 1:1 with Chart
  type TEXT NOT NULL, -- "file" | "db"
  file_id INTEGER, -- nullable - used when type = "file"
  connection_id INTEGER, -- nullable - used when type = "db"
  FOREIGN KEY (chart_id) REFERENCES charts(id) ON DELETE CASCADE,
  FOREIGN KEY (file_id) REFERENCES files(id) ON DELETE SET NULL,
  FOREIGN KEY (connection_id) REFERENCES data_connections(id) ON DELETE SET NULL
);
```

### 🔄 Refresh Tokens

```sql
CREATE TABLE refresh_tokens (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  token TEXT UNIQUE NOT NULL, -- Hashed refresh token
  user_id INTEGER NOT NULL,
  expires_at DATETIME NOT NULL,
  revoked BOOLEAN DEFAULT FALSE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

---

## 🔗 Database Relationships

### 📊 Entity Relationships

- **User → Dashboards** (1:M) - Users can create multiple dashboards
- **Dashboard → Tabs** (1:M) - Dashboards can have multiple tabs
- **Tab → Charts** (1:M) - Tabs can contain multiple charts
- **Chart → Data Source** (1:1) - Each chart has exactly one data source
- **Data Source → File OR Connection** (Polymorphic) - Data source can be either a file or DB connection
- **Dashboard ↔ Users** (M:M) - Dashboards can be shared with multiple users via dashboard_access
- **User → Refresh Tokens** (1:M) - Users can have multiple refresh tokens

### 🎯 Key Design Patterns

1. **Polymorphic Relationships**: Chart data sources can reference either files or DB connections
2. **Soft Cascades**: Data sources use `ON DELETE SET NULL` to preserve chart configurations
3. **Access Control**: Dashboard access table enables role-based sharing
4. **Ordering**: Tabs have `order_index` for drag-and-drop reordering
5. **Positioning**: Charts have position/size fields for dashboard layout

---

## 🔗 API Endpoints

### 🔐 Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login (returns access token + sets refresh token cookie)
- `POST /api/auth/logout` - User logout (clears refresh token)
- `POST /api/auth/refreshToken` - Refresh access token using refresh token

### 📊 Dashboard Management

- `GET /api/dashboards` - List user dashboards
- `POST /api/dashboards` - Create dashboard
- `PUT /api/dashboards/:id` - Update dashboard
- `DELETE /api/dashboards/:id` - Delete dashboard

### 📑 Tab Management

- `GET /api/dashboards/:id/tabs` - List dashboard tabs
- `POST /api/dashboards/:id/tabs` - Create tab
- `PUT /api/dashboards/tabs/:id` - Update tab
- `DELETE /api/dashboards/tabs/:id` - Delete tab

### 📈 Chart Management

- `GET /api/tabs/:id/charts` - List tab charts
- `POST /api/tabs/:id/charts` - Create chart
- `PUT /api/charts/:id` - Update chart
- `DELETE /api/charts/:id` - Delete chart

### 📊 Data Source (IMPORTANT - matches your schema) extends chart managment apis

- `POST /api/charts/:id/data-source` - Attach file/db source
- `PUT /api/charts/:id/data-source` - Update source
- `GET /api/charts/:id/data-source` - Get source

### 🔌 Data Connections

- `GET /api/connections` - List user connections
- `POST /api/connections` - Create connection
- `PUT /api/connections/:id` - Update connection
- `DELETE /api/connections/:id` - Delete connection
- `POST /api/connections/:id/test` - Test connection

### 📊 Database Connection Tables (IMPORTANT for charts)

- `GET /api/connections/:id/tables` - Get tables (IMPORTANT for charts)
- `GET /api/connections/:id/tables/:table` - Get columns

### 📂 File Management

- `POST /api/files/upload` - Upload CSV/Excel file
- `GET /api/files` - List user files
- `GET /api/files/:id/preview` - Preview file data
- `DELETE /api/files/:id` - Delete file

### 📊 File Preview (IMPORTANT for charts)

- `GET /api/files/:id/preview` - Preview rows (limit 50)
- `GET /api/files/:id/columns` - Extract column names

### 📤 Export

- `GET /api/dashboards/:id/export` - Export dashboard as PDF

---

## 🔄 Data Flow

### File Flow

1. Upload file
2. Parse data
3. Store metadata
4. Map fields to chart

---

### Database Flow

1. Create connection
2. Validate connection
3. Fetch tables
4. Fetch columns
5. Map to chart

---

## ⚠️ Security Considerations

- Only allow SELECT queries
- Validate all inputs using Zod
- Encrypt database passwords (future)
- Prevent SQL injection

---

## 🚀 Future Enhancements

- PostgreSQL migration
- Real-time dashboards
- API data sources
- Dashboard sharing via link
- Role-based permissions
- Chart templates

---

## 🧠 Engineering Concepts Used

- Polymorphic relationships (chart_data_sources)
- Separation of concerns
- Server vs client state management
- Dynamic schema handling

---

## 📌 Conclusion

This project is a **full-scale data platform** demonstrating:

- Frontend architecture
- Backend design
- Database modeling
- Real-world SaaS thinking

It is designed to be **scalable, modular, and production-ready**.
