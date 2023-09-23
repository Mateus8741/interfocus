export interface ClientDTO {
  name: string;
  cpf: string;
  email: string;
  debt: number;
  bday: string;
  status: 'paid' | 'pending';
  id: string;
}
