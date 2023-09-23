import { z } from 'zod';

export const newClientScheema = z.object({
  name: z.string().min(1, 'Campo obrigatório'),
  cpf: z.string().optional().default(''),
  bday: z.string().optional().default(''),
  email: z.string().email('Email inválido').optional().default(''),
});

export type NewClientScheema = z.infer<typeof newClientScheema>;
