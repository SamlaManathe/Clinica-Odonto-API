import React, { useState, useEffect } from "react";
import type { Animal } from "../../types/animal";
import { updateAnimal } from "../../services/animalService";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
} from "@mui/material";

interface EditarAnimalModalProps {
  open: boolean;
  animal: Animal | null;
  onClose: () => void;
  onSave: (animalAtualizado: Animal) => void;
}

const EditarAnimalModal: React.FC<EditarAnimalModalProps> = ({ open, animal, onClose, onSave }) => {
  const [formData, setFormData] = useState<Animal>(
    animal || {
      id: 0,
      nome: "",
      especie: "",
      raca: "",
      sexo: "",
      idade: undefined,
      dataNascimento: "",
      peso: undefined,
      responsavelNome: "",
      responsavelEmail: "",
      responsavelTelefone: "",
      observacoes: "",
    }
  );

  const [salvando, setSalvando] = useState(false);

  useEffect(() => {
    if (animal && open) {
      setFormData({
        ...animal,
        dataNascimento: animal.dataNascimento?.split("T")[0] || "",
      });
    }
  }, [animal, open]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setSalvando(true);
    try {
      await updateAnimal(formData.id, formData);
      onSave(formData);
      onClose();
    } catch (error) {
      console.error("Erro ao salvar animal:", error);
      alert("Erro ao salvar animal. Tente novamente.");
    } finally {
      setSalvando(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 600, fontSize: "1.25rem" }}>Editar Animal</DialogTitle>

      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          <TextField fullWidth label="Nome" name="nome" value={formData.nome} onChange={handleInputChange} />
          <TextField fullWidth label="Espécie" name="especie" value={formData.especie} onChange={handleInputChange} />
          <TextField fullWidth label="Raça" name="raca" value={formData.raca} onChange={handleInputChange} />
          <TextField fullWidth label="Sexo" name="sexo" value={formData.sexo} onChange={handleInputChange} />
          <TextField fullWidth label="Idade" name="idade" type="number" value={formData.idade || ""} onChange={handleInputChange} />
          <TextField fullWidth label="Data de Nascimento" name="dataNascimento" value={formData.dataNascimento} onChange={handleInputChange} placeholder="YYYY-MM-DD" />
          <TextField fullWidth label="Peso (kg)" name="peso" type="number" value={formData.peso || ""} onChange={handleInputChange} />
          <TextField fullWidth label="Responsável" name="responsavelNome" value={formData.responsavelNome} onChange={handleInputChange} />
          <TextField fullWidth label="Email do Responsável" name="responsavelEmail" value={formData.responsavelEmail} onChange={handleInputChange} />
          <TextField fullWidth label="Telefone do Responsável" name="responsavelTelefone" value={formData.responsavelTelefone} onChange={handleInputChange} />
          <TextField fullWidth label="Observações" name="observacoes" value={formData.observacoes} onChange={handleInputChange} />
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} color="inherit">Cancelar</Button>
        <Button onClick={handleSave} variant="contained" color="primary" disabled={salvando}>
          {salvando ? "Salvando..." : "Salvar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditarAnimalModal;
