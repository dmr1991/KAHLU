import React, { useState } from "react";
import { Box, Typography, TextField, Alert } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CustomButton from "../components/CustomButton";

function Contact() {
  const theme = useTheme();
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/tu-id-aqui", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("sent");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("hola@kahluceramica.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "85vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: theme.palette.background.default,
        px: { xs: 2, md: 6 },
        py: 6,
      }}
    >
      {/* Título */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Cormorant Garamond', serif",
          color: theme.palette.terracota.main,
          mb: 2,
        }}
      >
        Contáctanos
      </Typography>

      {/* Descripción */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: "700px",
          mb: 6,
          fontSize: "1.2rem",
          lineHeight: 1.6,
          fontFamily: "'Raleway', sans-serif",
        }}
      >
        Si deseas realizar un pedido personalizado o conocer más sobre nuestras
        piezas, completa el formulario o escríbenos directamente por Instagram o correo electrónico.
      </Typography>

      {/* Contenedor principal */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",
          justifyContent: "center",
          gap: 5,
          width: "100%",
          maxWidth: "900px",
        }}
      >
        {/* Formulario */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textAlign: "left",
          }}
        >
          <TextField label="Nombre" name="name" required variant="outlined" fullWidth />
          <TextField label="Correo electrónico" name="email" type="email" required variant="outlined" fullWidth />
          <TextField label="Mensaje" name="message" multiline rows={4} required variant="outlined" fullWidth />

          <CustomButton type="submit" disabled={status === "sending"} sx={{ mt: 2 }}>
            {status === "sending" ? "Enviando..." : "Enviar mensaje"}
          </CustomButton>

          {status === "sent" && (
            <Alert severity="success" sx={{ mt: 2 }}>
              ¡Tu mensaje fue enviado correctamente!
            </Alert>
          )}
          {status === "error" && (
            <Alert severity="error" sx={{ mt: 2 }}>
              Ocurrió un error. Por favor, intenta de nuevo.
            </Alert>
          )}
        </Box>

        {/* Contacto lateral */}
        <Box
          sx={{
            flex: 0.8,
            backgroundColor: "#f7f3ef",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 4,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              color: theme.palette.terracota.main,
              mb: 3,
            }}
          >
            También puedes escribirnos por:
          </Typography>

          <CustomButton
            href="https://www.instagram.com/kahlu.ceramica/"
            target="_blank"
            sx={{ minWidth: "220px", mb: 3 }}
          >
            Instagram
          </CustomButton>

          {/* Email copiable */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              transition: "color 0.2s ease",
              "&:hover": { color: theme.palette.terracota.main },
            }}
            onClick={handleCopy}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "1rem",
                color: copied ? theme.palette.terracota.main : "text.primary",
              }}
            >
              kahluceramica@gmail.com
            </Typography>
            <ContentCopyIcon fontSize="small" />
          </Box>

          {copied && (
            <Typography
              variant="caption"
              sx={{
                mt: 1,
                color: theme.palette.terracota.main,
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              ¡Copiado al portapapeles!
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
