import { z } from 'zod';

export const newClientScheema = z.object({
  name: z.string().min(1, 'Campo obrigatório'),
  cpf: z.string().min(1, 'Campo obrigatório'),
  bday: z.string().min(1, 'Campo obrigatório'),
  email: z.string().email('Email inválido').min(1, 'Campo obrigatório'),
});

export type NewClientScheema = z.infer<typeof newClientScheema>;
