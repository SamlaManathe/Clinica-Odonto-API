import { Request, Response } from "express";
import { secretarioService } from "../services/secretarioService";
import { secretarioCreateSchema, secretarioUpdateSchema } from "../schemas/secretario.schema";
import { ZodError } from "zod";

export const secretarioController = {
  /**
   * @swagger
   * /secretarios:
   *   get:
   *     summary: Lista todos os secretários
   *     tags: [Secretarios]
   *     responses:
   *       200:
   *         description: Lista de secretários retornada com sucesso
   */
  getAll: async (req: Request, res: Response) => {
    try {
      const secretarios = await secretarioService.getAll();
      res.json(secretarios);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  /**
   * @swagger
   * /secretarios/{id}:
   *   get:
   *     summary: Retorna um secretário por ID
   *     tags: [Secretarios]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Secretário encontrado
   *       404:
   *         description: Secretário não encontrado
   */
  getById: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const secretario = await secretarioService.getById(id);
      res.json(secretario);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  },

  /**
   * @swagger
   * /secretarios:
   *   post:
   *     summary: Cadastra um novo secretário
   *     tags: [Secretarios]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/SecretarioCreate'
   *     responses:
   *       201:
   *         description: Secretário criado com sucesso
   *       400:
   *         description: Dados inválidos
   */
  create: async (req: Request, res: Response) => {
    try {
      const parsed = secretarioCreateSchema.parse(req.body);
      const secretario = await secretarioService.create(parsed);
      res.status(201).json(secretario);
    } catch (error: any) {
      if (error instanceof ZodError) {
        res.status(400).json({ errors: error.flatten().fieldErrors });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  },

  /**
   * @swagger
   * /secretarios/{id}:
   *   put:
   *     summary: Atualiza um secretário
   *     tags: [Secretarios]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/SecretarioUpdate'
   *     responses:
   *       200:
   *         description: Secretário atualizado com sucesso
   *       400:
   *         description: Dados inválidos
   *       404:
   *         description: Secretário não encontrado
   */
  update: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const parsed = secretarioUpdateSchema.parse(req.body);
      const updated = await secretarioService.update(id, parsed);
      res.json(updated);
    } catch (error: any) {
      if (error instanceof ZodError) {
        res.status(400).json({ errors: error.flatten().fieldErrors });
      } else {
        res.status(404).json({ error: error.message });
      }
    }
  },

  /**
   * @swagger
   * /secretarios/{id}:
   *   delete:
   *     summary: Remove um secretário
   *     tags: [Secretarios]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Secretário removido com sucesso
   *       404:
   *         description: Secretário não encontrado
   */
  remove: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const result = await secretarioService.remove(id);
      res.json(result);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  },

  /**
   * @swagger
   * /secretarios/login:
   *   post:
   *     summary: Realiza login do secretário
   *     tags: [Secretarios]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email:
   *                 type: string
   *               senha:
   *                 type: string
   *     responses:
   *       200:
   *         description: Login realizado com sucesso
   *       401:
   *         description: Credenciais inválidas
   */
  login: async (req: Request, res: Response) => {
    try {
      const { email, senha } = req.body;
      if (!email || !senha) {
        return res.status(400).json({ message: "Email e senha são obrigatórios." });
      }

      const secretario = await secretarioService.login(email, senha);
      res.status(200).json({
        message: `Bem-vindo(a), ${secretario.nome}!`,
        secretario,
      });
    } catch (error: any) {
      if (error.message === "Email não encontrado" || error.message === "Senha incorreta") {
        return res.status(401).json({ message: error.message });
      }
      console.error("Erro no login:", error);
      res.status(500).json({ message: "Erro interno no servidor." });
    }
  },
};
