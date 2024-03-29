//quizrouter
import { t } from '../trpc'; 
import { z } from 'zod';

export const quizRouter = t.router({
  create: t.procedure
    .input(z.object({
      title: z.string(),
      instructions: z.string(),
      questions: z.array(z.object({
        question: z.string(),
        answer: z.string(),
      })),
      userId: z.number(),
    }))
    .mutation(async ({ input, ctx }) => {
      const { title, instructions, questions, userId } = input;
      return await ctx.prisma.quiz.create({
        data: {
          title,
          instructions,
          questions: {
            create: questions,
          },
          userId,
        },
      });
    }),
});
