import { z } from 'zod';

export const clientDetailsScheema = z.object({
  name: z.string().min(1, 'Campo obrigatório'),
});

export type ClientDetailsScheema = z.infer<typeof clientDetailsScheema>;
