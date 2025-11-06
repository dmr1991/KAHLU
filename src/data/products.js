import { Snowboarding } from "@mui/icons-material";

const products = [
  {
    id: "1",
    title: "Jarrón 'Cielo Lavanda'",
    price: 190.0,
    stock: 1,
    description: `
Jarrón modelado de arcilla blanca trabajado en torno.  
Esmalte con sutiles transiciones en tonos celestes, blancos y lilas que le otorgan profundidad y movimiento.  
Una pieza decorativa ideal para acentuar espacios con luz natural.
    `,
    details: [
      "Material: Arcilla blanca",
      "Acabado: Esmalte vitrificado en tonos fríos",
      "Medidas: 15 cm de alto × 10 cm de diámetro",
    ],
    slug: "jarron-pequeno-cielo-lavanda",
    mainImage: "/piezas/Pieza1_1.jpg",
    gallery: [
      "/piezas/Pieza1_1.jpg",
      "/piezas/Pieza1_4.jpg",
      "/piezas/Pieza1_3.jpg",
      "/piezas/Pieza1_2.jpg",
      "/piezas/Pieza1_6.jpg",
    ],
  },
  {
    id: "2",
    title: "Taza 'Marina'",
    price: 200.0,
    stock: 1,
    description: `
Una pieza de cerámica única, modelada con una forma redondeada. Presenta un diseño que resalta el contraste donde la base de arcilla roja oscura se encuentra con un esmalte claro de tonos azul y turquesa. El acabado de esmalte cuenta con bastante movimiento.

Su silueta 'globo' es ideal para sostener en las manos mientras disfrutas de cualquier bebida caliente.
    `,
    details: [
      "Material: Arcilla roja",
      "Acabado: Esmalte azul y turquesa, con arcilla expuesta en la base",
      "Medidas: 9 cm de alto × 8 cm de diámetro",
      "Capacidad: 250 ml",
    ],
    slug: "taza-aurora",
    mainImage: "/piezas/Pieza2_1.jpg",
    gallery: [
      "/piezas/Pieza2_1.jpg",
      "/piezas/Pieza2_4.jpg",
      "/piezas/Pieza2_3.jpg",
      "/piezas/Pieza2_2.jpg",
      "/piezas/Pieza2_5.jpg",
      "/piezas/Pieza2_7.jpg",
      "/piezas/Pieza2_8.jpg",
    ],
  },
  {
    id: "3",
    title: "Taza 'Deep Night'",
    price: 180.0,
    stock: 1,
    description: `
Una pieza que aporta elegancia y un toque dramático a tus momentos de café. Esta taza cilíndrica ha sido modelada en torno, dejando sutiles ondas como textura en la superficie.

Su esmalte exterior es de un azul profundo casi negro en algunas áreas, mientras que el interior sorprende con destellos turquesas y aqua. 
    `,
    details: [
      "Material: Arcilla roja",
      "Acabado: Esmalte en tonos azul profundo/negro",
      "Medidas: 8 cm de alto × 12 cm de diámetro",
      "Apto para lavavajillas",
    ],
    slug: "taza-deep-night",
    mainImage: "/piezas/Pieza3_1.jpg",
    gallery: [
      "/piezas/Pieza3_1.jpg",
      "/piezas/Pieza3_3.jpg",
      "/piezas/Pieza3_4.jpg",
      "/piezas/Pieza3_5.jpg",
      "/piezas/Pieza3_7.jpg",
      "/piezas/Pieza3_8.jpg",
      "/piezas/Pieza3_09.jpg",
      "/piezas/Pieza3_010.jpg",
    ],
  },
  {
    id: "4",
    title: "Taza 'Speckled Snow'",
    price: 170.0,
    stock: 1,
    description: `
Una pieza compacta y robusta, ideal para un morning coffee. Modelada a mano con técnica de pellizco, su forma redondeada rústica y su asa gruesa la hacen muy cómoda de sostener. 

Esmaltada con un azul celeste que crea un efecto 'speckled' sobre la arcilla oscura, dejando la base expuesta para un hermoso contraste.
    `,
    details: [
      "Material: Arcilla roja",
      "Acabado: Esmalte blanco con manchas azules.",
      "Medidas: 8.5 cm de alto × 9 cm de diámetro",
      "Capacidad: 280 ml",
    ],
    slug: "taza-speckled-snow",
    mainImage: "/piezas/Pieza4_1.jpg",
    gallery: [
      "/piezas/Pieza4_1.jpg",
      "/piezas/Pieza4_2.jpg",
      "/piezas/Pieza4_3.jpg",
      "/piezas/Pieza4_4.jpg",
      "/piezas/Pieza4_5.jpg",
      "/piezas/Pieza4_6.jpg",
      "/piezas/Pieza4_7.jpg",
      "/piezas/Pieza4_8.jpg",
      "/piezas/Pieza4_9.jpg",
    ],
  },
  {
    id: "5",
    title: "'Winter' Seashell",
    price: 230.0,
    stock: 1,
    description: `
Una pieza decorativa modelada a mano, inspirada en las formas naturales del espiral de las conchas marinas.

Su esmalte mezcla blancos cremosos y azules leves con el tono cálido de la arcilla roja, dándole una apariencia de tesoro antiguo. 
    `,
    details: [
      "Material: Arcilla roja",
      "Acabado: Esmalte blanco crema con tonos azules.",
      "Uso: Decorativo",
      "Medidas: 8.5 cm de alto × 9 cm de diámetro",
    ],
    slug: "winter-seashell",
    mainImage: "/piezas/Pieza7_1.jpg",
    gallery: [
      "/piezas/Pieza7_1.jpg",
      "/piezas/Pieza7_2.jpg",
      "/piezas/Pieza7_3.jpg",
      "/piezas/Pieza7_4.jpg",
    ],
  },

  {
    id: "6",
    title: "Dúo de Trinket Dishes 'Winter'",
    price: 120.0,
    stock: 1,
    description: `
Un encantador par de platitos funcionales, perfectos para organizar anillos, aretes, u otros.

Modelados en torno, presentan un esmalte en tonos celestes y blancos con un borde sutilmente oscuro.
    `,
    details: [
      "Material: Arcilla roja",
      "Acabado: Esmalte blanco con tonos azules.",
      "Uso: Trinket dishes (para joyas y objetos pequeños)",
      "Medidas: 8.5 cm de alto × 9 cm de diámetro",
      "Venta: Se venden en Set de 2.",
    ],
    slug: "duo-trinket-dishes-winter",
    mainImage: "/piezas/Pieza6_1.jpg",
    gallery: [
      "/piezas/Pieza6_1.jpg",
      "/piezas/Pieza6_2.jpg",
      "/piezas/Pieza6_3.jpg",
    ],
  },
  {
    id: "7",
    title: "Salsero 'Tierra y Agua'",
    price: 150.0,
    stock: 1,
    description: `
Una pieza funcional de cerámica, ideal para servir salsas, cremas o aderezos con un toque de distinción. Modelada a mano con el torno, en arcilla roja oscura, tiene un cómodo pico vertedor.

El exterior deja ver el tono natural y terroso de la arcilla, mientras que el interior está cubierto por un esmalte semi translucido que combina azules profundos y toques aqua. Un contraste elegante entre tierra y agua.
Esmaltada con un azul celeste que crea un efecto 'speckled' sobre la arcilla oscura, dejando la base expuesta para un hermoso contraste.
    `,
    details: [
      "Material: Arcilla roja",
      "Acabado: Esmalte semi translúcido con destellos azules y aqua.",
      "Uso: Salsero, cremero o jarrita para aderezos.",
      "Medidas: 8.5 cm de alto × 9 cm de diámetro",
      "Capacidad: 280 ml",
    ],
    slug: "salsero-tierra-y-agua",
    mainImage: "/piezas/Pieza5_1.jpg",
    gallery: [
      "/piezas/Pieza5_1.jpg",
      "/piezas/Pieza5_2.jpg",
      "/piezas/Pieza5_3.jpg",
      "/piezas/Pieza5_4.jpg",
      "/piezas/Pieza5_5.jpg",
      "/piezas/Pieza5_6.jpg",
    ],
  },
  {
    id: "8",
    title: "Taza 'Gold Breeze'",
    price: 180.0,
    stock: 1,
    description: `
Esta taza, modelada a en torno con una silueta baja y ancha, está diseñada para ser cómoda y estable. Su esmalte tiene una mezcla de azules suaves y blancos, con sutiles puntos dorados y óxido que le dan una textura visual única y cálida.
    `,
    details: [
      "Material: Arcilla roja",
      "Acabado: Esmalte brillante en tonos azul/blanco con acentos óxido.",
      "Medidas: 8.5 cm de alto × 9 cm de diámetro",
    ],
    slug: "taza-gold-breeze",
    mainImage: "/piezas/Pieza8_1.jpg",
    gallery: [
      "/piezas/Pieza8_1.jpg",
      "/piezas/Pieza8_2.jpg",
      "/piezas/Pieza8_3.jpg",
      "/piezas/Pieza8_4.jpg",
      "/piezas/Pieza8_5.jpg",
      "/piezas/Pieza8_6.jpg",
      "/piezas/Pieza8_7.jpg",
    ],
  },
  {
    id: "9",
    title: "Taza 'Deep Sea Waves'",
    price: 200.0,
    stock: 1,
    description: `
Esta taza es una pieza de carácter que destaca por su forma suave y su textura de olas. El esmalte, aplicado a mano, crea un efecto de profundidad al fusionar tonos azul marino, negro y vibrantes destellos aqua/verde en las olas de la taza.

Es una taza cómoda, robusta y visualmente única para disfrutar de tu bebida favorita.
    `,
    details: [
      "Material: Arcilla roja",
      "Acabado: Esmalte blanco con tonos azules.",
      "Uso: Trinket dishes (para joyas y objetos pequeños)",
      "Medidas: 8.5 cm de alto × 9 cm de diámetro",
      "Venta: Se venden en Set de 2.",
    ],
    slug: "taza-deep-sea-waves",
    mainImage: "/piezas/Pieza9_1.jpg",
    gallery: [
      "/piezas/Pieza9_1.jpg",
      "/piezas/Pieza9_2.jpg",
      "/piezas/Pieza9_3.jpg",
      "/piezas/Pieza9_4.jpg",
      "/piezas/Pieza9_5.jpg",
      "/piezas/Pieza9_6.jpg",
      "/piezas/Pieza9_7.jpg",
      "/piezas/Pieza9_8.jpg",
      "/piezas/Pieza9_9.jpg",
    ],
  },
  {
    id: "10",
    title: "Azucarera 'Winter Shore'",
    price: 200.0,
    stock: 1,
    description: `
Una linda pieza funcional con tapa, ideal como azucarera, para guardar té, o pequeños tesoros. Este contenedor cilíndrico ha sido modelado a mano en torno, dejando la base en el tono natural de la arcilla oscura para un contraste sobrio.

El esmalte fluye en capas de azul profundo, blanco y toques óxido, evocando olas frías rompiendo en la orilla. 
    `,
    details: [
      "Material: Arcilla roja",
      "Acabado: Esmalte fluido en capas de tonos fríos y cálidos",
      "Uso: Azucarera, salero, o para guardar té por ejemplo.",
      "Medidas: 8.5 cm de alto × 9 cm de diámetro",
      "Capacidad: 280 ml",
    ],
    slug: "azucarera-winter-shore",
    mainImage: "/piezas/Pieza10_1.jpg",
    gallery: [
      "/piezas/Pieza10_1.jpg",
      "/piezas/Pieza10_2.jpg",
      "/piezas/Pieza10_3.jpg",
      "/piezas/Pieza10_4.jpg",
      "/piezas/Pieza10_5.jpg",
      "/piezas/Pieza10_6.jpg",
    ],
  },
  {
    id: "11",
    title: "Pichelito 'Gold Breeze'",
    price: 180.0,
    stock: 1,
    description: `
Una pieza funcional y con carácter, ideal como cremera, jarra de leche o para servir cualquier aderezo. Su diseño cilíndrico ha sido modelado en torno e incluye un pico vertedor.

El esmalte combina azules profundos y blancos suaves con manchas doradas y óxido.     `,
    details: [
      "Material: Arcilla roja",
      "Uso: Cremera, jarra de leche/aderezos, salserito.",
      "Acabado: Esmalte con tonos azules y acentos óxido/dorados",
      "Medidas: 8.5 cm de alto × 9 cm de diámetro",
    ],
    slug: "pichelito-gold-breeze",
    mainImage: "/piezas/Pieza11_1.jpg",
    gallery: ["/piezas/Pieza11_1.jpg", "/piezas/Pieza11_2.jpg"],
  },
  {
    id: "12",
    title: "Taza 'Ballena'",
    price: 250,
    stock: 2,
    description: `
Piezas de colección que fusionan arte y funcionalidad. Estas tazas han sido modeladas en torno y su asa a mano. Con forma redondeada y con un detalle escultural distintivo: el asa se fusiona con una aleta de ballena texturizada.
Dos piezas disponibles en distintas capacidades y colores. La grande mas oscura con tonos azules y la pequeña en tonos aqua y turquesa.
Los estilos de estos esmaltes crean un efecto acuático que combina azules profundos y blancos espumosos, reforzando la inspiración marina.
    `,
    details: [
      "Material: Arcilla roja",
      "Acabado: Esmalte blanco con tonos azules.",
      "Capacidades: 250ml la pequeña, 350ml la grande.",
      "Venta: Se venden en Set de 2, o por separado. Consultar precio individual o del set.",
    ],
    slug: "taza-ballena",
    mainImage: "/piezas/Pieza12_1.jpg",
    gallery: [
      "/piezas/Pieza12_1.jpg",
      "/piezas/Pieza12_2.jpg",
      "/piezas/Pieza12_3.jpg",
      "/piezas/Pieza12_4.jpg",
      "/piezas/Pieza12_5.jpg",
      "/piezas/Pieza12_6.jpg",
      "/piezas/Pieza12_7.jpg",
      "/piezas/Pieza12_8.jpg",
    ],
  },
  {
    id: "13",
    title: "Salserito 'Tierra y Agua'",
    price: 90.0,
    stock: 1,
    description: `
Salserito con perfil bajo y un práctico pico vertedor. Esta pieza ha sido modelada a mano con técnica de pellizco y presenta la calidez de la arcilla roja expuesta en su base.

Su esmalte es una mezcla de tonos aqua, azul y potentes blanco, creando. Es ideal para servir salsas, aderezos o para degustaciones.
    `,
    details: [
      "Material: Arcilla roja",
      "Acabado: Esmalte fluido con colores aqua, azul y translúcido",
      "Medidas: 8.5 cm de alto × 9 cm de diámetro",
    ],
    slug: "salserito-tierra-y-agua",
    mainImage: "/piezas/Pieza13_1.jpg",
    gallery: [
      "/piezas/Pieza13_1.jpg",
      "/piezas/Pieza13_2.jpg",
      "/piezas/Pieza13_3.jpg",
      "/piezas/Pieza13_4.jpg",
    ],
  },
  {
    id: "14",
    title: "Duo de tazas 'Frost'",
    price: 230.0,
    stock: 2,
    description: `
Parejita de tazas de cerámica con una silueta redondeada y baja, con estilo taza de capuccino. Modeladas a mano y presentan un esmalte de base blanco frío con puntos de azul pálido.`,
    details: [
      "Material: Arcilla roja",
      "Venta: En stock hay 2 parejas, solo se venden en dúo.",
      "Acabado: Esmalte con tonos blancos y azules.",
      "Medidas: 8.5 cm de alto × 9 cm de diámetro",
    ],
    slug: "duo-tazas-frost",
    mainImage: "/piezas/Pieza14_1.jpg",
    gallery: [
      "/piezas/Pieza14_1.jpg",
      "/piezas/Pieza14_2.jpg",
      "/piezas/Pieza14_3.jpg",
      "/piezas/Pieza14_4.jpg",
      "/piezas/Pieza14_5.jpg",
      "/piezas/Pieza14_6.jpg",
      "/piezas/Pieza14_7.jpg",
      "/piezas/Pieza14_8.jpg",
      "/piezas/Pieza14_9.jpg",
    ],
  },
  {
    id: "15",
    title: "Azucarera 'Winter Shore'",
    price: 220,
    stock: 1,
    description: `
Una linda pieza funcional con tapa, ideal como azucarera, para guardar té, o pequeños tesoros. Este contenedor con forma leve de globo ha sido modelado a mano en torno, dejando la base en el tono natural de la arcilla oscura para un contraste sobrio.

El esmalte fluye en capas de azul profundo, blanco y toques óxido, evocando olas frías rompiendo en la orilla. 
    `,
    details: [
      "Material: Arcilla roja",
      "Acabado: Esmalte blanco con tonos azules y óxido.",
      "Uso: Azucarera, salero, o para guardar té por ejemplo.",
      "Medidas: 8.5 cm de alto × 9 cm de diámetro",
      "Capacidad: 280 ml",
    ],
    slug: "azucarera-winter-shore2",
    mainImage: "/piezas/Pieza15_1.jpg",
    gallery: [
      "/piezas/Pieza15_1.jpg",
      "/piezas/Pieza15_2.jpg",
      "/piezas/Pieza15_3.jpg",
      "/piezas/Pieza15_4.jpg",
    ],
  },
];

export default products;
