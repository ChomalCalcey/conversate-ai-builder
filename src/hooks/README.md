# Hooks Layer Documentation

This directory contains reusable React hooks that provide shared functionality across the application. These hooks encapsulate common logic, state management, and side effects that can be used by multiple components.

## 📁 Directory Structure

```
src/hooks/
└── README.md
```

## 🏗️ Architecture Overview

### Hook Categories
- **Utility Hooks**: Provide common utilities like device detection, formatting, etc.
- **State Management Hooks**: Manage complex state logic and side effects
- **UI Interaction Hooks**: Handle UI-specific interactions like notifications, modals, etc.
- **Data Hooks**: Handle data fetching, caching, and synchronization (typically in features)

### Hook Organization
- **Global hooks**: Used across multiple features (placed in `src/hooks/`)
- **Feature-specific hooks**: Used only within a specific feature (placed in `src/features/[feature]/hooks/`)

## 🔧 Development Guidelines

### 1. Hook Naming Convention
- Use `use` prefix: `useMobile`, `useToast`, `useLocalStorage`
- Use camelCase: `useLocalStorage`, `useDebounceValue`
- Be descriptive: `useChatbotActions` instead of `useActions`

### 2. Hook Structure
```typescript
// 1. Imports
import { useState, useEffect, useCallback } from 'react';

// 2. Types and interfaces
interface UseHookOptions {
  // options definition
}

interface UseHookReturn {
  // return value definition
}

// 3. Hook implementation
export function useHookName(options: UseHookOptions): UseHookReturn {
  // State declarations
  const [state, setState] = useState(initialValue);
  
  // Effects
  useEffect(() => {
    // side effects
  }, [dependencies]);
  
  // Callbacks
  const handleAction = useCallback(() => {
    // action logic
  }, [dependencies]);
  
  // Return values
  return {
    state,
    handleAction,
  };
}
```

### 3. Performance Optimization
```typescript
export function useMemoizedValue<T>(value: T, deps: React.DependencyList): T {
  return useMemo(() => value, deps);
}

export function useStableCallback<T extends (...args: any[]) => any>(
  callback: T
): T {
  return useCallback(callback, []);
}
```

## 📚 Best Practices

1. **Keep hooks focused** - Each hook should have a single responsibility
2. **Use TypeScript** - Provide proper types for all parameters and return values
3. **Handle cleanup** - Use useEffect cleanup functions for subscriptions and timers
4. **Optimize performance** - Use useCallback and useMemo when appropriate
5. **Provide defaults** - Give sensible default values for optional parameters
6. **Handle errors gracefully** - Include error states and error handling
7. **Document dependencies** - Clearly specify what the hook depends on
8. **Test thoroughly** - Write tests for complex hook logic

## 📖 Additional Resources

- [React Hooks Documentation](https://react.dev/reference/react/hooks)
- [Custom Hooks Guide](https://react.dev/learn/reusing-logic-with-custom-hooks)