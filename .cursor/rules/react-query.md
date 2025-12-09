---
description: React Query best practices
globs: app/**/*.tsx, app/**/*.ts
alwaysApply: true
---

# React Query Best Practices

## Enforce the following folder structure:
  - app/
    - components/
    - constants/
    - hooks/
      - useQueries/
      - useMutations/
    - routes/
    - utils/

## Additional instructions

- Use TypeScript for type safety with React Query
- Implement proper error boundaries for query errors
- Utilize React Query DevTools for debugging
- Use stale-while-revalidate strategy for data freshness
- Implement optimistic updates for mutations
- Use query invalidation for data refetching
- Follow React Query naming conventions for consistency

- Use QueryClient and QueryClientProvider at the root of your app
- Implement custom hooks for queries and mutations
- Utilize query keys for effective caching
- Use prefetching for improved performance
- Implement proper error and loading states
- Place query hooks in app/hooks/useQueries/
- Place mutation hooks in app/hooks/useMutations/