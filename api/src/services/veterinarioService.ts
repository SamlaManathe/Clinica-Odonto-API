import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

export const veterinarioService = {
  async getAll() {
    return prisma.veterinario.findMany({
      include: { consultas: true },
      orderBy: { nome: "asc" },
    });
  },

  async getById(id: number) {
    const veterinario = await prisma.veterinario.findUnique({
      where: { id },
      include: { consultas: true },
    });
    if (!veterinario) throw new Error("Veterinário não encontrado");
    return veterinario;
  },

  async create(data: {
    nome: string;
    email: string;
    crmv: string;
    especialidade: string;
    telefone?: string;
    descricao?: string;
    ativo?: boolean;
  }) {
    return prisma.veterinario.create({ data });
  },

  async update(
    id: number,
    data: Partial<{
      nome: string;
      email: string;
      crmv: string;
      especialidade: string;
      telefone?: string;
      descricao?: string;
      ativo?: boolean;
    }>
  ) {
    const veterinario = await prisma.veterinario.findUnique({ where: { id } });
    if (!veterinario) throw new Error("Veterinário não encontrado");

    return prisma.veterinario.update({
      where: { id },
      data,
    });
  },

  async remove(id: number) {
    const veterinario = await prisma.veterinario.findUnique({ where: { id } });
    if (!veterinario) throw new Error("Veterinário não encontrado");

    await prisma.veterinario.delete({ where: { id } });
    return { message: "Veterinário removido com sucesso" };
  },
};
