import { Request, Response } from "express";
import { veterinarioService } from "../services/veterinarioService";
import { veterinarioCreateSchema, veterinarioUpdateSchema } from "../schemas/veterinario.schema";
import { ZodError } from "zod";

export const veterinarioController = {
  /**
   * @swagger
   * /veterinarios:
   *   get:
   *     summary: Lista todos os veterinários
   *     tags: [Veterinarios]
   *     responses:
   *       200:
   *         description: Lista de veterinários retornada com sucesso
   */
  getAll: async (req: Request, res: Response) => {
    try {
      const veterinarios = await veterinarioService.getAll();
      res.json(veterinarios);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  /**
   * @swagger
   * /veterinarios/{id}:
   *   get:
   *     summary: Retorna um veterinário por ID
   *     tags: [Veterinarios]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Veterinário encontrado
   *       404:
   *         description: Veterinário não encontrado
   */
  getById: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const veterinario = await veterinarioService.getById(id);
      res.json(veterinario);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  },

  /**
   * @swagger
   * /veterinarios:
   *   post:
   *     summary: Cadastra um novo veterinário
   *     tags: [Veterinarios]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/VeterinarioCreate'
   *     responses:
   *       201:
   *         description: Veterinário criado com sucesso
   *       400:
   *         description: Dados inválidos
   */
  create: async (req: Request, res: Response) => {
    try {
      const parsed = veterinarioCreateSchema.parse(req.body);
      const veterinario = await veterinarioService.create(parsed);
      res.status(201).json(veterinario);
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
   * /veterinarios/{id}:
   *   put:
   *     summary: Atualiza um veterinário
   *     tags: [Veterinarios]
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
   *             $ref: '#/components/schemas/VeterinarioUpdate'
   *     responses:
   *       200:
   *         description: Veterinário atualizado com sucesso
   *       400:
   *         description: Dados inválidos
   *       404:
   *         description: Veterinário não encontrado
   */
  update: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const parsed = veterinarioUpdateSchema.parse(req.body);
      const updated = await veterinarioService.update(id, parsed);
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
   * /veterinarios/{id}:
   *   delete:
   *     summary: Remove um veterinário
   *     tags: [Veterinarios]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Veterinário removido com sucesso
   *       404:
   *         description: Veterinário não encontrado
   */
  remove: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const result = await veterinarioService.remove(id);
      res.json(result);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  },
};
