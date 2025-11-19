import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import consultaRoutes from "./routes/consultaRoutes";
import veterinarioRoutes from "./routes/veterinarioRoutes";
import animalRoutes from "./routes/animalRoutes";
import secretarioRoutes from "./routes/secretarioRoutes";
import { setupSwagger } from "./swagger";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", // endereço do frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // se usar cookies/sessão
  })
);

// Rotas principais
app.use("/consultas", consultaRoutes);
app.use("/veterinarios", veterinarioRoutes);
app.use("/animais", animalRoutes);
app.use("/secretarios", secretarioRoutes);

// Swagger
setupSwagger(app);

// Inicialização do servidor
app.listen(port, () => {
  console.log(`🐾 Servidor rodando em http://localhost:${port}`);
  console.log(`📘 Swagger disponível em http://localhost:${port}/api-docs`);
});
