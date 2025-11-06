import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, Typography, Box } from "@mui/material";

function ProductCard({ product }) {
  /* const formattedPrice = new Intl.NumberFormat("es-GT", {
    style: "currency",
    currency: "GTQ",
  }).format(product.price); */ const formattedPrice = new Intl.NumberFormat(
    "es-GT",
    {
      style: "currency",
      currency: "GTQ",
    }
  );

  const priceText =
    product.price && typeof product.price === "object"
      ? `${formattedPrice.format(product.price.from)} – ${formattedPrice.format(
          product.price.to
        )}`
      : formattedPrice.format(product.price);

  const isOutOfStock = product.stock <= 0;

  return (
    <Link
      to={`/products/${product.slug}`}
      style={{
        textDecoration: "none",
        display: "block",
        pointerEvents: isOutOfStock ? "none" : "auto", // 👈 desactiva click si está agotado
      }}
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
            aspectRatio: "1 / 1",
            width: "100%",
            maxHeight: 400,
            objectFit: "cover",
            transition: "transform 0.3s ease",
            filter: isOutOfStock ? "grayscale(0.5)" : "none",
          }}
        />

        {/* Capa “Agotado” */}
        {isOutOfStock && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.636)", // 👈 tono claro sutil
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#7BAFAC", // tu terracota
                fontWeight: 700,
                fontFamily: "Montserrat, serif",
                letterSpacing: "1px",
                textTransform: "uppercase",
                px: 2,
                py: 1,
                border: "2px solid #7BAFAC",
                borderRadius: "4px",
                backgroundColor: "rgba(255,255,255,0.8)",
              }}
            >
              Agotado
            </Typography>
          </Box>
        )}

        {/* Info inferior (mantengo tu diseño original) */}
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
          <Typography
            variant="h6"
            component="h3"
            sx={{
              margin: "0 0 3px 0",
              fontWeight: 600,
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            {product.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1em",
              color: "#ffffff",
              fontWeight: 400,
              margin: 0,
            }}
          >
            {priceText}
          </Typography>
        </Box>
      </Card>
    </Link>
  );
}

export default ProductCard;
