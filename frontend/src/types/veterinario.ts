export interface Veterinario {
  id: number;
  nome: string;
  email: string;
  crmv: string;
  especialidade: string;
  telefone?: string;
  descricao?: string;
  ativo: boolean;
  createdAt: string;
  updatedAt: string;
}
