import React, { useCallback, useEffect, useState } from "react";
import type { Consulta } from "../../types/consulta";
import type { Animal } from "../../types/animal";
import type { Veterinario } from "../../types/veterinario";
import { createConsulta } from "../../services/consultaService";
import { getAnimais } from "../../services/animalService";
import { getVeterinarios } from "../../services/veterinarioService";
import { validateCreateConsulta } from "../../schemas/validation";
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
  onClose: () => void;
  onSuccess: (nova: Consulta) => void;
}

const INITIAL_FORM = {
  dataHora: "",
  motivo: "",
  status: "Agendada",
  anotacoes: "",
  valor: "",
  AnimalId: 0,
  VeterinarioId: 0,
};

const CriarConsultaModal: React.FC<Props> = ({ open, onClose, onSuccess }) => {
  const [form, setForm] = useState<any>(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [salvando, setSalvando] = useState(false);
  const [animais, setAnimais] = useState<Animal[]>([]);
  const [veterinarios, setVeterinarios] = useState<Veterinario[]>([]);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    if (!open) return;
    setForm(INITIAL_FORM);
    setErrors({});
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
  }, [open]);

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setForm((p: any) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }, [errors]);

  const handleSave = useCallback(async () => {
    // prepare payload
    const payload = {
      ...form,
      valor: form.valor === "" ? undefined : Number(String(form.valor).replace(",", ".")),
      AnimalId: Number(form.AnimalId),
      VeterinarioId: Number(form.VeterinarioId),
    };

    const validation = validateCreateConsulta(payload);
    if (!validation.success) {
      setErrors(validation.errors);
      return;
    }

    setSalvando(true);
    try {
      const nova = await createConsulta(validation.data as any);
      onSuccess(nova);
      setForm(INITIAL_FORM);
      onClose();
    } catch (err) {
      console.error("Erro ao criar consulta:", err);
      setErrors({ submit: "Erro ao criar consulta. Tente novamente." });
    } finally {
      setSalvando(false);
    }
  }, [form, onSuccess, onClose]);

  const handleClose = useCallback(() => {
    setForm(INITIAL_FORM);
    setErrors({});
    onClose();
  }, [onClose]);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 600, fontSize: "1.25rem" }}>Agendar Consulta</DialogTitle>
      <DialogContent>
        {loadingData ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            <TextField
              fullWidth
              label="Data e hora"
              name="dataHora"
              type="datetime-local"
              InputLabelProps={{ shrink: true }}
              value={form.dataHora}
              onChange={handleInput}
              required
              error={!!errors.dataHora}
              helperText={errors.dataHora}
            />

            <TextField
              select
              label="Animal"
              name="AnimalId"
              value={form.AnimalId}
              onChange={handleInput}
              error={!!errors.AnimalId}
              helperText={errors.AnimalId}
              SelectProps={{ native: true }}
              fullWidth
            >
              <option value={0}>Selecione um animal</option>
              {animais.map((a) => (
                <option key={a.id} value={a.id}>
                  {`${a.nome} - ${a.especie || "-"} (Dono: ${a.responsavelNome || "-"})`}
                </option>
              ))}
            </TextField>

            <TextField
              select
              label="Veterinário"
              name="VeterinarioId"
              value={form.VeterinarioId}
              onChange={handleInput}
              error={!!errors.VeterinarioId}
              helperText={errors.VeterinarioId}
              SelectProps={{ native: true }}
              fullWidth
            >
              <option value={0}>Selecione um veterinário</option>
              {veterinarios.map((v) => (
                <option key={v.id} value={v.id}>
                  {`${v.nome} - ${v.especialidade || "-"}`}
                </option>
              ))}
            </TextField>

            <TextField fullWidth label="Motivo" name="motivo" value={form.motivo} onChange={handleInput} error={!!errors.motivo} helperText={errors.motivo} />

            <TextField
              select
              label="Status"
              name="status"
              value={form.status}
              onChange={handleInput}
              SelectProps={{ native: true }}
              error={!!errors.status}
              helperText={errors.status}
              fullWidth
            >
              {statusOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </TextField>

            <TextField
              fullWidth
              label="Valor (R$)"
              name="valor"
              type="number"
              inputProps={{ step: "0.01" }}
              value={form.valor}
              onChange={handleInput}
              helperText="Opcional — ex: 90.5 (R$ 90,50)"
            />

            <TextField fullWidth label="Anotações" name="anotacoes" value={form.anotacoes} onChange={handleInput} multiline rows={3} helperText="Campo opcional" />
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={handleClose} color="inherit" disabled={salvando}>Cancelar</Button>
        <Button onClick={handleSave} variant="contained" color="primary" disabled={salvando}>
          {salvando ? <><CircularProgress size={18} sx={{ mr: 1 }} />Salvando...</> : "Agendar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CriarConsultaModal;
