# App Layer Documentation

This directory contains the core application structure, routing configuration, and main application components. It serves as the entry point and orchestrates the overall application flow, including routing, layout management, and global state initialization.

## 📁 Directory Structure

```
src/app/
├── App.tsx                    # Main application component
├── routes/                    # Application routes and pages
│   ├── Index.tsx              # Home/Landing page
│   ├── NotFound.tsx           # 404 error page
│   └── [domain]/              # Domain specific routes
│       ├── ExamplePage.tsx    # domain specific route page
└── README.md
```

## 🏗️ Architecture Overview

### App Structure
- **App.tsx**: Main application wrapper with providers, routing, and global configuration
- **Routes**: Page components organized by feature and access level
- **Layout Management**: Consistent layouts across different sections
- **Global Providers**: Context providers for app-wide state and configuration

### Route Organization
- **Public Routes**: Accessible to all users (landing, login, signup)
- **Protected Routes**: Require authentication (admin portal, user dashboard)
- **Feature Routes**: Organized by business domain (admin-portal, user-portal)
- **Error Routes**: Handle application errors and edge cases

## 🔧 Development Guidelines

### 1. Route Naming Convention
- Use PascalCase for page components: `AdminDashboardPage`, `ChatbotCreatePage`
- Use kebab-case for URLs: `/admin-portal`, `/chatbot-create`
- Use descriptive names: `MyChatbotsPage` instead of `ChatbotsPage`
- Keep API calls or business logic out of page components

## 📚 Best Practices

1. **Keep pages focused** - Each page should have a single responsibility
2. **Use proper loading states** - Show loading indicators during data fetching
3. **Handle errors gracefully** - Display user-friendly error messages
4. **Implement proper routing** - Use nested routes and layouts
5. **Optimize performance** - Use code splitting for large pages
6. **Maintain consistency** - Use consistent layouts and styling
7. **Handle authentication** - Protect routes that require authentication
8. **Use TypeScript** - Provide proper types for all components