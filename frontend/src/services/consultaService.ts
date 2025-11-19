import axios from "axios";
import type { Consulta } from "../types/consulta";

const API_BASE = "http://localhost:3000";

export const getConsultas = async (): Promise<Consulta[]> => {
  const res = await axios.get<Consulta[]>(`${API_BASE}/consultas`);
  return res.data;
};

export const createConsulta = async (dados: Omit<Consulta, "id" | "createdAt" | "updatedAt">): Promise<Consulta> => {
  const res = await axios.post<Consulta>(`${API_BASE}/consultas`, dados);
  return res.data;
};

export const updateConsulta = async (id: number, dados: Partial<Consulta>): Promise<Consulta> => {
  const res = await axios.put<Consulta>(`${API_BASE}/consultas/${id}`, dados);
  return res.data;
};

export const deleteConsulta = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE}/consultas/${id}`);
};

export default {
  getConsultas,
  createConsulta,
  updateConsulta,
  deleteConsulta,
};
