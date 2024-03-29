// src/server/router/index.ts
import { t } from '../trpc';
import { quizRouter } from './quizRouter';

export const appRouter = t.router({
  quiz: quizRouter,
});

// Ensure to export the type of appRouter for client-side usage
export type AppRouter = typeof appRouter;
