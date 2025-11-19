import React, { useState, useEffect } from "react";
import type { Veterinario } from "../../types/veterinario";
import { updateVeterinario } from "../../services/veterinarioService";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
} from "@mui/material";

interface EditarVeterinarioModalProps {
  open: boolean;
  veterinario: Veterinario | null;
  onClose: () => void;
  onSave: (veterinarioAtualizado: Veterinario) => void;
}

const EditarVeterinarioModal: React.FC<EditarVeterinarioModalProps> = ({ open, veterinario, onClose, onSave }) => {
  const [formData, setFormData] = useState<Veterinario | null>(veterinario);
  const [salvando, setSalvando] = useState(false);

  useEffect(() => {
    if (veterinario && open) setFormData(veterinario);
  }, [veterinario, open]);

  if (!formData) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => prev ? { ...prev, [name]: value } : null);
  };

  const handleSave = async () => {
    setSalvando(true);
    try {
      await updateVeterinario(formData.id, formData);
      onSave(formData);
      onClose();
    } catch (error) {
      console.error("Erro ao salvar veterinário:", error);
      alert("Erro ao salvar veterinário. Tente novamente.");
    } finally {
      setSalvando(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Editar Veterinário</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          <TextField fullWidth label="Nome" name="nome" value={formData.nome} onChange={handleInputChange} />
          <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleInputChange} />
          <TextField fullWidth label="CRMV" name="crmv" value={formData.crmv} onChange={handleInputChange} />
          <TextField fullWidth label="Especialidade" name="especialidade" value={formData.especialidade} onChange={handleInputChange} />
          <TextField fullWidth label="Telefone" name="telefone" value={formData.telefone || ""} onChange={handleInputChange} />
          <TextField fullWidth label="Descrição" name="descricao" value={formData.descricao || ""} onChange={handleInputChange} />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit">Cancelar</Button>
        <Button onClick={handleSave} variant="contained" color="primary" disabled={salvando}>
          {salvando ? "Salvando..." : "Salvar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditarVeterinarioModal;
