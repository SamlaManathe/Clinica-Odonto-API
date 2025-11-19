import { z } from "zod";
import { createAnimalSchema, updateAnimalSchema } from "./animalSchema";
import { createVeterinarioSchema, updateVeterinarioSchema } from "./veterinarioSchema";
import { createSecretarioSchema, updateSecretarioSchema } from "./secretarioSchema";
import { createConsultaSchema, updateConsultaSchema } from "./consultaSchema";

export const validateCreateAnimal = (data: unknown) => {
  try {
    const validatedData = createAnimalSchema.parse(data);
    return { success: true as const, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      for (const issue of error.issues) {
        const key = String(issue.path[0]);
        errors[key] = issue.message;
      }
      return { success: false as const, errors };
    }
    throw error;
  }
};

export const validateUpdateAnimal = (data: unknown) => {
  try {
    const validatedData = updateAnimalSchema.parse(data);
    return { success: true as const, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      for (const issue of error.issues) {
        const key = String(issue.path[0]);
        errors[key] = issue.message;
      }
      return { success: false as const, errors };
    }
    throw error;
  }
};

export const validateCreateVeterinario = (data: unknown) => {
  try {
    const validatedData = createVeterinarioSchema.parse(data);
    return { success: true as const, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      for (const issue of error.issues) {
        const key = String(issue.path[0]);
        errors[key] = issue.message;
      }
      return { success: false as const, errors };
    }
    throw error;
  }
};

export const validateUpdateVeterinario = (data: unknown) => {
  try {
    const validatedData = updateVeterinarioSchema.parse(data);
    return { success: true as const, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      for (const issue of error.issues) {
        const key = String(issue.path[0]);
        errors[key] = issue.message;
      }
      return { success: false as const, errors };
    }
    throw error;
  }
};

export const validateCreateSecretario = (data: unknown) => {
  try {
    const validatedData = createSecretarioSchema.parse(data);
    return { success: true as const, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      for (const issue of error.issues) {
        const key = String(issue.path[0]);
        errors[key] = issue.message;
      }
      return { success: false as const, errors };
    }
    throw error;
  }
};

export const validateUpdateSecretario = (data: unknown) => {
  try {
    const validatedData = updateSecretarioSchema.parse(data);
    return { success: true as const, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      for (const issue of error.issues) {
        const key = String(issue.path[0]);
        errors[key] = issue.message;
      }
      return { success: false as const, errors };
    }
    throw error;
  }
};

export const validateCreateConsulta = (data: unknown) => {
  try {
    const validatedData = createConsultaSchema.parse(data);
    return { success: true as const, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      for (const issue of error.issues) {
        const key = String(issue.path[0]);
        errors[key] = issue.message;
      }
      return { success: false as const, errors };
    }
    throw error;
  }
};

export const validateUpdateConsulta = (data: unknown) => {
  try {
    const validatedData = updateConsultaSchema.parse(data);
    return { success: true as const, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      for (const issue of error.issues) {
        const key = String(issue.path[0]);
        errors[key] = issue.message;
      }
      return { success: false as const, errors };
    }
    throw error;
  }
};

export const validateField = (schema: z.ZodTypeAny, field: string, value: unknown): string | "" => {
  try {

    const picked = z.object({ [field]: (schema as any)._def.shape()[field] || z.any() });
    picked.parse({ [field]: value });
    return "";
  } catch (err) {
    if (err instanceof z.ZodError && err.issues && err.issues[0]) {
      return err.issues[0].message;
    }
    return "Valor inválido";
  }
};