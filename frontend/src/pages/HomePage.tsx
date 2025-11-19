import { Box, Button, Paper, Typography, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AVATAR_SIZE = 72;

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box position="relative" minHeight="100vh" width="100vw">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Paper elevation={2} sx={{ p: 3, width: 320 }}>
          <Box textAlign="center" mb={2}>
            <Box display="flex" justifyContent="center" mb={1}>
              <Avatar
                src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
                alt="Clínica Veterinária"
                sx={{
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE,
                  bgcolor: "transparent",
                }}
                slotProps={{ img: { loading: "lazy" } }}
              />
            </Box>

            <Typography variant="h5" component="h1" fontWeight={600} mb={3}>
              Clínica Veterinária
            </Typography>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mb: 2 }}
              onClick={() => navigate("/animais")}
            >
              Animais
            </Button>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mb: 2 }}
              onClick={() => navigate("/veterinarios")}
            >
              Veterinários
            </Button>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mb: 2 }}
              onClick={() => navigate("/secretarios")}
            >
              Secretários
            </Button>

            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={() => navigate("/consultas")}
            >
              Consultas
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;
