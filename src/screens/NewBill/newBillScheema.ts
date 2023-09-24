import { z } from 'zod';

export const newBillScheema = z.object({
  bill: z.string().min(1, 'Campo obrigatório'),
  created: z.string().min(1, 'Campo obrigatório'),
  value: z.string().min(1, 'Campo obrigatório'),
  status: z.string().min(1, 'Campo obrigatório'),
  payementDate: z.string().min(1, 'Campo obrigatório'),
});

export type NewBillScheema = z.infer<typeof newBillScheema>;
