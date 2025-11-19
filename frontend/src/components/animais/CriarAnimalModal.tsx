import { useState, useCallback } from "react";
import type { Animal } from "../../types/animal";
import { createAnimal } from "../../services/animalService";
import { validateCreateAnimal } from "../../schemas/validation";
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

interface CriarAnimalModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: (novoAnimal: Animal) => void;
}

const CriarAnimalModal = ({ open, onClose, onSuccess }: CriarAnimalModalProps) => {
  const INITIAL_FORM_DATA = {
    nome: "",
    especie: "",
    raca: "",
    sexo: "",
    idade: "",
    dataNascimento: "",
    peso: "",
    responsavelNome: "",
    responsavelEmail: "",
    responsavelTelefone: "",
    observacoes: "",
  };

  const [formData, setFormData] = useState<any>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [salvando, setSalvando] = useState(false);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev: any) => ({ ...prev, [name]: value }));
      if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    },
    [errors]
  );

  const handleSave = useCallback(async () => {
    const validation = validateCreateAnimal(formData);
    if (!validation.success) {
      setErrors(validation.errors);
      return;
    }

    setSalvando(true);
    try {
      const novoAnimal = await createAnimal(validation.data);
      onSuccess(novoAnimal);
      setFormData(INITIAL_FORM_DATA);
      setErrors({});
      onClose();
    } catch (error) {
      console.error("Erro ao criar animal:", error);
      setErrors({ submit: "Erro ao criar animal. Tente novamente." });
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
      <DialogTitle sx={{ fontWeight: 600, fontSize: "1.25rem" }}>
        Cadastrar Novo Animal
      </DialogTitle>

      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          <TextField fullWidth label="Nome" name="nome" value={formData.nome} onChange={handleInputChange} required error={!!errors.nome} helperText={errors.nome} />
          <TextField fullWidth label="Espécie" name="especie" value={formData.especie} onChange={handleInputChange} required error={!!errors.especie} helperText={errors.especie} />
          <TextField fullWidth label="Raça" name="raca" value={formData.raca} onChange={handleInputChange} error={!!errors.raca} helperText={errors.raca} />
          <TextField fullWidth label="Sexo" name="sexo" value={formData.sexo} onChange={handleInputChange} error={!!errors.sexo} helperText={errors.sexo} />
          <TextField fullWidth label="Idade" name="idade" type="number" value={formData.idade} onChange={handleInputChange} error={!!errors.idade} helperText={errors.idade} />
          <TextField fullWidth label="Data de Nascimento" name="dataNascimento" value={formData.dataNascimento} onChange={handleInputChange} placeholder="YYYY-MM-DD" error={!!errors.dataNascimento} helperText={errors.dataNascimento} />
          <TextField fullWidth label="Peso (kg)" name="peso" type="number" value={formData.peso} onChange={handleInputChange} error={!!errors.peso} helperText={errors.peso} />
          <TextField fullWidth label="Responsável" name="responsavelNome" value={formData.responsavelNome} onChange={handleInputChange} required error={!!errors.responsavelNome} helperText={errors.responsavelNome} />
          <TextField fullWidth label="Email do Responsável" name="responsavelEmail" value={formData.responsavelEmail} onChange={handleInputChange} error={!!errors.responsavelEmail} helperText={errors.responsavelEmail} />
          <TextField fullWidth label="Telefone do Responsável" name="responsavelTelefone" value={formData.responsavelTelefone} onChange={handleInputChange} error={!!errors.responsavelTelefone} helperText={errors.responsavelTelefone} />
          <TextField fullWidth label="Observações" name="observacoes" value={formData.observacoes} onChange={handleInputChange} error={!!errors.observacoes} helperText={errors.observacoes} />
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={handleClose} color="inherit">Cancelar</Button>
        <Button onClick={handleSave} variant="contained" color="primary" disabled={salvando}>
          {salvando ? <><CircularProgress size={20} sx={{ mr: 1 }} />Salvando...</> : "Cadastrar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CriarAnimalModal;
