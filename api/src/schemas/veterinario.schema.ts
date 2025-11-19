import { z } from "zod";

export const veterinarioCreateSchema = z.object({
  nome: z.string().min(1),
  email: z.string().email(),
  crmv: z.string().min(1),
  especialidade: z.string().min(1),
  telefone: z.string().optional(),
  descricao: z.string().optional(),
  ativo: z.boolean().optional(),
});

export const veterinarioUpdateSchema = veterinarioCreateSchema.partial();
