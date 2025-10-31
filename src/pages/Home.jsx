import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

function Home() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "70vh", md: "90vh" },
        backgroundImage: `url("/assets/bg.jpg")`, // 👈 pon aquí tu imagen hero
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
        position: "relative",
      }}
    >
      {/* Capa de oscurecimiento suave para mejorar la legibilidad */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(178, 178, 178, 0.35)",
          zIndex: 0,
        }}
      />

      {/* Contenido del hero */}
      <Box sx={{ position: "relative", zIndex: 1, p: 3 }}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 600,
            mb: 2,
            fontSize: { xs: "2rem", md: "3.5rem" },
          }}
        >
          Cerámica artesanal que inspira
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mb: 4,
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Piezas únicas hechas a mano con amor y dedicación. Descubre nuestra
          colección cuidadosamente elaborada.
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/catalog")}
          sx={{
            backgroundColor: theme.palette.terracota.main,
            fontSize: "1.1rem",
            px: 4,
            py: 1.5,
            borderRadius: "30px",
            "&:hover": {
              backgroundColor: theme.palette.arcillaSuave.main,
            },
          }}
        >
          Ver Catálogo
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
