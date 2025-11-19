import { z } from "zod";

export const animalCreateSchema = z.object({
  nome: z.string().min(1, "O nome é obrigatório."),
  especie: z.string().min(1, "A espécie é obrigatória."),
  raca: z.string().optional(),
  sexo: z.string().optional(),
  idade: z.number().int().positive("A idade deve ser um número positivo.").optional(),

  dataNascimento: z
    .union([z.string(), z.date()])
    .optional()
    .transform((val) =>
      typeof val === "string" ? new Date(`${val}T00:00:00.000Z`) : val
    ),

  peso: z.number().positive("O peso deve ser um número positivo.").optional(),
  responsavelNome: z.string().min(1, "O nome do responsável é obrigatório."),
  responsavelEmail: z.string().email("E-mail inválido.").optional(),
  responsavelTelefone: z.string().optional(),
  observacoes: z.string().optional(),
});

export const animalUpdateSchema = animalCreateSchema.partial();
