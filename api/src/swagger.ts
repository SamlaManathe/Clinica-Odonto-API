import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Clínica Veterinária",
      version: "1.0.0",
      description:
        "Documentação da API de consultas, veterinários, animais e secretários",
    },
    components: {
      schemas: {
        // =================== Secretário ===================
        Secretario: {
          type: "object",
          properties: {
            id: { type: "integer", example: 1 },
            nome: { type: "string", example: "Maria Silva" },
            email: { type: "string", format: "email", example: "maria@ex.com" },
            senha: { type: "string", example: "••••••••" },
            telefone: { type: "string", example: "11999999999" },
            cargo: { type: "string", example: "Recepção" },
            ativo: { type: "boolean", example: true },
            createdAt: { type: "string", format: "date-time", example: "2025-11-13T10:00:00.000Z" },
            updatedAt: { type: "string", format: "date-time", example: "2025-11-13T10:00:00.000Z" },
          },
        },
        SecretarioCreate: {
          type: "object",
          required: ["nome", "email", "senha"],
          properties: {
            nome: { type: "string" },
            email: { type: "string", format: "email" },
            senha: { type: "string" },
            telefone: { type: "string" },
            cargo: { type: "string" },
            ativo: { type: "boolean" },
          },
        },
        SecretarioUpdate: {
          type: "object",
          properties: {
            nome: { type: "string" },
            email: { type: "string", format: "email" },
            senha: { type: "string" },
            telefone: { type: "string" },
            cargo: { type: "string" },
            ativo: { type: "boolean" },
          },
        },

        // =================== Veterinário ===================
        Veterinario: {
          type: "object",
          properties: {
            id: { type: "integer", example: 1 },
            nome: { type: "string", example: "Dr. João" },
            email: { type: "string", format: "email", example: "joao@ex.com" },
            crmv: { type: "string", example: "CRMV-12345" },
            especialidade: { type: "string", example: "Cirurgia" },
            telefone: { type: "string", example: "11988887777" },
            descricao: { type: "string", example: "Veterinário com 10 anos de experiência" },
            ativo: { type: "boolean", example: true },
            createdAt: { type: "string", format: "date-time", example: "2025-11-13T10:00:00.000Z" },
            updatedAt: { type: "string", format: "date-time", example: "2025-11-13T10:00:00.000Z" },
          },
        },
        VeterinarioCreate: {
          type: "object",
          required: ["nome", "email", "crmv", "especialidade"],
          properties: {
            nome: { type: "string" },
            email: { type: "string", format: "email" },
            crmv: { type: "string" },
            especialidade: { type: "string" },
            telefone: { type: "string" },
            descricao: { type: "string" },
            ativo: { type: "boolean" },
          },
        },
        VeterinarioUpdate: {
          type: "object",
          properties: {
            nome: { type: "string" },
            email: { type: "string", format: "email" },
            crmv: { type: "string" },
            especialidade: { type: "string" },
            telefone: { type: "string" },
            descricao: { type: "string" },
            ativo: { type: "boolean" },
          },
        },

        // =================== Animal ===================
        Animal: {
          type: "object",
          properties: {
            id: { type: "integer", example: 1 },
            nome: { type: "string", example: "Rex" },
            especie: { type: "string", example: "Cão" },
            raca: { type: "string", example: "Labrador" },
            sexo: { type: "string", example: "M" },
            idade: { type: "integer", example: 3 },
            dataNascimento: { type: "string", format: "date", example: "2022-05-12" },
            peso: { type: "number", format: "float", example: 12.5 },
            responsavelNome: { type: "string", example: "Carlos" },
            responsavelEmail: { type: "string", format: "email", example: "carlos@ex.com" },
            responsavelTelefone: { type: "string", example: "11977776666" },
            observacoes: { type: "string", example: "Alergia a pulgas" },
            createdAt: { type: "string", format: "date-time", example: "2025-11-13T10:00:00.000Z" },
            updatedAt: { type: "string", format: "date-time", example: "2025-11-13T10:00:00.000Z" },
          },
        },
        AnimalCreate: {
          type: "object",
          required: ["nome", "especie", "responsavelNome"],
          properties: {
            nome: { type: "string" },
            especie: { type: "string" },
            raca: { type: "string" },
            sexo: { type: "string" },
            idade: { type: "integer" },
            dataNascimento: { type: "string", format: "date" },
            peso: { type: "number", format: "float" },
            responsavelNome: { type: "string" },
            responsavelEmail: { type: "string", format: "email" },
            responsavelTelefone: { type: "string" },
            observacoes: { type: "string" },
          },
        },
        AnimalUpdate: {
          type: "object",
          properties: {
            nome: { type: "string" },
            especie: { type: "string" },
            raca: { type: "string" },
            sexo: { type: "string" },
            idade: { type: "integer" },
            dataNascimento: { type: "string", format: "date" },
            peso: { type: "number", format: "float" },
            responsavelNome: { type: "string" },
            responsavelEmail: { type: "string", format: "email" },
            responsavelTelefone: { type: "string" },
            observacoes: { type: "string" },
          },
        },

        // =================== Consulta ===================
        Consulta: {
          type: "object",
          properties: {
            id: { type: "integer", example: 1 },
            dataHora: { type: "string", format: "date-time", example: "2025-11-20T14:30:00.000Z" },
            motivo: { type: "string", example: "Vacina" },
            status: { type: "string", example: "Agendada" },
            anotacoes: { type: "string", example: "Trazer cartão vacinal" },
            valor: { type: "number", format: "float", example: 120.5 },
            AnimalId: { type: "integer", example: 1 },
            VeterinarioId: { type: "integer", example: 1 },
            createdAt: { type: "string", format: "date-time", example: "2025-11-13T10:00:00.000Z" },
            updatedAt: { type: "string", format: "date-time", example: "2025-11-13T10:00:00.000Z" },
          },
        },
        ConsultaCreate: {
          type: "object",
          required: ["dataHora", "animalId", "veterinarioId"],
          properties: {
            dataHora: { type: "string", format: "date-time" },
            motivo: { type: "string" },
            status: { type: "string" },
            anotacoes: { type: "string" },
            valor: { type: "number", format: "float" },
            AnimalId: { type: "integer" },
            VeterinarioId: { type: "integer" },
          },
        },
        ConsultaUpdate: {
          type: "object",
          properties: {
            dataHora: { type: "string", format: "date-time" },
            motivo: { type: "string" },
            status: { type: "string" },
            anotacoes: { type: "string" },
            valor: { type: "number", format: "float" },
            AnimalId: { type: "integer" },
            VeterinarioId: { type: "integer" },
          },
        },
      },
    },
  },
  apis: ["./src/controllers/*.ts"],
};

export const specs = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
