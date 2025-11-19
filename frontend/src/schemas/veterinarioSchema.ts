import { z } from "zod";

export const createVeterinarioSchema = z.object({
  nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  crmv: z.string().min(3, "CRMv inválido"),
  especialidade: z.string().min(3, "Especialidade inválida"),
  telefone: z.string().optional().or(z.literal("")),
  descricao: z.string().optional(),
});

export const updateVeterinarioSchema = createVeterinarioSchema.extend({
  id: z.number(),
});

export type CreateVeterinarioInput = z.infer<typeof createVeterinarioSchema>;
export type UpdateVeterinarioInput = z.infer<typeof updateVeterinarioSchema>;
