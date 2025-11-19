import React from "react";
import type { Animal } from "../../types/animal";
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

interface AnimaisTableProps {
  animais: Animal[];
  deletingId: number | null;
  onDelete: (id: number) => void;
  onEdit: (animal: Animal) => void;
}

const AnimaisTable: React.FC<AnimaisTableProps> = ({
  animais,
  deletingId,
  onDelete,
  onEdit,
}) => {
  return (
    <TableContainer className="mt-4 rounded-lg">
      <Table>
        <TableHead>
          <TableRow className="bg-gray-800">
            {[
              "Nome",
              "Espécie",
              "Raça",
              "Sexo",
              "Idade",
              "Responsável",
              "Email do Responsável",
              "Telefone do Responsável",
              "Observações",
              "Ações",
            ].map((header) => (
              <TableCell
                key={header}
                align="center"
                className="font-bold text-white"
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {animais.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={10}
                align="center"
                className="py-6 text-gray-500"
              >
                Nenhum animal encontrado.
              </TableCell>
            </TableRow>
          ) : (
            animais.map((animal) => (
              <TableRow key={animal.id} hover className="hover:bg-blue-50">
                <TableCell align="center">{animal.nome}</TableCell>
                <TableCell align="center">{animal.especie}</TableCell>
                <TableCell align="center">{animal.raca || "-"}</TableCell>
                <TableCell align="center">{animal.sexo || "-"}</TableCell>
                <TableCell align="center">{animal.idade ?? "-"}</TableCell>
                <TableCell align="center">{animal.responsavelNome}</TableCell>
                <TableCell align="center">{animal.responsavelEmail || "-"}</TableCell>
                <TableCell align="center">{animal.responsavelTelefone || "-"}</TableCell>
                <TableCell align="center">{animal.observacoes || "-"}</TableCell>
                <TableCell align="center">
                  <div className="flex justify-center gap-2">
                    <Tooltip title="Editar">
                      <IconButton color="primary" size="small" onClick={() => onEdit(animal)}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Remover">
                      <IconButton
                        color="error"
                        size="small"
                        onClick={() => onDelete(animal.id)}
                        disabled={deletingId === animal.id}
                        aria-label={`remover-${animal.id}`}
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

export default AnimaisTable;
