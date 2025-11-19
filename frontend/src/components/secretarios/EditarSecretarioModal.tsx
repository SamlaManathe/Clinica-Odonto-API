import React, { useState, useEffect } from "react";
import type { Secretario } from "../../types/secretario";
import { updateSecretario } from "../../services/secretarioService";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
} from "@mui/material";

interface EditarSecretarioModalProps {
  open: boolean;
  secretario: Secretario | null;
  onClose: () => void;
  onSave: (secretarioAtualizado: Secretario) => void;
}

const EditarSecretarioModal: React.FC<EditarSecretarioModalProps> = ({
  open,
  secretario,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<Secretario>(
    secretario || {
      id: 0,
      nome: "",
      email: "",
      senha: "",
      telefone: "",
      cargo: "",
      ativo: true,
    }
  );

  const [salvando, setSalvando] = useState(false);

  useEffect(() => {
    if (secretario && open) {
      setFormData(secretario);
    }
  }, [secretario, open]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setSalvando(true);
    try {
      await updateSecretario(formData.id, formData);
      onSave(formData);
      onClose();
    } catch (error) {
      console.error("Erro ao salvar secretário:", error);
      alert("Erro ao salvar secretário. Tente novamente.");
    } finally {
      setSalvando(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 600, fontSize: "1.25rem" }}>
        Editar Secretário
      </DialogTitle>

      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          <TextField
            fullWidth
            label="Nome"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <TextField
            fullWidth
            label="Senha"
            name="senha"
            type="password"
            value={formData.senha}
            onChange={handleInputChange}
          />

          <TextField
            fullWidth
            label="Telefone"
            name="telefone"
            value={formData.telefone || ""}
            onChange={handleInputChange}
          />

          <TextField
            fullWidth
            label="Cargo"
            name="cargo"
            value={formData.cargo || ""}
            onChange={handleInputChange}
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} color="inherit">
          Cancelar
        </Button>

        <Button
          onClick={handleSave}
          variant="contained"
          color="primary"
          disabled={salvando}
        >
          {salvando ? "Salvando..." : "Salvar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditarSecretarioModal;
