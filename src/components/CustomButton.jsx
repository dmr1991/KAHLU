import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function CustomButton({ children, onClick, sx = {}, ...props }) {
  const theme = useTheme();

  return (
    <Button
      onClick={onClick}
      variant="contained"
      size="large"
      {...props}
      sx={{
        backgroundColor: theme.palette.aguaSuave.main,
        color: "#fff",
        fontFamily: "'Raleway', sans-serif",
        fontWeight: 600,
        borderRadius: "30px",
        textTransform: "uppercase",
        px: 4,
        py: 1.5,
        fontSize: "1rem",
        letterSpacing: "0.5px",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: theme.palette.verdeOliva.main,
        },
        ...sx, // permite sobreescribir estilos puntuales
      }}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
