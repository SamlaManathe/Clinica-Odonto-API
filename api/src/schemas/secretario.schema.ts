import { z } from "zod";

export const secretarioCreateSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  senha: z.string().min(6, "Senha deve ter ao menos 6 caracteres"),
  telefone: z.string().optional(),
  cargo: z.string().optional(),
  ativo: z.boolean().optional(),
});

export const secretarioUpdateSchema = z.object({
  nome: z.string().optional(),
  email: z.string().email().optional(),
  senha: z.string().min(6).optional(),
  telefone: z.string().optional(),
  cargo: z.string().optional(),
  ativo: z.boolean().optional(),
});
