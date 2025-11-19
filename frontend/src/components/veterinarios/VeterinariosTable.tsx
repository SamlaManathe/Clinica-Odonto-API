import React from "react";
import type { Veterinario } from "../../types/veterinario";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface VeterinariosTableProps {
  veterinarios: Veterinario[];
  deletingId: number | null;
  onDelete: (id: number) => void;
  onEdit: (veterinario: Veterinario) => void;
}

const VeterinariosTable: React.FC<VeterinariosTableProps> = ({ veterinarios, deletingId, onDelete, onEdit }) => {
  return (
    <TableContainer className="mt-4 rounded-lg">
      <Table>
        <TableHead>
          <TableRow className="bg-gray-800">
            {["Nome", "Email", "CRMV", "Especialidade", "Telefone", "Descrição", "Ações"].map((header) => (
              <TableCell key={header} align="center" className="font-bold text-white">{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {veterinarios.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} align="center" className="py-6 text-gray-500">
                Nenhum veterinário encontrado.
              </TableCell>
            </TableRow>
          ) : (
            veterinarios.map((vet) => (
              <TableRow key={vet.id} hover className="hover:bg-blue-50">
                <TableCell align="center">{vet.nome}</TableCell>
                <TableCell align="center">{vet.email}</TableCell>
                <TableCell align="center">{vet.crmv}</TableCell>
                <TableCell align="center">{vet.especialidade}</TableCell>
                <TableCell align="center">{vet.telefone || "-"}</TableCell>
                <TableCell align="center">{vet.descricao || "-"}</TableCell>
                <TableCell align="center">
                  <div className="flex justify-center gap-2">
                    <Tooltip title="Editar">
                      <IconButton color="primary" size="small" onClick={() => onEdit(vet)}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Remover">
                      <IconButton color="error" size="small" onClick={() => onDelete(vet.id)} disabled={deletingId === vet.id}>
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

export default VeterinariosTable;
