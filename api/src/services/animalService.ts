import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

export const animalService = {
  async getAll() {
    return prisma.animal.findMany({
      include: { consultas: true },
      orderBy: { nome: "asc" },
    });
  },

  async getById(id: number) {
    const animal = await prisma.animal.findUnique({
      where: { id },
      include: { consultas: true },
    });
    if (!animal) throw new Error("Animal não encontrado");
    return animal;
  },

  async create(data: {
    nome: string;
    especie: string;
    raca?: string;
    sexo?: string;
    idade?: number;
    dataNascimento?: Date;
    peso?: number;
    responsavelNome: string;
    responsavelEmail?: string;
    responsavelTelefone?: string;
    observacoes?: string;
  }) {
    return prisma.animal.create({ data });
  },

  async update(
    id: number,
    data: Partial<{
      nome: string;
      especie: string;
      raca?: string;
      sexo?: string;
      idade?: number;
      dataNascimento?: Date;
      peso?: number;
      responsavelNome: string;
      responsavelEmail?: string;
      responsavelTelefone?: string;
      observacoes?: string;
    }>
  ) {
    const animal = await prisma.animal.findUnique({ where: { id } });
    if (!animal) throw new Error("Animal não encontrado");

    return prisma.animal.update({
      where: { id },
      data,
    });
  },

  async remove(id: number) {
    const animal = await prisma.animal.findUnique({ where: { id } });
    if (!animal) throw new Error("Animal não encontrado");

    await prisma.animal.delete({ where: { id } });
    return { message: "Animal removido com sucesso" };
  },
};
