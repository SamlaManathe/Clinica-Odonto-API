import { PrismaClient } from "../generated/prisma";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const secretarioService = {
  async getAll() {
    // não trazer a senha no list
    return prisma.secretario.findMany({
      select: {
        id: true,
        nome: true,
        email: true,
        telefone: true,
        cargo: true,
        ativo: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { nome: "asc" },
    });
  },

  async getById(id: number) {
    const secretario = await prisma.secretario.findUnique({
      where: { id },
      select: {
        id: true,
        nome: true,
        email: true,
        telefone: true,
        cargo: true,
        ativo: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (!secretario) throw new Error("Secretário não encontrado");
    return secretario;
  },

  async create(data: { nome: string; email: string; senha: string; telefone?: string; cargo?: string; ativo?: boolean }) {
    const emailExists = await prisma.secretario.findUnique({ where: { email: data.email } });
    if (emailExists) throw new Error("Email já cadastrado");

    const hashedPassword = await bcrypt.hash(data.senha, 10);

    const secretario = await prisma.secretario.create({
      data: {
        nome: data.nome,
        email: data.email,
        senha: hashedPassword,
        telefone: data.telefone,
        cargo: data.cargo,
        ativo: data.ativo ?? true,
      },
      select: {
        id: true,
        nome: true,
        email: true,
        telefone: true,
        cargo: true,
        ativo: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return secretario;
  },

  async update(
    id: number,
    data: { nome?: string; email?: string; senha?: string; telefone?: string; cargo?: string; ativo?: boolean }
  ) {
    const secretario = await prisma.secretario.findUnique({ where: { id } });
    if (!secretario) throw new Error("Secretário não encontrado");

    if (data.email) {
      const emailExists = await prisma.secretario.findUnique({ where: { email: data.email } });
      if (emailExists && emailExists.id !== id) throw new Error("Email já cadastrado");
    }

    const updatedData: any = { ...data }; // prisma typing convenience
    if (data.senha) {
      updatedData.senha = await bcrypt.hash(data.senha, 10);
    }

    const updated = await prisma.secretario.update({
      where: { id },
      data: {
        nome: updatedData.nome,
        email: updatedData.email,
        senha: updatedData.senha,
        telefone: updatedData.telefone,
        cargo: updatedData.cargo,
        ativo: updatedData.ativo,
      },
      select: {
        id: true,
        nome: true,
        email: true,
        telefone: true,
        cargo: true,
        ativo: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return updated;
  },

  async remove(id: number) {
    const secretario = await prisma.secretario.findUnique({ where: { id } });
    if (!secretario) throw new Error("Secretário não encontrado");

    await prisma.secretario.delete({ where: { id } });
    return { message: "Secretário excluído com sucesso" };
  },

  async login(email: string, senha: string) {
    const secretario = await prisma.secretario.findUnique({
      where: { email },
      select: {
        id: true,
        nome: true,
        email: true,
        senha: true,
        telefone: true,
        cargo: true,
        ativo: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!secretario) throw new Error("Email não encontrado");

    const senhaValida = await bcrypt.compare(senha, secretario.senha);
    if (!senhaValida) throw new Error("Senha incorreta");

    // remove senha antes de retornar
    // @ts-ignore
    const { senha: _s, ...dadosSemSenha } = secretario;
    return dadosSemSenha;
  },
};
