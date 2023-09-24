export interface Root {
  cliente: Cliente;
  dataPagamento: string;
  descricao: string;
  id: number;
  valor: number;
}

export interface Cliente {
  cpf: string;
  dataNascimento: string;
  email: string;
  idCliente: number;
  nome: string;
  retorno: any[];
}
