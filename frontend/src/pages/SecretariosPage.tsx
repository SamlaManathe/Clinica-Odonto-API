import React, { useEffect, useState } from "react";
import type { Secretario } from "../types/secretario";
import {
  getSecretarios,
  deleteSecretario,
} from "../services/secretarioService";
import {
  Box,
  Paper,
  Typography,
  IconButton,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import SecretariosTable from "../components/secretarios/SecretariosTable";
import CriarSecretarioModal from "../components/secretarios/CriarSecretarioModal";
import EditarSecretarioModal from "../components/secretarios/EditarSecretarioModal";

type SnackbarState = {
  open: boolean;
  message: string;
  severity: "success" | "error" | "info" | "warning";
};

const SecretariosPage: React.FC = () => {
  const navigate = useNavigate();

  const [secretarios, setSecretarios] = useState<Secretario[]>([]);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "info",
  });
  const [secretarioEditando, setSecretarioEditando] = useState<Secretario | null>(
    null
  );
  const [criarModalOpen, setCriarModalOpen] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await getSecretarios();
        setSecretarios(data);
      } catch (e) {
        setSnackbar({
          open: true,
          message: "Erro ao buscar secretários.",
          severity: "error",
        });
        console.error(e);
      }
    })();
  }, []);

  const handleDelete = async (id: number) => {
    setDeletingId(id);
    try {
      await deleteSecretario(id);
      setSecretarios((prev) => prev.filter((s) => s.id !== id));
      setSnackbar({
        open: true,
        message: "Secretário removido com sucesso.",
        severity: "success",
      });
    } catch (e) {
      setSnackbar({
        open: true,
        message: "Erro ao deletar secretário.",
        severity: "error",
      });
      console.error(e);
    } finally {
      setDeletingId(null);
    }
  };

  const handleOpenEditModal = (secretario: Secretario) => {
    setSecretarioEditando(secretario);
  };

  const handleCloseEditModal = () => {
    setSecretarioEditando(null);
  };

  const handleSaveSecretario = (secretarioAtualizado: Secretario) => {
    setSecretarios((prev) =>
      prev.map((s) =>
        s.id === secretarioAtualizado.id ? secretarioAtualizado : s
      )
    );
    setSnackbar({
      open: true,
      message: "Secretário atualizado com sucesso.",
      severity: "success",
    });
  };

  const handleSaveNovoSecretario = (novoSecretario: Secretario) => {
    setSecretarios((prev) => [...prev, novoSecretario]);
    setSnackbar({
      open: true,
      message: "Secretário criado com sucesso.",
      severity: "success",
    });
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" minHeight="100vh" p={3}>
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 1000,
          p: 3,
          position: "relative",
          borderRadius: 2,
        }}
      >
        <IconButton
          aria-label="voltar"
          onClick={() => navigate("/home")}
          size="small"
          sx={{ position: "absolute", left: 16, top: 16 }}
        >
          <ArrowBackIcon fontSize="small" />
        </IconButton>

        <Typography variant="h5" fontWeight={600} mb={3} textAlign="center">
          Lista de Secretários
        </Typography>

        <SecretariosTable
          secretarios={secretarios}
          deletingId={deletingId}
          onDelete={handleDelete}
          onEdit={handleOpenEditModal}
        />

        <Box mt={3} display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCriarModalOpen(true)}
          >
            Novo Secretário
          </Button>
        </Box>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Paper>

      <CriarSecretarioModal
        open={criarModalOpen}
        onClose={() => setCriarModalOpen(false)}
        onSuccess={handleSaveNovoSecretario}
      />

      <EditarSecretarioModal
        open={secretarioEditando !== null}
        secretario={secretarioEditando}
        onClose={handleCloseEditModal}
        onSave={handleSaveSecretario}
      />
    </Box>
  );
};

export default SecretariosPage;
