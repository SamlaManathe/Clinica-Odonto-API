import { z } from "zod";

export const createSecretarioSchema = z.object({
  nome: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(255, "Nome não pode ter mais de 255 caracteres"),

  email: z.string().email("Email inválido"),

  senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),

  telefone: z
    .string()
    .regex(/^\d{10,11}$/, "Telefone deve conter 10 ou 11 dígitos")
    .optional()
    .or(z.literal("")),

  cargo: z.string().optional(),

  ativo: z.boolean().default(true),
});

export const updateSecretarioSchema = createSecretarioSchema.extend({
  id: z.number(),
});

export type CreateSecretarioInput = z.infer<typeof createSecretarioSchema>;
export type UpdateSecretarioInput = z.infer<typeof updateSecretarioSchema>;
