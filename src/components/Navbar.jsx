import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

function Navbar() {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Catálogo", path: "/catalog" },
    { label: "Contacto", path: "/contact" },
  ];

  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        backgroundColor: "#fff",
        borderBottom: `0px solid ${theme.palette.arcillaSuave.main}`,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* BRAND */}
      <Box
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
            style={{ height: "70px", width: "auto", display: "block" }}
          />
        </Link>

        <Typography
          variant="h5"
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 600,
            color: theme.palette.terracota.main,
            letterSpacing: "1px",
          }}
        >
          KAHLU CERÁMICA
        </Typography>
      </Box>

      {/* LINKS - Desktop */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          alignItems: "center",
        }}
      >
        {navLinks.map((link) => (
          <Button
            key={link.path}
            component={Link}
            to={link.path}
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
            {link.label}
          </Button>
        ))}
      </Box>

      {/* ICONO HAMBURGUESA - Móvil */}
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <IconButton
          color="inherit"
          edge="end"
          onClick={() => setOpenDrawer(true)}
          sx={{ color: theme.palette.terracota.main }}
        >
          <MenuIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Box>

      {/* DRAWER (GAVETA) */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: {
            width: "70vw",
            maxWidth: "300px",
            backgroundColor: "#fffaf7",
            padding: "20px",
          },
        }}
      >
        {/* Cerrar */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={() => setOpenDrawer(false)}>
            <CloseIcon sx={{ color: theme.palette.terracota.main }} />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Links */}
        <List>
          {navLinks.map((link) => (
            <ListItem
              key={link.path}
              component={Link}
              to={link.path}
              onClick={() => setOpenDrawer(false)}
              sx={{
                textDecoration: "none",
                color: "#555",
                "&:hover": {
                  color: theme.palette.terracota.main,
                },
              }}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: "1.2rem",
                  fontWeight: 500,
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default Navbar;
