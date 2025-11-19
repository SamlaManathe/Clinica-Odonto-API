import { Request, Response } from "express";
import { consultaService } from "../services/consultaService";
import { consultaCreateSchema, consultaUpdateSchema } from "../schemas/consulta.schema";
import { ZodError } from "zod";

export const consultaController = {
  /**
   * @swagger
   * /consultas:
   *   get:
   *     summary: Lista todas as consultas
   *     tags: [Consultas]
   *     responses:
   *       200:
   *         description: Lista de consultas retornada com sucesso
   */
  getAll: async (req: Request, res: Response) => {
    try {
      const consultas = await consultaService.getAll();
      res.json(consultas);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  /**
   * @swagger
   * /consultas/{id}:
   *   get:
   *     summary: Retorna uma consulta por ID
   *     tags: [Consultas]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Consulta encontrada
   *       404:
   *         description: Consulta não encontrada
   */
  getById: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const consulta = await consultaService.getById(id);
      res.json(consulta);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  },

  /**
   * @swagger
   * /consultas:
   *   post:
   *     summary: Cria uma nova consulta
   *     tags: [Consultas]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/ConsultaCreate'
   *     responses:
   *       201:
   *         description: Consulta criada com sucesso
   *       400:
   *         description: Dados inválidos
   */
  create: async (req: Request, res: Response) => {
  try {
    const parsed = consultaCreateSchema.parse(req.body);

    const consulta = await consultaService.create({
      ...parsed,
      dataHora: parsed.dataHora ? new Date(parsed.dataHora) : new Date(), // garante um Date válido
    });

    res.status(201).json(consulta);
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
   * /consultas/{id}:
   *   put:
   *     summary: Atualiza uma consulta
   *     tags: [Consultas]
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
   *             $ref: '#/components/schemas/ConsultaUpdate'
   *     responses:
   *       200:
   *         description: Consulta atualizada com sucesso
   *       400:
   *         description: Dados inválidos
   *       404:
   *         description: Consulta não encontrada
   */
  update: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const parsed = consultaUpdateSchema.parse(req.body);
      const updated = await consultaService.update(id, parsed);
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
   * /consultas/{id}:
   *   delete:
   *     summary: Remove uma consulta
   *     tags: [Consultas]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Consulta removida com sucesso
   *       404:
   *         description: Consulta não encontrada
   */
  remove: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const result = await consultaService.remove(id);
      res.json(result);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  },
};
