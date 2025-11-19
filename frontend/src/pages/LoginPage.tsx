import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Alert,
  CircularProgress,
} from "@mui/material";
import { Login as LoginIcon } from "@mui/icons-material";
import { z } from "zod";
import axios from "axios";

import CriarSecretarioModal from "../components/secretarios/CriarSecretarioModal";

const emailSchema = z.email();
const passwordSchema = z.string().min(4);

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [msgSucesso, setMsgSucesso] = useState<string>("");
  const [msgErro, setMsgErro] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [openCadastro, setOpenCadastro] = useState(false);

  const validateEmail = (email: string) => {
    if (!email.trim()) return { isValid: false, message: "Email é obrigatório" };
    const res = emailSchema.safeParse(email);
    return { isValid: res.success, message: res.success ? "" : "Email inválido" };
  };

  const validatePassword = (password: string) => {
    if (!password.trim()) return { isValid: false, message: "Senha é obrigatória" };
    const res = passwordSchema.safeParse(password);
    return {
      isValid: res.success,
      message: res.success ? "" : "Senha com menos de 4 caracteres",
    };
  };

  const inputsValidos =
    validateEmail(email).isValid && validatePassword(password).isValid;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = "http://localhost:3000/secretarios/login";

    setIsLoading(true);

    try {
      const response = await axios.post(url, {
        email: email,
        senha: password,
      });

      const dadosSecretario = response.data;

      setMsgSucesso(`Bem vindo(a), ${dadosSecretario.nome}!`);
      setMsgErro("");

      setTimeout(() => {
        navigate("/home");
      }, 1200);
    } catch (error: any) {
      let msg = "Erro ao realizar login. Verifique suas credenciais.";
      if (error?.response?.data?.message) msg = error.response.data.message;

      setMsgErro(msg);
      setMsgSucesso("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Modal de cadastro */}
      <CriarSecretarioModal
        open={openCadastro}
        onClose={() => setOpenCadastro(false)}
        onSuccess={(_novoSecretario) => {
          setMsgSucesso("Cadastro realizado com sucesso!");
          setOpenCadastro(false);
        }}
      />

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <Paper elevation={2} sx={{ p: 3, width: 320 }}>
          <Box textAlign="center" mb={2}>
            <LoginIcon sx={{ fontSize: 36, color: "primary.main", mb: 1 }} />
            <Typography variant="h6" fontWeight={600} mb={1}>
              Bem-vindo
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Faça login para acessar o sistema
            </Typography>
          </Box>

          {msgSucesso && <Alert>{msgSucesso}</Alert>}
          {msgErro && <Alert severity="error">{msgErro}</Alert>}

          <Box component="form" noValidate onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!validateEmail(email).isValid}
              helperText={validateEmail(email).message}
              disabled={isLoading}
            />

            <TextField
              label="Senha"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!validatePassword(password).isValid}
              helperText={validatePassword(password).message}
              disabled={isLoading}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
              disabled={!inputsValidos || isLoading}
            >
              {isLoading ? (
                <Box display="flex" alignItems="center" gap={1}>
                  <CircularProgress size={20} color="inherit" />
                  Carregando...
                </Box>
              ) : (
                "Entrar"
              )}
            </Button>
          </Box>

          {/* Botão para cadastro */}
          <Button
            fullWidth
            color="secondary"
            sx={{ mt: 2 }}
            onClick={() => setOpenCadastro(true)}
          >
            Criar conta
          </Button>
        </Paper>
      </Box>
    </>
  );
}

export default Login;
