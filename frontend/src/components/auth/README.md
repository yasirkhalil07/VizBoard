# Route Protection System

This directory contains components and utilities for protecting routes in your Next.js App Router application.

## Components

### ProtectedRoute
Wraps components that require authentication. Redirects to login page if user is not authenticated.

```tsx
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div>Your protected dashboard content</div>
    </ProtectedRoute>
  );
}
```

**Props:**
- `children`: React.ReactNode - The protected content
- `redirectTo?`: string - Where to redirect if not authenticated (default: "/auth/login")
- `fallback?`: React.ReactNode - Custom loading component

### PublicRoute
Wraps components that should only be accessible to non-authenticated users (like login/register pages). Redirects to dashboard if user is already authenticated.

```tsx
import PublicRoute from "@/components/auth/PublicRoute";

export default function LoginPage() {
  return (
    <PublicRoute>
      <div>Your login form</div>
    </PublicRoute>
  );
}
```

**Props:**
- `children`: React.ReactNode - The public content
- `redirectTo?`: string - Where to redirect if already authenticated (default: "/dashboard")
- `fallback?`: React.ReactNode - Custom loading component

### AuthInitializer
Automatically initializes authentication state and attempts to refresh tokens on app startup. This should be wrapped around your entire app in the root layout.

## Hooks

### useAuth
Provides access to authentication state and actions.

```tsx
import { useAuth } from "@/hooks/useAuth";

export default function MyComponent() {
  const { user, isAuthenticated, login, logout, loading } = useAuth();
  
  const handleLogin = async () => {
    try {
      await login("email@example.com", "password");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  
  return (
    <div>
      {isAuthenticated ? (
        <div>Welcome, {user?.name}!</div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}
```

**Returns:**
- `user`: User | null - Current user data
- `accessToken`: string | null - JWT access token
- `isAuthenticated`: boolean - Authentication status
- `loading`: boolean - Loading state for auth operations
- `error`: string | null - Error message
- `initialized`: boolean - Whether auth state has been initialized
- `login(email, password)`: Promise - Login function
- `logout()`: Promise - Logout function
- `refreshToken()`: Promise - Token refresh function
- `getAccessToken()`: string | null - Get current access token

## Middleware

The middleware.ts file provides basic server-side route protection. It's configured to work with your Redux-based authentication system.

**Protected routes:** `/dashboard`, `/profile`, `/settings`
**Public routes:** `/auth/login`, `/auth/register`

## Usage Examples

### Protecting a Dashboard Route
```tsx
// app/dashboard/page.tsx
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="p-8">
        <h1>Dashboard</h1>
        {/* Your dashboard content */}
      </div>
    </ProtectedRoute>
  );
}
```

### Public Authentication Routes
```tsx
// app/auth/login/page.tsx
import PublicRoute from "@/components/auth/PublicRoute";

export default function LoginPage() {
  return (
    <PublicRoute>
      <div className="min-h-screen flex items-center justify-center">
        {/* Your login form */}
      </div>
    </PublicRoute>
  );
}
```

### Using useAuth Hook
```tsx
// components/Header.tsx
import { useAuth } from "@/hooks/useAuth";

export default function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  
  return (
    <header>
      {isAuthenticated ? (
        <div>
          <span>Welcome, {user?.name}</span>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/register">Register</Link>
        </div>
      )}
    </header>
  );
}
```

## Integration with Redux

The route protection system integrates seamlessly with your existing Redux authentication setup:

1. **Auth State**: Uses your existing `authSlice` for authentication state
2. **Token Management**: Works with your token refresh system in `apiFetch.ts`
3. **Thunks**: Uses your existing auth thunks for login/logout operations

## Security Features

- **Automatic token refresh**: Tokens are automatically refreshed when they expire
- **Route protection**: Server and client-side route protection
- **Session validation**: Tokens are validated on app startup
- **Secure redirects**: Proper URL encoding for callback URLs
- **Loading states**: Proper loading indicators during auth checks

## Customization

You can easily customize the route protection:

1. **Add new protected routes**: Update the `protectedRoutes` array in `middleware.ts`
2. **Custom redirects**: Pass custom `redirectTo` props to route components
3. **Custom loading states**: Provide custom `fallback` components
4. **Route-specific logic**: Create higher-order components for specific route types
