import { useState, useCallback } from "react";
import type { Veterinario } from "../../types/veterinario";
import { createVeterinario } from "../../services/veterinarioService";
import { createVeterinarioSchema } from "../../schemas/veterinarioSchema";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";

interface CriarVeterinarioModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: (novoVeterinario: Veterinario) => void;
}

const CriarVeterinarioModal = ({ open, onClose, onSuccess }: CriarVeterinarioModalProps) => {
  const INITIAL_FORM_DATA = {
    nome: "",
    email: "",
    crmv: "",
    especialidade: "",
    telefone: "",
    descricao: "",
  };

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [salvando, setSalvando] = useState(false);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }, [errors]);

  const handleSave = useCallback(async () => {
    try {
      const validated = createVeterinarioSchema.parse(formData);
      setSalvando(true);
      const novoVeterinario = await createVeterinario(validated);
      onSuccess(novoVeterinario);
      setFormData(INITIAL_FORM_DATA);
      setErrors({});
      onClose();
    } catch (error: any) {
      if (error.errors) {
        const errObj: Record<string, string> = {};
        error.errors.forEach((e: any) => {
          errObj[e.path[0]] = e.message;
        });
        setErrors(errObj);
      } else {
        console.error("Erro ao criar veterinário:", error);
        setErrors({ submit: "Erro ao criar veterinário. Tente novamente." });
      }
    } finally {
      setSalvando(false);
    }
  }, [formData, onSuccess, onClose]);

  const handleClose = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    onClose();
  }, [onClose]);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Cadastrar Novo Veterinário</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          <TextField fullWidth label="Nome" name="nome" value={formData.nome} onChange={handleInputChange} required error={!!errors.nome} helperText={errors.nome} />
          <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleInputChange} required error={!!errors.email} helperText={errors.email} />
          <TextField fullWidth label="CRMV" name="crmv" value={formData.crmv} onChange={handleInputChange} required error={!!errors.crmv} helperText={errors.crmv} />
          <TextField fullWidth label="Especialidade" name="especialidade" value={formData.especialidade} onChange={handleInputChange} required error={!!errors.especialidade} helperText={errors.especialidade} />
          <TextField fullWidth label="Telefone" name="telefone" value={formData.telefone} onChange={handleInputChange} error={!!errors.telefone} helperText={errors.telefone} />
          <TextField fullWidth label="Descrição" name="descricao" value={formData.descricao} onChange={handleInputChange} error={!!errors.descricao} helperText={errors.descricao} />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="inherit">Cancelar</Button>
        <Button onClick={handleSave} variant="contained" color="primary" disabled={salvando}>
          {salvando ? <CircularProgress size={20} sx={{ mr: 1 }} /> : "Cadastrar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CriarVeterinarioModal;
