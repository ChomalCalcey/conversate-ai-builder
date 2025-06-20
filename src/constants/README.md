# Constants Layer Documentation

This directory contains application-wide constants, configuration values, and static data that are used throughout the application. Constants help maintain consistency, reduce magic numbers, and centralize configuration management.

## 📁 Directory Structure

```
src/constants/
├── app.constants.ts           # Application-wide constants [EXAMPLE]
├── api.constants.ts           # API-related constants [EXAMPLE]
└── README.md
```

## 🏗️ Architecture Overview

### Constant Categories
- **Application Constants**: App-wide settings, feature flags, and configuration
- **API Constants**: Endpoints, headers, status codes, and API configuration
- **Validation Constants**: Form validation rules, error messages, and constraints
- **Theme Constants**: Colors, spacing, breakpoints, and design tokens
- **Route Constants**: Application routes, paths, and navigation
- **Error Constants**: Error messages, codes, and user-facing messages

### Constant Organization
- **Global constants**: Used across multiple features (placed in `src/constants/`)
- **Feature-specific constants**: Used only within a specific feature (placed in `src/features/[feature]/constants/`)

## 🔧 Development Guidelines

### 1. Constant Naming Convention
- Use UPPER_SNAKE_CASE: `API_BASE_URL`, `MAX_RETRY_ATTEMPTS`
- Use descriptive names: `CHATBOT_CREATION_ENABLED` instead of `ENABLED`
- Group related constants: `API_ENDPOINTS.AUTH.LOGIN`

### 2. Constant Structure
```typescript
// 1. Simple constants
export const APP_NAME = 'Conversate AI Builder';

// 2. Object constants
export const CONFIG = {
  TIMEOUT: 5000,
  RETRIES: 3,
} as const;

// 3. Function constants
export const ENDPOINTS = {
  GET_USER: (id: string) => `/users/${id}`,
  UPDATE_USER: (id: string) => `/users/${id}`,
} as const;

// 4. Enum-like constants
export const STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  PENDING: 'pending',
} as const;
```

### 3. Type Safety
```typescript
// Use const assertions for better type inference
export const THEME_COLORS = {
  PRIMARY: '#3B82F6',
  SECONDARY: '#6B7280',
  SUCCESS: '#10B981',
  ERROR: '#EF4444',
  WARNING: '#F59E0B',
} as const;

// Create type from constant
export type ThemeColor = typeof THEME_COLORS[keyof typeof THEME_COLORS];

// Use in components
const Button = ({ color }: { color: ThemeColor }) => {
  return <button style={{ backgroundColor: color }}>Click me</button>;
};
```

### 4. Environment-Specific Constants
```typescript
// src/constants/environment.constants.ts
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

export const ENVIRONMENT = {
  IS_DEV: isDevelopment,
  IS_PROD: isProduction,
  DEBUG_MODE: isDevelopment,
  API_URL: process.env.REACT_APP_API_URL || 'http://localhost:3001',
  SENTRY_DSN: process.env.REACT_APP_SENTRY_DSN,
} as const;
```

## 📚 Best Practices

1. **Use const assertions** - Add `as const` to prevent mutation and improve type inference
2. **Group related constants** - Organize constants by domain or functionality
3. **Use descriptive names** - Make constant names self-documenting
4. **Centralize configuration** - Keep all config values in one place
5. **Use TypeScript** - Leverage type safety for constants
6. **Document complex constants** - Add comments for non-obvious values
7. **Use environment variables** - For environment-specific values
8. **Avoid magic numbers** - Replace hardcoded values with named constants

## 📖 Additional Resources

- [JavaScript Constants Best Practices](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) 