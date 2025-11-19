// src/pages/Animais.tsx
import React, { useEffect, useMemo, useState } from "react";
import type { Animal } from "../types/animal";
import { getAnimais, deleteAnimal } from "../services/animalService";
import {
  Box,
  Paper,
  Typography,
  IconButton,
  Button,
  Snackbar,
  Alert,
  TextField,
  Divider,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import AnimaisTable from "../components/animais/AnimaisTable";
import CriarAnimalModal from "../components/animais/CriarAnimalModal";
import EditarAnimalModal from "../components/animais/EditarAnimalModal";
import { useDebounce } from "../hooks/use.Debounce";

type SnackbarState = {
  open: boolean;
  message: string;
  severity: "success" | "error" | "info" | "warning";
};

const Animais: React.FC = () => {
  const navigate = useNavigate();
  const [animais, setAnimais] = useState<Animal[]>([]);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "info",
  });
  const [animalEditando, setAnimalEditando] = useState<Animal | null>(null);
  const [modalCriarAberto, setModalCriarAberto] = useState(false);

  // filtros
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 400);

  const [filtroEspecie, setFiltroEspecie] = useState<string>("todos");
  const [filtroSexo, setFiltroSexo] = useState<string>("todos");

  useEffect(() => {
    (async () => {
      try {
        const data = await getAnimais();
        setAnimais(data);
      } catch (e) {
        setSnackbar({
          open: true,
          message: "Erro ao buscar animais.",
          severity: "error",
        });
        console.error(e);
      }
    })();
  }, []);

  const handleDelete = async (id: number) => {
    setDeletingId(id);
    try {
      await deleteAnimal(id);
      setAnimais((prev) => prev.filter((a) => a.id !== id));
      setSnackbar({ open: true, message: "Animal removido com sucesso.", severity: "success" });
    } catch (e) {
      setSnackbar({ open: true, message: "Erro ao deletar animal.", severity: "error" });
      console.error(e);
    } finally {
      setDeletingId(null);
    }
  };

  const handleOpenEditModal = (animal: Animal) => setAnimalEditando(animal);
  const handleCloseEditModal = () => setAnimalEditando(null);
  const handleSaveAnimal = (animalAtualizado: Animal) => {
    setAnimais((prev) =>
      prev.map((a) => (a.id === animalAtualizado.id ? animalAtualizado : a))
    );
    setSnackbar({ open: true, message: "Animal atualizado com sucesso.", severity: "success" });
  };

  const handleOpenCreateModal = () => setModalCriarAberto(true);
  const handleCloseCreateModal = () => setModalCriarAberto(false);
  const handleCreateAnimal = (novoAnimal: Animal) => {
    setAnimais((prev) => [...prev, novoAnimal]);
    setSnackbar({ open: true, message: "Animal cadastrado com sucesso.", severity: "success" });
  };

  // lista filtrada
  const animaisFiltrados = useMemo(() => {
    let lista = [...animais];
    const s = debouncedSearch.trim().toLowerCase();

    if (s !== "") {
      lista = lista.filter((a) =>
        (a.nome?.toLowerCase().includes(s) || a.responsavelNome?.toLowerCase().includes(s))
      );
    }

    if (filtroEspecie !== "todos") {
      lista = lista.filter((a) => a.especie === filtroEspecie);
    }

    if (filtroSexo !== "todos") {
      lista = lista.filter((a) => a.sexo === filtroSexo);
    }

    return lista;
  }, [animais, debouncedSearch, filtroEspecie, filtroSexo]);

  // espécies e sexos disponíveis
  const especies = Array.from(new Set(animais.map((a) => a.especie).filter(Boolean)));
  const sexos = Array.from(new Set(animais.map((a) => a.sexo).filter(Boolean)));

  return (
    <Box display="flex" flexDirection="column" alignItems="center" minHeight="100vh" bgcolor="background.default" p={3}>
      <Paper
        elevation={3}
        sx={(theme) => ({
          width: "100%",
          maxWidth: 1000,
          p: 3,
          position: "relative",
          bgcolor: theme.palette.mode === "dark" ? "#242424" : "background.paper",
          color: theme.palette.text.primary,
          borderRadius: 2,
        })}
      >
        <IconButton aria-label="voltar" onClick={() => navigate("/home")} size="small" sx={{ position: "absolute", left: 16, top: 16 }}>
          <ArrowBackIcon fontSize="small" />
        </IconButton>

        <Typography variant="h5" fontWeight={600} mb={3} textAlign="center">
          Lista de Animais
        </Typography>

        {/* filtros */}
        <Box display="flex" gap={2} flexWrap="wrap" mb={2} justifyContent="center">
          <TextField
            placeholder="Pesquisar por nome ou responsável"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            size="small"
            sx={{ minWidth: 220 }}
          />

          <TextField
            select
            label="Espécie"
            value={filtroEspecie}
            onChange={(e) => setFiltroEspecie(e.target.value)}
            SelectProps={{ native: true }}
            size="small"
            sx={{ minWidth: 160 }}
          >
            <option value="todos">Todos</option>
            {especies.map((e) => (
              <option key={e} value={e}>{e}</option>
            ))}
          </TextField>

          <TextField
            select
            label="Sexo"
            value={filtroSexo}
            onChange={(e) => setFiltroSexo(e.target.value)}
            SelectProps={{ native: true }}
            size="small"
            sx={{ minWidth: 120 }}
          >
            <option value="todos">Todos</option>
            {sexos.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </TextField>
        </Box>

        {/* linha divisória */}
        <Box mb={2} width="100%">
          <Divider />
        </Box>

        <AnimaisTable
          animais={animaisFiltrados}
          deletingId={deletingId}
          onDelete={handleDelete}
          onEdit={handleOpenEditModal}
        />

        <Box mt={3} display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary" onClick={handleOpenCreateModal}>
            Novo Animal
          </Button>
        </Box>

        <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={() => setSnackbar((s) => ({ ...s, open: false }))} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
          <Alert onClose={() => setSnackbar((s) => ({ ...s, open: false }))} severity={snackbar.severity} sx={{ width: "100%" }}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Paper>

      <CriarAnimalModal open={modalCriarAberto} onClose={handleCloseCreateModal} onSuccess={handleCreateAnimal} />
      <EditarAnimalModal open={animalEditando !== null} animal={animalEditando} onClose={handleCloseEditModal} onSave={handleSaveAnimal} />
    </Box>
  );
};

export default Animais;
