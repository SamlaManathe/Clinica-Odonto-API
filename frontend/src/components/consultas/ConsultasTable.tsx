import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
  CircularProgress,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import type { Consulta } from "../../types/consulta";

interface ConsultasTableProps {
  consultas: Consulta[];
  deletingId: number | null;
  onDelete: (id: number) => void;
  onEdit: (consulta: Consulta) => void;
  loading?: boolean;
}

const formatarDataHora = (dataHora?: string) => {
  if (!dataHora) return "-";
  const date = new Date(dataHora);
  return date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const formatarValorBR = (v?: number | null) => {
  if (v == null) return "-";
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);
};

const ConsultasTable: React.FC<ConsultasTableProps> = ({ consultas, deletingId, onDelete, onEdit, loading = false }) => {
  const colunas = ["Data/Hora", "Animal", "Veterinário", "Status", "Valor", "Motivo", "Ações"];

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <TableContainer className="mt-4 rounded-lg">
      <Table>
        <TableHead>
          <TableRow className="bg-gray-800">
            {colunas.map((col) => (
              <TableCell key={col} align="center" className="font-bold text-white">
                {col}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {consultas.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} align="center" className="py-6 text-gray-500">
                Nenhuma consulta encontrada.
              </TableCell>
            </TableRow>
          ) : (
            consultas.map((c) => (
              <TableRow key={c.id} hover className="hover:bg-blue-50">
                <TableCell align="center">{formatarDataHora(c.dataHora)}</TableCell>

                <TableCell align="center">
                  {c.Animal ? `${c.Animal.nome} - ${c.Animal.especie || "-"} (Dono: ${c.Animal.responsavelNome || "-"})` : c.AnimalId}
                </TableCell>

                <TableCell align="center">
                  {c.Veterinario ? `${c.Veterinario.nome} - ${c.Veterinario.especialidade || "-"}` : c.VeterinarioId}
                </TableCell>

                <TableCell align="center">{c.status}</TableCell>

                <TableCell align="center">{formatarValorBR(c.valor)}</TableCell>

                <TableCell align="center">{c.motivo || "-"}</TableCell>

                <TableCell align="center">
                  <div className="flex justify-center gap-2">
                    <Tooltip title="Editar">
                      <IconButton color="primary" size="small" onClick={() => onEdit(c)}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Remover">
                      <IconButton
                        color="error"
                        size="small"
                        onClick={() => onDelete(c.id)}
                        disabled={deletingId === c.id}
                        aria-label={`remover-${c.id}`}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ConsultasTable;
