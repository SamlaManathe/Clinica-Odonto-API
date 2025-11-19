import { z } from "zod";

export const statusOptions = [
  "Agendada",
  "Concluída",
  "Cancelada",
  "Em andamento",
] as const;

export const createConsultaSchema = z.object({
  dataHora: z.string().min(1, "Data e hora são obrigatórias"),
  motivo: z.string().optional(),
  valor: z.string().optional(),

  status: z.enum(statusOptions).default("Agendada"),

  AnimalId: z
    .number({ message: "Animal é obrigatório" })
    .int()
    .positive("Selecione um animal válido"),

  VeterinarioId: z
    .number({ message: "Veterinário é obrigatório" })
    .int()
    .positive("Selecione um veterinário válido"),
});

export const updateConsultaSchema = createConsultaSchema.extend({
  id: z.number().int().positive(),
});
