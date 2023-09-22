import { z } from 'zod';

export const clientDetailsScheema = z.object({
  name: z.string().min(1, 'Campo obrigatório'),
  cpf: z.string().optional().default(''),
  bday: z.string().optional().default(''),
  email: z.string().email('Email inválido').optional().default(''),
});

export type ClientDetailsScheema = z.infer<typeof clientDetailsScheema>;
