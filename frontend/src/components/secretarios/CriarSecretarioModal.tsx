import { useState, useCallback } from "react";
import type { Secretario } from "../../types/secretario";
import { createSecretario } from "../../services/secretarioService";
import { validateCreateSecretario } from "../../schemas/validation";
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

interface CriarSecretarioModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: (novoSecretario: Secretario) => void;
}

const CriarSecretarioModal = ({
  open,
  onClose,
  onSuccess,
}: CriarSecretarioModalProps) => {
  const INITIAL_FORM_DATA = {
    nome: "",
    email: "",
    senha: "",
    telefone: "",
    cargo: "",
    ativo: true,
  };

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [salvando, setSalvando] = useState(false);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    },
    [errors]
  );

  const handleSave = useCallback(async () => {
    const validation = validateCreateSecretario(formData);

    if (!validation.success) {
      setErrors(validation.errors);
      return;
    }

    setSalvando(true);
    try {
      const novoSecretario = await createSecretario(validation.data);
      onSuccess(novoSecretario);
      setFormData(INITIAL_FORM_DATA);
      setErrors({});
      onClose();
    } catch (error) {
      console.error("Erro ao criar secretário:", error);
      setErrors({ submit: "Erro ao criar secretário. Tente novamente." });
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
        Cadastrar Novo Secretário
      </DialogTitle>

      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          <TextField
            fullWidth
            label="Nome"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            placeholder="Digite o nome completo"
            required
            error={!!errors.nome}
            helperText={errors.nome}
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Digite o email"
            required
            error={!!errors.email}
            helperText={errors.email}
          />

          <TextField
            fullWidth
            label="Senha"
            name="senha"
            type="password"
            value={formData.senha}
            onChange={handleInputChange}
            placeholder="Digite a senha"
            required
            error={!!errors.senha}
            helperText={errors.senha}
          />

          <TextField
            fullWidth
            label="Telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleInputChange}
            placeholder="Digite o telefone"
            error={!!errors.telefone}
            helperText={errors.telefone}
          />

          <TextField
            fullWidth
            label="Cargo"
            name="cargo"
            value={formData.cargo}
            onChange={handleInputChange}
            placeholder="Cargo do secretário"
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={handleClose} color="inherit">
          Cancelar
        </Button>

        <Button
          onClick={handleSave}
          variant="contained"
          color="primary"
          disabled={salvando}
        >
          {salvando ? (
            <>
              <CircularProgress size={20} sx={{ mr: 1 }} />
              Salvando...
            </>
          ) : (
            "Cadastrar"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CriarSecretarioModal;
