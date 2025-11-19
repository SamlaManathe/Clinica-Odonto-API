import axios from "axios";
import type { Secretario } from "../types/secretario";

const API_BASE = "http://localhost:3000";

export const getSecretarios = async (): Promise<Secretario[]> => {
  const res = await axios.get<Secretario[]>(`${API_BASE}/secretarios`);
  return res.data;
};

export const createSecretario = async (
  dados: Omit<Secretario, "id">
): Promise<Secretario> => {
  const res = await axios.post<Secretario>(`${API_BASE}/secretarios`, dados);
  return res.data;
};

export const updateSecretario = async (
  id: number,
  dados: Secretario
): Promise<Secretario> => {
  const res = await axios.put<Secretario>(
    `${API_BASE}/secretarios/${id}`,
    dados
  );
  return res.data;
};

export const deleteSecretario = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE}/secretarios/${id}`);
};

export default {
  getSecretarios,
  createSecretario,
  updateSecretario,
  deleteSecretario,
};
