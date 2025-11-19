import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

export const consultaService = {
  async getAll() {
    return prisma.consulta.findMany({
      include: {
        Animal: true,
        Veterinario: true,
      },
      orderBy: { dataHora: "desc" },
    });
  },

  async getById(id: number) {
    const consulta = await prisma.consulta.findUnique({
      where: { id },
      include: {
        Animal: true,
        Veterinario: true,
      },
    });
    if (!consulta) throw new Error("Consulta não encontrada");
    return consulta;
  },

  async create(data: {
    dataHora: Date;
    motivo?: string;
    status?: string;
    anotacoes?: string;
    valor?: number;
    AnimalId: number;
    VeterinarioId: number;
  }) {
    return prisma.consulta.create({
      data,
      include: { Animal: true, Veterinario: true },
    });
  },

  async update(
    id: number,
    data: Partial<{
      dataHora: Date;
      motivo?: string;
      status?: string;
      anotacoes?: string;
      valor?: number;
      AnimalId?: number;
      VeterinarioId?: number;
    }>
  ) {
    const consulta = await prisma.consulta.findUnique({ where: { id } });
    if (!consulta) throw new Error("Consulta não encontrada");

    return prisma.consulta.update({
      where: { id },
      data,
      include: { Animal: true, Veterinario: true },
    });
  },

  async remove(id: number) {
    const consulta = await prisma.consulta.findUnique({ where: { id } });
    if (!consulta) throw new Error("Consulta não encontrada");

    await prisma.consulta.delete({ where: { id } });
    return { message: "Consulta removida com sucesso" };
  },
};
