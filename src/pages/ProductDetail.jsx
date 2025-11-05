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

  const formattedPrice = new Intl.NumberFormat("es-GT", {
    style: "currency",
    currency: "GTQ",
  }).format(product.price);

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
      {/* Carrusel de imágenes */}
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
                  borderRadius: 0,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Información del producto */}
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
          }}
        >
          {product.title}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mb: 2,
          }}
        >
          {formattedPrice}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
          }}
        >
          {product.description}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color:
              product.stock > 0
                ? theme.palette.verdeOliva.main
                : "text.secondary",
            mb: 3,
          }}
        >
          {stockMessage}
        </Typography>

        <CustomButton onClick={() => navigate("/contact")}>
          Consultar disponibilidad
        </CustomButton>
      </Box>

      {/* Estilos adicionales del Swiper */}
      <style>
        {`
          .swiper-button-next svg,
          .swiper-button-prev svg {
          filter: drop-shadow(0 0 1px white) drop-shadow(0 0 3px white) drop-shadow(0 0 6px rgba(255,255,255,0.9));
          }

          .swiper-button-next:hover svg,
          .swiper-button-prev:hover svg {
              filter: drop-shadow(0 0 2px white) drop-shadow(0 0 6px white) drop-shadow(0 0 12px rgba(255,255,255,1));
            transform: scale(1.2);
            transition: all 0.2s ease;
          }
        `}
      </style>
    </Box>
  );
}

export default ProductDetail;
