// src/pages/ConsultasPage.tsx
import React, { useEffect, useMemo, useState } from "react";
import type { Consulta } from "../types/consulta";
import type { Animal } from "../types/animal";
import type { Veterinario } from "../types/veterinario";
import { getConsultas, deleteConsulta } from "../services/consultaService";
import { getAnimais } from "../services/animalService";
import { getVeterinarios } from "../services/veterinarioService";
import {
  Box,
  Paper,
  Typography,
  IconButton,
  Button,
  Snackbar,
  Alert,
  TextField,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import ConsultasTable from "../components/consultas/ConsultasTable";
import CriarConsultaModal from "../components/consultas/CriarConsultaModal";
import EditarConsultaModal from "../components/consultas/EditarConsultaModal";
import { useDebounce } from "../hooks/use.Debounce";

type SnackbarState = {
  open: boolean;
  message: string;
  severity: "success" | "error" | "info" | "warning";
};

const ConsultasPage: React.FC = () => {
  const navigate = useNavigate();

  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [animais, setAnimais] = useState<Animal[]>([]);
  const [veterinarios, setVeterinarios] = useState<Veterinario[]>([]);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "info",
  });

  const [consultaEditando, setConsultaEditando] =
    useState<Consulta | null>(null);
  const [criarModalOpen, setCriarModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // filtros & busca
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 400);

  const [filtroStatus, setFiltroStatus] =
    useState<"todos" | string>("todos");
  const [filtroVeterinario, setFiltroVeterinario] = useState<
    number | "todos"
  >("todos");
  const [filtroAnimal, setFiltroAnimal] = useState<
    number | "todos"
  >("todos");
  const [dataInicio, setDataInicio] = useState<string>("");
  const [dataFim, setDataFim] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const [c, a, v] = await Promise.all([
          getConsultas(),
          getAnimais(),
          getVeterinarios(),
        ]);
        setConsultas(c);
        setAnimais(a);
        setVeterinarios(v);
      } catch (e) {
        console.error(e);
        setSnackbar({
          open: true,
          message: "Erro ao carregar dados.",
          severity: "error",
        });
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleDelete = async (id: number) => {
    setDeletingId(id);
    try {
      await deleteConsulta(id);
      setConsultas((prev) => prev.filter((c) => c.id !== id));
      setSnackbar({
        open: true,
        message: "Consulta removida com sucesso.",
        severity: "success",
      });
    } catch (e) {
      console.error(e);
      setSnackbar({
        open: true,
        message: "Erro ao deletar consulta.",
        severity: "error",
      });
    } finally {
      setDeletingId(null);
    }
  };

  const handleOpenEditModal = (c: Consulta) => setConsultaEditando(c);
  const handleCloseEditModal = () => setConsultaEditando(null);

  const handleSaveConsulta = (consultaAtualizada: Consulta) => {
    setConsultas((prev) =>
      prev.map((c) =>
        c.id === consultaAtualizada.id ? consultaAtualizada : c
      )
    );
    setSnackbar({
      open: true,
      message: "Consulta atualizada com sucesso.",
      severity: "success",
    });
  };

  const handleCreateConsulta = (nova: Consulta) => {
    setConsultas((prev) => [...prev, nova]);
    setSnackbar({
      open: true,
      message: "Consulta criada com sucesso.",
      severity: "success",
    });
    setCriarModalOpen(false);
  };

  // combinação de filtros + busca com debounce
  const consultasFiltradas = useMemo(() => {
    let lista = [...consultas];

    const s = (debouncedSearch || "").trim().toLowerCase();
    if (s !== "") {
      lista = lista.filter((c) => {
        const animalNome = c.Animal?.nome?.toLowerCase() || "";
        const dono = c.Animal?.responsavelNome?.toLowerCase() || "";
        const vet = c.Veterinario?.nome?.toLowerCase() || "";
        const motivo = c.motivo?.toLowerCase() || "";
        return (
          animalNome.includes(s) ||
          dono.includes(s) ||
          vet.includes(s) ||
          motivo.includes(s)
        );
      });
    }

    if (filtroStatus !== "todos") {
      lista = lista.filter((c) => c.status === filtroStatus);
    }

    if (filtroVeterinario !== "todos") {
      lista = lista.filter(
        (c) => c.VeterinarioId === Number(filtroVeterinario)
      );
    }

    if (filtroAnimal !== "todos") {
      lista = lista.filter((c) => c.AnimalId === Number(filtroAnimal));
    }

    if (dataInicio) {
      const start = new Date(`${dataInicio}T00:00:00`);
      lista = lista.filter(
        (c) => new Date(c.dataHora) >= start
      );
    }
    if (dataFim) {
      const end = new Date(`${dataFim}T23:59:59`);
      lista = lista.filter(
        (c) => new Date(c.dataHora) <= end
      );
    }

    lista.sort(
      (a, b) =>
        new Date(a.dataHora).getTime() -
        new Date(b.dataHora).getTime()
    );

    return lista;
  }, [
    consultas,
    debouncedSearch,
    filtroStatus,
    filtroVeterinario,
    filtroAnimal,
    dataInicio,
    dataFim,
  ]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
      p={3}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 1100,
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

        <Typography
          variant="h5"
          fontWeight={600}
          mb={3}
          textAlign="center"
        >
          Lista de Consultas
        </Typography>

        {/* Filtros estilizados */}
        <Paper
          elevation={1}
          sx={{
            p: 2,
            mb: 3,
            borderRadius: 2,
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 2,
            alignItems: "center",
          }}
        >
          <TextField
            label="Pesquisar (animal / dono / veterinário / motivo)"
            placeholder="Digite para buscar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            size="small"
          />

          <TextField
            select
            label="Status"
            value={filtroStatus}
            onChange={(e) => setFiltroStatus(e.target.value)}
            size="small"
            SelectProps={{ native: true }}
          >
            <option value="todos">Todos</option>
            <option value="Agendada">Agendada</option>
            <option value="Concluída">Concluída</option>
            <option value="Cancelada">Cancelada</option>
            <option value="Em andamento">Em andamento</option>
          </TextField>

          <TextField
            select
            label="Veterinário"
            value={filtroVeterinario}
            onChange={(e) =>
              setFiltroVeterinario(
                e.target.value === "todos"
                  ? "todos"
                  : Number(e.target.value)
              )
            }
            size="small"
            SelectProps={{ native: true }}
          >
            <option value="todos">Todos</option>
            {veterinarios.map((v) => (
              <option
                key={v.id}
                value={v.id}
              >{`${v.nome} - ${v.especialidade || "-"}`}</option>
            ))}
          </TextField>

          <TextField
            select
            label="Animal"
            value={filtroAnimal}
            onChange={(e) =>
              setFiltroAnimal(
                e.target.value === "todos"
                  ? "todos"
                  : Number(e.target.value)
              )
            }
            size="small"
            SelectProps={{ native: true }}
          >
            <option value="todos">Todos</option>
            {animais.map((a) => (
              <option
                key={a.id}
                value={a.id}
              >{`${a.nome} - ${a.especie || "-"} (Dono: ${
                a.responsavelNome || "-"
              })`}</option>
            ))}
          </TextField>

          <TextField
            label="Data início"
            type="date"
            InputLabelProps={{ shrink: true }}
            size="small"
            value={dataInicio}
            onChange={(e) => setDataInicio(e.target.value)}
          />

          <TextField
            label="Data fim"
            type="date"
            InputLabelProps={{ shrink: true }}
            size="small"
            value={dataFim}
            onChange={(e) => setDataFim(e.target.value)}
          />
        </Paper>

        <ConsultasTable
          consultas={consultasFiltradas}
          deletingId={deletingId}
          onDelete={handleDelete}
          onEdit={handleOpenEditModal}
          loading={loading}
        />

        <Box mt={3} display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCriarModalOpen(true)}
          >
            Nova Consulta
          </Button>
        </Box>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={() =>
            setSnackbar((s) => ({ ...s, open: false }))
          }
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Alert
            onClose={() =>
              setSnackbar((s) => ({ ...s, open: false }))
            }
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Paper>

      <CriarConsultaModal
        open={criarModalOpen}
        onClose={() => setCriarModalOpen(false)}
        onSuccess={handleCreateConsulta}
      />

      <EditarConsultaModal
        open={consultaEditando !== null}
        consulta={consultaEditando}
        onClose={handleCloseEditModal}
        onSave={handleSaveConsulta}
      />
    </Box>
  );
};

export default ConsultasPage;
