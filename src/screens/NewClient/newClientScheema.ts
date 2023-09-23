import { z } from 'zod';

export const newClientScheema = z.object({
  name: z.string().min(1, 'Campo obrigatório'),
  cpf: z.string().min(1, 'Campo obrigatório').default(''),
  bday: z.string().min(1, 'Campo obrigatório').default(''),
  email: z
    .string()
    .email('Email inválido')
    .min(1, 'Campo obrigatório')
    .default(''),
});

export type NewClientScheema = z.infer<typeof newClientScheema>;
