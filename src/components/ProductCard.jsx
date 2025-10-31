import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, Typography, Box } from "@mui/material";

function ProductCard({ product }) {
  // Colores temáticos
  const terracota = "#a2674c"; // Terracota Natural
  const arenaPalida = "rgba(242, 236, 228, 0.588)"; // Arena Pálida semi-transparente

  // Formatear el precio a moneda local
  const formattedPrice = new Intl.NumberFormat("es-GT", {
    style: "currency",
    currency: "GTQ",
  }).format(product.price);

  return (
    <Link
      to={`/products/${product.slug}`}
      style={{ textDecoration: "none", display: "block" }}
    >
      <Card
        sx={{
          position: "relative",
          borderRadius: 0,
          boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
          transition: "box-shadow 0.2s ease-in-out",
          backgroundColor: "#f2ece4",
          "&:hover": {
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.08)",
            "& .card-image": {
              transform: "scale(1.03)",
            },
          },
        }}
      >
        {/* Imagen cuadrada */}
        <CardMedia
          component="img"
          image={product.mainImage}
          alt={product.title}
          className="card-image"
          sx={{
            aspectRatio: "1 / 1", // 👈 Cuadrado perfecto
            width: "100%",
            maxHeight: 400,
            objectFit: "cover", // Recorta sin deformar
            transition: "transform 0.3s ease",
          }}
        />

        {/* Superposición de información */}
        <Box
          className="product-card-info-overlay"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            padding: "10px 5px",
            textAlign: "center",
          }}
        >
          {/* Título */}
          <Typography
            variant="h6"
            component="h3"
            sx={{
              margin: "0 0 3px 0",
              fontWeight: 600,
              fontFamily: "Cormorant Garamond, serif",
              color: terracota,
            }}
          >
            {product.title}
          </Typography>

          {/* Precio */}
          <Typography
            variant="body1"
            className="price"
            sx={{
              fontSize: "1em",
              color: "#333",
              fontWeight: 400,
              margin: 0,
            }}
          >
            {formattedPrice}
          </Typography>
        </Box>
      </Card>
    </Link>
  );
}

export default ProductCard;
