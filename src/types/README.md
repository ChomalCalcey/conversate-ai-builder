# Types Layer Documentation

This directory contains TypeScript type definitions, interfaces, and type utilities that define the shape of data throughout the application. These types ensure type safety, improve developer experience, and serve as documentation for data structures.

## 📁 Directory Structure

```
src/types/
├── api.types.ts               # API request/response types [EXAMPLE]
├── auth.types.ts              # Authentication and user types [EXAMPLE]
└── README.md
```

## 🏗️ Architecture Overview

### Type Categories
- **Domain Types**: Business logic types (chatbot, user, etc.)
- **API Types**: Request/response types for API communication
- **UI Types**: Component prop types and UI-related interfaces
- **Utility Types**: Generic and helper types
- **Form Types**: Form validation and input types
- **Common Types**: Shared types used across features

### Type Organization
- **Global types**: Used across multiple features (placed in `src/types/`)
- **Feature-specific types**: Used only within a specific feature (placed in `src/features/[feature]/types/`)

## 📚 Best Practices

1. **Use descriptive names** - Make type names self-documenting
2. **Keep types focused** - Each type should have a single responsibility
3. **Use TypeScript features** - Leverage generics, unions, and utility types
4. **Document complex types** - Add JSDoc comments for complex interfaces
5. **Use const assertions** - For literal types and better type inference
6. **Group related types** - Organize types by domain or functionality
7. **Use branded types** - For type safety when needed
8. **Export from index** - Provide clean import paths
