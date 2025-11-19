import { Request, Response } from "express";
import { animalService } from "../services/animalService";
import { animalCreateSchema, animalUpdateSchema } from "../schemas/animal.schema";
import { ZodError } from "zod";

export const animalController = {
  /**
   * @swagger
   * /animais:
   *   get:
   *     summary: Lista todos os animais
   *     tags: [Animais]
   *     responses:
   *       200:
   *         description: Lista de animais retornada com sucesso
   */
  getAll: async (req: Request, res: Response) => {
    try {
      const animais = await animalService.getAll();
      res.json(animais);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  /**
   * @swagger
   * /animais/{id}:
   *   get:
   *     summary: Retorna um animal por ID
   *     tags: [Animais]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Animal encontrado
   *       404:
   *         description: Animal não encontrado
   */
  getById: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const animal = await animalService.getById(id);
      res.json(animal);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  },

  /**
   * @swagger
   * /animais:
   *   post:
   *     summary: Cadastra um novo animal
   *     tags: [Animais]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/AnimalCreate'
   *     responses:
   *       201:
   *         description: Animal criado com sucesso
   *       400:
   *         description: Dados inválidos
   */
  create: async (req: Request, res: Response) => {
    try {
      const parsed = animalCreateSchema.parse(req.body);
      const animal = await animalService.create(parsed);
      res.status(201).json(animal);
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
   * /animais/{id}:
   *   put:
   *     summary: Atualiza um animal
   *     tags: [Animais]
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
   *             $ref: '#/components/schemas/AnimalUpdate'
   *     responses:
   *       200:
   *         description: Animal atualizado com sucesso
   *       400:
   *         description: Dados inválidos
   *       404:
   *         description: Animal não encontrado
   */
  update: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const parsed = animalUpdateSchema.parse(req.body);
      const updated = await animalService.update(id, parsed);
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
   * /animais/{id}:
   *   delete:
   *     summary: Remove um animal
   *     tags: [Animais]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Animal removido com sucesso
   *       404:
   *         description: Animal não encontrado
   */
  remove: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const result = await animalService.remove(id);
      res.json(result);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  },
};
