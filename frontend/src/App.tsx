import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage";
import Home from "./pages/HomePage";
import ThemeToggleFloating from "./components/ThemeToggleFloating";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useState } from "react";

import AnimaisPage from "./pages/AnimaisPage";
import VeterinariosPage from "./pages/VeterinariosPage";
import SecretariosPage from "./pages/SecretariosPage";
import ConsultasPage from "./pages/ConsultasPage";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const theme = createTheme({ palette: { mode } });

  const toggleColorMode = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeToggleFloating toggleColorMode={toggleColorMode} mode={mode} />
      <Router>
        <Routes>

          {/* LOGIN */}
          <Route path="/" element={<Login />} />

          {/* HOME */}
          <Route path="/home" element={<Home />} />

          {/* PAGINAS */}
          <Route path="/animais" element={<AnimaisPage />} />
          <Route path="/veterinarios" element={<VeterinariosPage />} />
          <Route path="/secretarios" element={<SecretariosPage />} />
          <Route path="/consultas" element={<ConsultasPage />} />

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
