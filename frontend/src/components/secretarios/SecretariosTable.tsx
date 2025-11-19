import React from "react";
import type { Secretario } from "../../types/secretario";
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

interface SecretariosTableProps {
  secretarios: Secretario[];
  deletingId: number | null;
  onDelete: (id: number) => void;
  onEdit: (secretario: Secretario) => void;
}

const SecretariosTable: React.FC<SecretariosTableProps> = ({
  secretarios,
  deletingId,
  onDelete,
  onEdit,
}) => {
  return (
    <TableContainer className="mt-4 rounded-lg">
      <Table>
        <TableHead>
          <TableRow className="bg-gray-800">
            {["Nome", "Email", "Telefone", "Cargo", "Ativo", "Ações"].map(
              (header) => (
                <TableCell
                  key={header}
                  align="center"
                  className="font-bold text-white"
                >
                  {header}
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {secretarios.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={6}
                align="center"
                className="py-6 text-gray-500"
              >
                Nenhum secretário encontrado.
              </TableCell>
            </TableRow>
          ) : (
            secretarios.map((secretario) => (
              <TableRow key={secretario.id} hover className="hover:bg-blue-50">
                <TableCell align="center">{secretario.nome}</TableCell>
                <TableCell align="center">{secretario.email}</TableCell>
                <TableCell align="center">{secretario.telefone || "-"}</TableCell>
                <TableCell align="center">{secretario.cargo || "-"}</TableCell>
                <TableCell align="center">{secretario.ativo ? "Sim" : "Não"}</TableCell>
                <TableCell align="center">
                  <div className="flex justify-center gap-2">
                    <Tooltip title="Editar">
                      <IconButton
                        color="primary"
                        size="small"
                        onClick={() => onEdit(secretario)}
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Remover">
                      <IconButton
                        color="error"
                        size="small"
                        onClick={() => onDelete(secretario.id)}
                        disabled={deletingId === secretario.id}
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

export default SecretariosTable;
