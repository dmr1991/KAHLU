import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    terracota: {
      main: "#A2674C",
    },
    arenaPalida: {
      main: "#F2ECE4",
    },
    arcillaSuave: {
      main: "#D8C3A5",
    },
    aguaSuave: {
      main: "#7BAFAC",
    },
    verdeOliva: {
      main: "#8A8D5F",
    },
  },
  typography: {
    body1: {
      fontFamily: "Montserrat, sans-serif",
    },
    body2: {
      fontFamily: "Montserrat, sans-serif",
    },
    button: {
      fontFamily: "Montserrat, sans-serif",
      textTransform: "none", // 👈 evita que los botones estén en mayúsculas
    },
  },
});

export default theme;
