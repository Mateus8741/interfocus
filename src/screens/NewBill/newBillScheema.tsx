import { z } from 'zod';

export const newBillScheema = z.object({
  bill: z.string().min(1, 'Campo obrigatório'),
  created: z.string().min(1, 'Campo obrigatório').default(''),
  value: z.string().min(1, 'Campo obrigatório').default(''),
  status: z.string().min(1, 'Campo obrigatório').default(''),
  payementDate: z.string().min(1, 'Campo obrigatório').default(''),
});

export type NewBillScheema = z.infer<typeof newBillScheema>;
