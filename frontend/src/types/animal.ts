export interface Animal {
  id: number;
  nome: string;
  especie: string;
  raca?: string;
  sexo?: string;
  idade?: number;
  dataNascimento?: string;
  peso?: number;
  responsavelNome: string;
  responsavelEmail?: string;
  responsavelTelefone?: string;
  observacoes?: string;
  createdAt?: string;
  updatedAt?: string;
}
