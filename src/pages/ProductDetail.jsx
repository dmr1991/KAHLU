import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import CustomButton from "../components/CustomButton";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import products from "../data/products";

function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <Box textAlign="center" p={5}>
        <Typography variant="h5" color={theme.palette.terracota.main}>
          Producto no encontrado
        </Typography>
        <Button
          variant="outlined"
          sx={{
            mt: 2,
            borderColor: theme.palette.terracota.main,
            color: theme.palette.terracota.main,
            "&:hover": { backgroundColor: theme.palette.arenaPalida.main },
          }}
          onClick={() => navigate("/")}
        >
          Volver al Catálogo
        </Button>
      </Box>
    );
  }

  const currencyFormatter = new Intl.NumberFormat("es-GT", {
    style: "currency",
    currency: "GTQ",
  });

  // --- LÓGICA DE PRECIO ACTUALIZADA ---
  let priceDisplay;
  if (product.price && typeof product.price === "object" && product.price.pareja) {
    // Formato: Unidad Q200.00 – Pareja: Q370.00
    priceDisplay = `Unidad ${currencyFormatter.format(product.price.individual)} – Pareja ${currencyFormatter.format(product.price.pareja)}`;
  } else {
    // Formato normal: Q200.00
    priceDisplay = currencyFormatter.format(product.price);
  }

  const oldPriceText = product.oldPrice ? currencyFormatter.format(product.oldPrice) : null;

  const stockMessage =
    product.stock > 0
      ? `En stock: ${product.stock} unidades`
      : "Agotado temporalmente.";

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent="center"
      alignItems="flex-start"
      gap={6}
      p={{ xs: 2, md: 4 }}
      sx={{
        backgroundColor: theme.palette.background.default,
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      {/* 🖼️ Carrusel de imágenes */}
      <Box
        flex={{ xs: "1", md: "1.5" }}
        width="100%"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          style={{
            width: "100%",
            maxWidth: "700px",
            "--swiper-navigation-color": theme.palette.terracota.main,
            "--swiper-pagination-color": theme.palette.terracota.main,
          }}
        >
          {product.gallery.map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <Box
                component="img"
                src={imgSrc}
                alt={`${product.title} vista ${index + 1}`}
                sx={{
                  width: "100%",
                  height: { xs: 320, sm: 380, md: 600 },
                  objectFit: "contain",
                  backgroundColor: "#f8f8f8",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* 📋 Información del producto */}
      <Box
        flex={{ xs: "1", md: "1" }}
        width="100%"
        textAlign={{ xs: "center", md: "left" }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: theme.typography.fontFamily,
            color: theme.palette.terracota.main,
            mb: 2,
            fontWeight: 600,
          }}
        >
          {product.title}
        </Typography>

        {/* 💰 Precio (Con soporte para oferta por pareja) */}
        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: { xs: "center", md: "flex-start" },
            gap: 2,
            mb: 2,
          }}
        >
          {oldPriceText && (
            <Typography
              variant="h6"
              sx={{
                color: "rgba(0, 0, 0, 0.4)",
                textDecoration: "line-through",
                fontWeight: 400,
                fontSize: "1.1rem",
              }}
            >
              {oldPriceText}
            </Typography>
          )}
          <Typography
            variant="h6"
            sx={{
              color: oldPriceText ? theme.palette.terracota.main : "#7BAFAC", 
              fontWeight: 700,
            }}
          >
            {priceDisplay}
          </Typography>
        </Box>

        {/* 📝 Descripción */}
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontFamily: "'Raleway', sans-serif",
            fontSize: "1.05rem",
            lineHeight: 1.6,
            color: "#444",
            whiteSpace: "pre-line",
          }}
        >
          {product.description}
        </Typography>

        {/* 🔹 Bullets de detalles */}
        {product.details && product.details.length > 0 && (
          <Box
            component="ul"
            sx={{
              pl: 3,
              mb: 4,
              color: "#444",
              fontFamily: "'Raleway', sans-serif",
              fontSize: "1rem",
              textAlign: { xs: "left", md: "left" },
              "& li": { marginBottom: "6px" },
            }}
          >
            {product.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </Box>
        )}

        {/* ✅ Stock */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            mb: 4,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              px: 2,
              py: 1,
              borderRadius: "6px",
              fontWeight: 600,
              backgroundColor:
                product.stock > 0
                  ? "rgba(138, 141, 95, 0.15)"
                  : "rgba(162, 103, 76, 0.15)",
              color:
                product.stock > 0
                  ? theme.palette.verdeOliva.main
                  : theme.palette.terracota.main,
            }}
          >
            {stockMessage}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <CustomButton onClick={() => navigate("/contact")}>
            Consultar disponibilidad
          </CustomButton>
        </Box>
      </Box>

      <style>
        {`
          .swiper-button-next svg,
          .swiper-button-prev svg {
            filter: drop-shadow(0 0 1px white)
              drop-shadow(0 0 3px white)
              drop-shadow(0 0 6px rgba(255,255,255,0.9));
          }
        `}
      </style>
    </Box>
  );
}

export default ProductDetail;