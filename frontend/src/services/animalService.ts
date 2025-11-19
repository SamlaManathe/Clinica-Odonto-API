import axios from "axios";
import type { Animal } from "../types/animal";

const API_BASE = "http://localhost:3000";

export const getAnimais = async (filtros?: {
  nome?: string;
  especie?: string;
  raca?: string;
  responsavel?: string;
}): Promise<Animal[]> => {
  const params = filtros ? filtros : {};
  const res = await axios.get<Animal[]>(`${API_BASE}/animais`, { params });
  return res.data;
};

export const deleteAnimal = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE}/animais/${id}`);
};

export const updateAnimal = async (id: number, dados: Animal): Promise<Animal> => {
  const res = await axios.put<Animal>(`${API_BASE}/animais/${id}`, dados);
  return res.data;
};

export const createAnimal = async (dados: Omit<Animal, "id">): Promise<Animal> => {
  const res = await axios.post<Animal>(`${API_BASE}/animais`, dados);
  return res.data;
};

export default {
  getAnimais,
  deleteAnimal,
  updateAnimal,
  createAnimal,
};

