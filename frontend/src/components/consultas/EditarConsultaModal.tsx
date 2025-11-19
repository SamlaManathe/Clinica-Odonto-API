import React, { useEffect, useState } from "react";
import type { Consulta } from "../../types/consulta";
import type { Animal } from "../../types/animal";
import type { Veterinario } from "../../types/veterinario";
import { updateConsulta } from "../../services/consultaService";
import { getAnimais } from "../../services/animalService";
import { getVeterinarios } from "../../services/veterinarioService";
import { statusOptions } from "../../schemas/consultaSchema";
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

interface Props {
  open: boolean;
  consulta: Consulta | null;
  onClose: () => void;
  onSave: (consultaAtualizada: Consulta) => void;
}

const EditarConsultaModal: React.FC<Props> = ({ open, consulta, onClose, onSave }) => {
  const [form, setForm] = useState<any | null>(null);
  const [animais, setAnimais] = useState<Animal[]>([]);
  const [veterinarios, setVeterinarios] = useState<Veterinario[]>([]);
  const [loadingData, setLoadingData] = useState(false);
  const [salvando, setSalvando] = useState(false);

  useEffect(() => {
    if (open) {
      (async () => {
        setLoadingData(true);
        try {
          const [a, v] = await Promise.all([getAnimais(), getVeterinarios()]);
          setAnimais(a);
          setVeterinarios(v);
        } catch (e) {
          console.error("Erro ao carregar listas:", e);
        } finally {
          setLoadingData(false);
        }
      })();
    }
  }, [open]);

  useEffect(() => {
    if (consulta && open) {
      const dt = consulta.dataHora ? new Date(consulta.dataHora) : null;
      const local = dt ? new Date(dt.getTime() - dt.getTimezoneOffset() * 60000).toISOString().slice(0, 16) : "";
      setForm({
        id: consulta.id,
        dataHora: local,
        motivo: consulta.motivo || "",
        status: consulta.status || "Agendada",
        anotacoes: consulta.anotacoes || "",
        valor: consulta.valor != null ? String(consulta.valor) : "",
        AnimalId: consulta.AnimalId,
        VeterinarioId: consulta.VeterinarioId,
      });
    } else if (!open) {
      setForm(null);
    }
  }, [consulta, open]);

  if (!form) return null;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setForm((p: any) => ({ ...p, [name]: value }));
  };

  const handleSave = async () => {
    setSalvando(true);
    try {
      const payload = {
        dataHora: form.dataHora,
        motivo: form.motivo,
        status: form.status,
        anotacoes: form.anotacoes,
        valor: form.valor === "" ? undefined : Number(String(form.valor).replace(",", ".")),
        AnimalId: Number(form.AnimalId),
        VeterinarioId: Number(form.VeterinarioId),
      };

      const updated = await updateConsulta(form.id, payload);
      onSave(updated);
      onClose();
    } catch (e) {
      console.error("Erro ao atualizar consulta:", e);
      alert("Erro ao salvar consulta. Tente novamente.");
    } finally {
      setSalvando(false);
    }
  };

  const handleClose = () => onClose();

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 600, fontSize: "1.25rem" }}>Editar Consulta</DialogTitle>
      <DialogContent>
        {loadingData ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            <TextField fullWidth label="Data e hora" name="dataHora" type="datetime-local" InputLabelProps={{ shrink: true }} value={form.dataHora} onChange={handleInput} />
            <TextField select label="Animal" name="AnimalId" value={form.AnimalId} onChange={handleInput} SelectProps={{ native: true }} fullWidth>
              {animais.map((a) => (
                <option key={a.id} value={a.id}>{`${a.nome} - ${a.especie || "-"} (Dono: ${a.responsavelNome || "-"})`}</option>
              ))}
            </TextField>

            <TextField select label="Veterinário" name="VeterinarioId" value={form.VeterinarioId} onChange={handleInput} SelectProps={{ native: true }} fullWidth>
              {veterinarios.map((v) => (
                <option key={v.id} value={v.id}>{`${v.nome} - ${v.especialidade || "-"}`}</option>
              ))}
            </TextField>

            <TextField fullWidth label="Motivo" name="motivo" value={form.motivo} onChange={handleInput} />
            <TextField select fullWidth label="Status" name="status" value={form.status} onChange={handleInput} SelectProps={{ native: true }}>
              {statusOptions.map((s) => <option key={s} value={s}>{s}</option>)}
            </TextField>

            <TextField fullWidth label="Valor (R$)" name="valor" type="number" inputProps={{ step: "0.01" }} value={form.valor} onChange={handleInput} helperText="Opcional — ex: 90.5 (R$ 90,50)" />

            <TextField fullWidth label="Anotações" name="anotacoes" value={form.anotacoes} onChange={handleInput} multiline rows={3} />
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={handleClose} color="inherit" disabled={salvando}>Cancelar</Button>
        <Button onClick={handleSave} variant="contained" color="primary" disabled={salvando}>
          {salvando ? "Salvando..." : "Salvar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditarConsultaModal;
