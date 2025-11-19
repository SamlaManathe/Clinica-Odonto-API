import { z } from "zod";

export const consultaCreateSchema = z
  .object({
    dataHora: z
      .string()
      .transform((str) => new Date(str))
      .optional(),
    motivo: z.string().optional(),
    status: z.string().optional(),
    anotacoes: z.string().optional(),
    valor: z.number().optional(),
    AnimalId: z.number(),
    VeterinarioId: z.number(),
  })
  .refine(
    (data) => {
      // Se o status for "Agendada", dataHora precisa estar presente
      if (data.status === "Agendada") {
        return !!data.dataHora;
      }
      return true;
    },
    {
      message: "O campo dataHora é obrigatório quando o status é 'Agendada'.",
      path: ["dataHora"],
    }
  );

export const consultaUpdateSchema = consultaCreateSchema.partial();
