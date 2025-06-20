# API Layer Documentation

This directory contains the API layer for the application. It contains services, hooks, and query management using React Query (TanStack Query).

## 📁 Directory Structure

```
src/api/
├── services/                         # API service functions
├── hooks/                            # React Query hooks
│   ├── queries/                      # Query hooks for data fetching
│   ├── mutations/                    # Mutation hooks for data updates
│   └── query-client-key.constants.ts # Unique keys for query and mutation hooks
└── README.md
```

## 🏗️ Architecture Overview

### Services Layer (`/services`)
Services contain the actual API calls and business logic. They are responsible for:
- Making HTTP requests to the backend
- Error handling
- Mock data (during development)

### Hooks Layer (`/hooks`)
React Query hooks that provide:
- Data fetching with caching
- Loading and error states
- Data transformation and validation
- Optimistic updates
- Background refetching

## 📝 Usage Examples

### Creating a New Service

```typescript
// src/api/services/user.service.ts
import { User } from '@/types/user.types';

const getUserProfile = (userId: string): Promise<User> => {
  // TODO: Replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: userId,
        name: 'John Doe',
        email: 'john@example.com'
      });
    }, 500);
  });
};

export const userService = {
  getUserProfile
};
```

### Creating a New Query Hook

```typescript
// src/api/hooks/queries/user/useUserProfileQuery.tsx
import { useQuery } from '@tanstack/react-query';
import { QueryClientKeys } from '../../query-client-key.constants';
import { userService } from '@/api/services/user.service';

const useUserProfileQuery = (userId: string) => {
  return useQuery({
    queryKey: [QueryClientKeys.User.Profile, userId],
    queryFn: () => userService.getUserProfile(userId),
    enabled: !!userId,
  });
};

export default useUserProfileQuery;
```

### Adding Query Keys

```typescript
// src/api/hooks/query-client-key.constants.ts
export const QUERY_CLIENT_KEYS = {
  USER: {
    PROFILE: 'USER_PROFILE',
  }
};
```

## 🔧 Development Guidelines

### 1. Service Naming Convention
- Use camelCase for function names: `getChatbotList`, `createChatbot`
- Export services as objects: `export const chatbotService = { ... }`
- Include TypeScript interfaces for all data structures

### 2. Hook Naming Convention
- Use `use` prefix: `useChatbotListQuery`, `useCreateChatbotMutation`
- Suffix queries with `Query` and mutations with `Mutation`
- Group by service name in subdirectories
- Include proper TypeScript types

### 3. Query Key Management
- Use constants for all query keys
- Group keys by service name
- Include parameters in query keys for cache management

## 📚 Best Practices

1. **Always use TypeScript** for type safety
2. **Keep services pure** - no React-specific logic
3. **Use proper error boundaries** in components
4. **Implement proper loading states**
5. **Cache strategically** - use `staleTime` and `cacheTime`
6. **Handle optimistic updates** for better UX
7. **Add proper error logging** and monitoring

## 📖 Additional Resources

- [React Query Documentation](https://tanstack.com/query/latest)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)