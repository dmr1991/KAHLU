import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { Grid, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Catalog() {
  const theme = useTheme();

  if (!products || products.length === 0) {
    return (
      <Box sx={{ textAlign: "center", padding: "50px 0" }}>
        <Typography variant="h5" color={theme.palette.terracota.main}>
          No hay productos disponibles en este momento. Revisa tus datos.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        margin: "0 0 40px 0",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: "center",
          marginBottom: "30px",
          fontFamily: '"Cormorant Garamond", serif',
          fontWeight: 600,
          color: theme.palette.aguaSuave.main,
        }}
      >
        Catálogo de Piezas Disponibles
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{ maxWidth: "1400px" }}
      >
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Catalog;
