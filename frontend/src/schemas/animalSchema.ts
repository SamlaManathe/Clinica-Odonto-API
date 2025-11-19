import { z } from "zod";

export const createAnimalSchema = z.object({
  nome: z.string().min(1),
  especie: z.string().min(1),
  raca: z.string().optional(),
  sexo: z.string().optional(),
  idade: z.number().int().positive().optional(),
  dataNascimento: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Data deve estar no formato YYYY-MM-DD").optional(),
  peso: z.number().positive().optional(),
  responsavelNome: z.string().min(1),
  responsavelEmail: z.string().email().optional(),
  responsavelTelefone: z.string().optional(),
  observacoes: z.string().optional(),
});

export const updateAnimalSchema = createAnimalSchema.extend({
  id: z.number(),
});

export type CreateAnimalInput = z.infer<typeof createAnimalSchema>;
export type UpdateAnimalInput = z.infer<typeof updateAnimalSchema>;
