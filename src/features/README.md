# Features Layer Documentation

This directory contains the feature-based modules for the application. It follows a domain-driven design pattern with feature-specific components, hooks, and business logic organized by domain.

## 📁 Directory Structure

```
src/features/
├── [feature]/               # Feature module
│   ├── components/          # Feature-specific components
│   │   ├── [domain]/        # Domain specific components
│   │   └── shared/          # Shared components
│   ├── hooks/               # Feature-specific hooks
│   ├── utils/               # Feature-specific utils
│   ├── types/               # Feature-specific types
│   ├── constants/           # Feature-specific constants
└── README.md
```

## 🏗️ Architecture Overview

### Feature Modules
Each feature is a self-contained module that includes:
- **Components**: UI components specific to the feature
- **Hooks**: Custom React hooks for feature logic
- **Utils**: Utility functions needed for the feature
- **Types**: TypeScript interfaces and type definitions for the feature domain
- **Constants**: Feature-specific constants, enums, and configuration values

## 🔧 Development Guidelines

### 1. Feature Naming Convention
- Use plural nouns: `chatbots`, `users`, `analytics`
- Use kebab-case for directories: `chatbot-view`, `user-profile`
- Use PascalCase for components: `ChatbotCard`, `UserProfile`

### 2. Component Organization
- **Feature-specific**: Place in feature's components directory
- **Shared within feature**: Place in `shared/` subdirectory
- **Cross-feature**: Consider moving to `src/components/`
- **Domain-specific**: Group by business domain (e.g., `dashboard/`, `chatbot-view/`)

### 3. Component Structure
```typescript
// 1. Imports (external libraries first, then internal)
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useChatbotActions } from '../hooks/useChatbotActions';

// 2. Types and interfaces
interface ComponentProps {
  // props definition
}

// 3. Component implementation
export const ComponentName = ({ prop1, prop2 }: ComponentProps) => {
  // hooks and logic
  // return JSX
};
```

## 📚 Best Practices

1. **Keep features self-contained** - minimize cross-feature dependencies
2. **Use TypeScript** for all components and hooks
3. **Follow single responsibility** - each component has one clear purpose
4. **Implement proper error handling** in components
5. **Use composition over inheritance** for component reuse
6. **Keep components pure** when possible
7. **Add proper loading and error states**
8. **Use semantic HTML** and accessibility features

## 🎯 Component Guidelines

### Props Interface
```typescript
interface ComponentProps {
  // Required props
  title: string;
  data: DataType[];
  
  // Optional props with defaults
  variant?: 'default' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  
  // Event handlers
  onAction?: (id: string) => void;
  onCancel?: () => void;
  
  // Children
  children?: React.ReactNode;
}
```

### Component Implementation
```typescript
export const ComponentName = (props: ComponentProps) => {
  // Local state
  const [isLoading, setIsLoading] = useState(false);
  
  // Event handlers
  const handleAction = (id: string) => {
    setIsLoading(true);
    onAction?.(id);
    setIsLoading(false);
  };
  
  // Render
  return (
    <div className={`component component--${props.variant} component--${props.size}`}>
      <h2>{title}</h2>
      {props.children}
      {props.data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};
```

### 📚 Best Practices 

1. **Use props syntax** to identify which values come from props