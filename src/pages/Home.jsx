import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";

function Home() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "90vh", md: "90vh" },
        backgroundImage: `url("/assets/DK1A6444.jpg")`, // 👈 pon aquí tu imagen hero
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
          backgroundColor: "rgba(255, 255, 255, 0.51)",
          zIndex: 0,
        }}
      />

      {/* Contenido del hero */}
      <Box sx={{ position: "relative", zIndex: 1, p: 3 }}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Montserrat', serif",
            fontWeight: 600,
            textTransform: "uppercase",
            color: theme.palette.terracota.main,
            mb: 2,
            fontSize: { xs: "2rem", md: "3.5rem" },
          }}
        >
          Piezas de cerámica hechas 100% a mano.
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mb: 10,
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Piezas funcionales y decorativas únicas, hechas a mano en torno o
          usando técnica de modelado a mano.
        </Typography>

        <CustomButton onClick={() => navigate("/catalog")}sx={{ mt: 3 }}>
          Ver Catálogo
        </CustomButton>
      </Box>
    </Box>
  );
}

export default Home;
