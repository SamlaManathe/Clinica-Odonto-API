import axios from "axios";
import type { Veterinario } from "../types/veterinario";

const API_URL = "http://localhost:3000";

export const getVeterinarios = async (): Promise<Veterinario[]> => {
  const response = await axios.get(`${API_URL}/veterinarios`);
  return response.data;
};

export const createVeterinario = async (dados: Omit<Veterinario, "id" | "ativo" | "createdAt" | "updatedAt">): Promise<Veterinario> => {
  const response = await axios.post(`${API_URL}/veterinarios`, dados);
  return response.data;
};

export const updateVeterinario = async (id: number, dados: Partial<Veterinario>): Promise<Veterinario> => {
  const response = await axios.put(`${API_URL}/veterinarios/${id}`, dados);
  return response.data;
};

export const deleteVeterinario = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/veterinarios/${id}`);
};
