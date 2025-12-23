import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, Typography, Box } from "@mui/material";

function ProductCard({ product }) {
  const formattedPrice = new Intl.NumberFormat("es-GT", {
    style: "currency",
    currency: "GTQ",
  });

  const isOutOfStock = product.stock <= 0;
  const hasOldPrice = !!product.oldPrice;

  // Lógica para generar el texto del precio en una sola línea
  let priceDisplay;

  if (
    product.price &&
    typeof product.price === "object" &&
    product.price.pareja
  ) {
    // Si es objeto con oferta por par: "Q200.00 – Q370.00"
    priceDisplay = `Unidad ${formattedPrice.format(
      product.price.individual
    )} – Pareja ${formattedPrice.format(product.price.pareja)}`;
  } else {
    // Si es un precio normal: "Q200.00"
    priceDisplay = formattedPrice.format(product.price);
  }

  return (
    <Link
      to={`/products/${product.slug}`}
      style={{
        textDecoration: "none",
        display: "block",
        pointerEvents: isOutOfStock ? "none" : "auto",
      }}
    >
      <Card
        sx={{
          position: "relative",
          borderRadius: 0,
          boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
          transition: "box-shadow 0.2s ease-in-out",
          backgroundColor: "#f2ece4",
          overflow: "hidden",
          "&:hover": {
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.08)",
            "& .card-image": {
              transform: "scale(1.03)",
            },
          },
        }}
      >
        {/* Listón de SALE (Solo aparece si pones un oldPrice real) */}
        {hasOldPrice && !isOutOfStock && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100px",
              height: "100px",
              zIndex: 3,
              pointerEvents: "none",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "18px",
                left: "-35px",
                width: "140px",
                backgroundColor: "#ff0e0e",
                color: "#ffffff",
                transform: "rotate(-45deg)",
                textAlign: "center",
                py: 0.5,
                boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  fontFamily: "Montserrat, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                }}
              >
                Sale
              </Typography>
            </Box>
          </Box>
        )}

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

        {isOutOfStock && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.636)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 4,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#7BAFAC",
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

        {/* Info inferior - Diseño original intacto */}
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
              color: "#000000",
            }}
          >
            {product.title}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              gap: 1,
            }}
          >
            {/* Si hay un oldPrice simple, lo mostramos tachado antes del precio actual */}
            {hasOldPrice && (
              <Typography
                variant="body2"
                sx={{
                  fontSize: "0.85em",
                  color: "rgba(0, 0, 0, 0.4)",
                  textDecoration: "line-through",
                  fontWeight: 300,
                }}
              >
                {formattedPrice.format(product.oldPrice)}
              </Typography>
            )}

            <Typography
              variant="body1"
              sx={{
                fontSize: "1em",
                color: hasOldPrice ? "#A0522D" : "#ffffff", // Si hay oldPrice (Sale), color terracota. Si no, blanco como antes.
                fontWeight: hasOldPrice ? 700 : 400,
                margin: 0,
              }}
            >
              {priceDisplay}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Link>
  );
}

export default ProductCard;
