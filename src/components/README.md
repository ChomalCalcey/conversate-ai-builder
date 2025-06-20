# Components Layer Documentation

This directory contains reusable UI components that form the building blocks of the application's user interface. Components are organized by their scope and purpose, from foundational UI elements to complex composite components.

## 📁 Directory Structure

```
src/components/
├── [domain]/                 # Shared main domain specific components
├── ui/                       # Base UI components (shadcn/ui)
└── README.md
```

## 🏗️ Architecture Overview

### Component Categories
- **Base UI Components**: Fundamental building blocks (buttons, inputs, etc.)
- **Layout Components**: Structural components (cards, containers, etc.)
- **Navigation Components**: Menu, sidebar, and navigation elements
- **Feedback Components**: Alerts, toasts, and status indicators
- **Data Display Components**: Tables, lists, and data visualization
- **Form Components**: Input fields, validation, and form handling
- **Overlay Components**: Modals, popovers, and overlays

### Component Organization
- **UI Components**: Reusable base components (shadcn/ui)
- **Domain Components**: Shared components specific to main business domains


## 🔧 Development Guidelines

### 1. Component Naming Convention
- Use PascalCase for non-ui shared components: `Button`, `UserProfile`, `DataTable`
- User kebab case for shadcn/ui components
- Be descriptive: `UserProfileCard` instead of `Card`
- Use consistent prefixes: `AdminHeader`, `UserHeader`

### 2. Component Structure
```typescript
// 1. Imports (external libraries first, then internal)
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// 2. Types and interfaces
interface ComponentProps {
  title: string;
  onAction?: () => void;
  children?: React.ReactNode;
}

// 3. Component implementation
export const ComponentName = ({ title, onAction, children }: ComponentProps) => {
  // Local state
  const [isLoading, setIsLoading] = useState(false);
  
  // Event handlers
  const handleAction = () => {
    setIsLoading(true);
    onAction?.();
    setIsLoading(false);
  };
  
  // Render
  return (
    <Card>
      <h2>{title}</h2>
      {children}
      <Button onClick={handleAction} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Action'}
      </Button>
    </Card>
  );
};
```

### 3. Props Interface Guidelines
```typescript
interface ComponentProps {
  // Required props
  title: string;
  data: DataType[];
  
  // Optional props with defaults
  variant?: 'default' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  
  // Event handlers
  onAction?: (id: string) => void;
  onCancel?: () => void;
  
  // Children
  children?: React.ReactNode;
  
  // HTML attributes
  className?: string;
  style?: React.CSSProperties;
}
```

### 4. Styling Guidelines
```typescript
// Use Tailwind CSS classes
export const Button = ({ variant = 'default', className, ...props }: ButtonProps) => {
  const baseClasses = 'px-4 py-2 rounded-md font-medium transition-colors';
  
  const variantClasses = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outlined: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    ghost: 'text-gray-700 hover:bg-gray-100',
  };
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className || ''}`}
      {...props}
    />
  );
};
```

## 📚 Best Practices

1. **Keep components focused** - Each component should have a single responsibility
2. **Use TypeScript** - Provide proper types for all props and state
3. **Follow composition patterns** - Use children and render props for flexibility
4. **Implement proper accessibility** - Use semantic HTML and ARIA attributes
5. **Handle loading and error states** - Provide feedback for async operations
6. **Use consistent styling** - Follow design system patterns
7. **Optimize performance** - Use React.memo and useMemo when appropriate
8. **Write comprehensive tests** - Test component behavior and interactions


## 📖 Additional Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) 