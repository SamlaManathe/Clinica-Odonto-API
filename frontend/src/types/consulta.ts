// src/types/consulta.ts
export interface Consulta {
  id: number;
  dataHora: string; // ISO string
  motivo?: string | null;
  status: "Agendada" | "Concluída" | "Cancelada" | "Em andamento";
  anotacoes?: string | null;
  valor?: number | null;
  AnimalId: number;
  VeterinarioId: number;
  Animal?: {
    id: number;
    nome: string;
    especie?: string | null;
    responsavelNome?: string | null;
    responsavelEmail?: string | null;
  };
  Veterinario?: {
    id: number;
    nome: string;
    especialidade?: string | null;
    crmv?: string | null;
  };
  createdAt?: string;
  updatedAt?: string;
}
