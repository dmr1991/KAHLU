import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Navbar() {
  const theme = useTheme();

  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px", // 👈 padding lateral del navbar
        borderBottom: `0px solid ${theme.palette.arcillaSuave.main}`,
        backgroundColor: "#fff",
        marginBottom: "0px",
        width: "100%",
        boxSizing: "border-box",
        "@media (max-width: 600px)": {
          flexDirection: "column",
          gap: "10px",
          padding: "15px 20px",
        },
      }}
    >
      {/* Brand: logo + texto */}
      <Box
        className="navbar-brand"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          textDecoration: "none",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="/assets/LOGO_Colores.png"
            alt="Logo KAHLU Cerámica"
            style={{ height: "80px", width: "auto", display: "block" }}
          />
        </Link>

        <Typography
          variant="h5"
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 600,
            color: theme.palette.terracota.main,
            letterSpacing: "1px",
            textAlign: "center",
          }}
        >
          KAHLU CERÁMICA
        </Typography>
      </Box>

      {/* Links */}
      <Box
        className="navbar-links"
        sx={{
          display: "flex",
          alignItems: "center",
          "@media (max-width: 600px)": {
            flexDirection: "row",
            justifyContent: "center",
            gap: "10px",
          },
        }}
      >
        {/* 🏠 Home */}
        <Button
          component={Link}
          to="/"
          variant="text"
          size="large"
          sx={{
            color: "#555",
            fontSize: "1.1em",
            marginLeft: "20px",
            fontFamily: '"Montserrat", sans-serif',
            "&:hover": {
              color: theme.palette.terracota.main,
              backgroundColor: "transparent",
            },
          }}
        >
          Home
        </Button>

        {/* 📦 Catálogo */}
        <Button
          component={Link}
          to="/catalog"
          variant="text"
          size="large"
          sx={{
            color: "#555",
            fontSize: "1.1em",
            marginLeft: "20px",
            "&:hover": {
              color: theme.palette.terracota.main,
              backgroundColor: "transparent",
            },
          }}
        >
          Catálogo
        </Button>

        {/* ✉️ Contacto */}
        <Button
          href="mailto:hola@kahluceramica.com"
          target="_blank"
          rel="noopener noreferrer"
          variant="text"
          size="large"
          sx={{
            color: "#555",
            fontSize: "1.1em",
            marginLeft: "20px",
            fontFamily: '"Montserrat", sans-serif',
            "&:hover": {
              color: theme.palette.terracota.main,
              backgroundColor: "transparent",
            },
          }}
        >
          Contacto
        </Button>
      </Box>
    </Box>
  );
}

export default Navbar;
