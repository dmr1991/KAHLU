const products = [
  // ================= NUEVOS PLACEHOLDER =================
  {
    id: "20",
    title: "'Space' Mug (Sin Asa)",
    price: {
    individual: 200,
    pareja: 370
  },
    stock: 2,
    description: `Taza modelada a mano en torno, con un diseño minimalista sin asa estilo tumbler. Su esmalte reactivo en tonos galácticos crea transiciones únicas entre púrpuras profundos y verdes nebulosa. Una pieza de carácter moderno, ideal para transformar el ritual de tus bebidas frías o calientes.`,
    details: [
      "Material: Arcilla color vainilla",
      "Acabado: Esmalte negro con tonos verdes, azules y morados.",
      "Venta: Se vende por unidad o la pareja mientras haya existencias.",
      "Capacidad: 450ml",
      ,
    ],
    slug: "space-mug-",
    mainImage: "/piezas/Dec2025/Kahlu_ID20_00008.jpg",
    gallery: [
      "/piezas/Dec2025/Kahlu_ID20_00001.jpg",
      "/piezas/Dec2025/Kahlu_ID20_00003.jpg",
      "/piezas/Dec2025/Kahlu_ID20_00002.jpg",
      "/piezas/Dec2025/Kahlu_ID20_00004.jpg",
      "/piezas/Dec2025/Kahlu_ID20_00005.jpg",
      "/piezas/Dec2025/Kahlu_ID20_00006.jpg",
      "/piezas/Dec2025/Kahlu_ID20_00007.jpg",
    ],
  },
  {
    id: "21",
    title: "'Cream Burgundy' Coffee Cup",
    price: 170,
    stock: 1,
    description: `Una pieza diseñada para los amantes del detalle. Esta taza de café, modelada a mano sobre arcilla clara en tono vainilla, presenta una silueta redondeada, pensada para disfrutar de un cappuccino perfecto.

El esmalte combina la suavidad del color crema con la profundidad de un tono burgundy en la base, logrando un contraste sofisticado y clásico. Una pieza que aporta calidez y elegancia a cualquier ritual de mañana.`,
    details: [
      "Material: Arcilla color vainilla",
      "Acabado: Esmalte color crema con speckles cafés y color burgundy en la base.",
      "Capacidad: 225ml",
    ],
    slug: "cream-burgundy-coffee-cup",
    mainImage: "/piezas/Dec2025/Kahlu_ID21_00003.jpg",
    gallery: [
      "/piezas/Dec2025/Kahlu_ID21_00001.jpg",
      "/piezas/Dec2025/Kahlu_ID21_00003.jpg",
      "/piezas/Dec2025/Kahlu_ID21_00004.jpg",
      "/piezas/Dec2025/Kahlu_ID21_00002.jpg",
      "/piezas/Dec2025/Kahlu_ID21_00005.jpg",
    ],
  },
  {
    id: "22",
    title: "'Seaside' Mug (Sin Asa)",
    price: 185,
    stock: 1,
    description: `Taza modelada en arcilla tono vainilla, con un diseño minimalista sin asa tipo tumbler. Su acabado en esmalte celeste se funde suavemente con la base color arena, evocando la calma de un paisaje costero. Una pieza versátil e ideal tanto para bebidas frías como calientes.`,
    details: [
      "Material: Arcilla color vainilla",
      "Acabado: Esmalte color turquesa por dentro. Por fuera el esmalte de base es color arena y se sobrelapa con el turquesa que predomina en la parte superior.",
      "Capacidad: 350ml",
    ],
    slug: "seaside-mug",
    mainImage: "/piezas/Dec2025/Kahlu_ID22_00003.jpg",
    gallery: [
      "/piezas/Dec2025/Kahlu_ID22_00001.jpg",
      "/piezas/Dec2025/Kahlu_ID22_00003.jpg",
      "/piezas/Dec2025/Kahlu_ID22_00004.jpg",
      "/piezas/Dec2025/Kahlu_ID22_00002.jpg",
      "/piezas/Dec2025/Kahlu_ID22_00005.jpg",
    ],
  },
  {
    id: "23",
    title: "'Rosie' Mug (Sin Asa)",
    price: 200,
    stock: 1,
    description: `Taza modelada en arcilla tono vainilla con un diseño minimalista sin asa. El esmalte combina matices rosados y palo rosa que se funden de forma natural, creando un movimiento suave y equilibrado`,
    details: [
      "Material: Arcilla color vainilla",
      "Acabado: Esmalte color rosado y blanco y por fuera la base de arcilla expuesta crea un contraste sutil.",
      "Capacidad: 400ml",
    ],
    slug: "rosie-mug",
    mainImage: "/piezas/Dec2025/Kahlu_ID23_00001.jpg",
    gallery: [
      "/piezas/Dec2025/Kahlu_ID23_00001.jpg",
      "/piezas/Dec2025/Kahlu_ID23_00002.jpg",
      "/piezas/Dec2025/Kahlu_ID23_00003.jpg",
      "/piezas/Dec2025/Kahlu_ID23_00004.jpg",
      "/piezas/Dec2025/Kahlu_ID23_00005.jpg",
    ],
  },
  {
    id: "24",
    title: "'Baby Turtle' Trinket Dish",
    price: 160,
    stock: 1,
    description: `Una pieza narrativa que captura la esencia de las tortuguitas bebés. Este pequeño plato joyero presenta una delicada tortuga marina bebé, situada en la transición exacta donde la arena se encuentra con el agua.
    
    Siguiendo la estética de la línea 'Seaside', el esmalte en tonos arena y turquesa se funde orgánicamente para recrear la serenidad de la costa. Es el lugar perfecto para resguardar tus anillos, joyas o pequeños tesoros diarios con un toque de encanto natural.`,
    details: [
      "Material: Arcilla color vainilla",
      "Acabado: Esmalte color turquesa y arena.",
      "Medidas: 15cm de diámetro.",
    ],
    slug: "baby-turtle-trinket-dish",
    mainImage: "/piezas/Dec2025/Kahlu_ID24_00001.jpg",
    gallery: [
      "/piezas/Dec2025/Kahlu_ID24_00001.jpg",
      "/piezas/Dec2025/Kahlu_ID24_00002.jpg",
      "/piezas/Dec2025/Kahlu_ID24_00003.jpg",
    ],
  },
  {
    id: "25",
    title: "'Coral Seashell' Trinket Dish",
    price: 280,
    stock: 1,
    description: `Pieza inspirada en los tesoros marinos. Este plato joyero ha sido modelado totalmente a mano con una silueta basada en la forma de una concha marina abierta, capturando la esencia del océano en una pieza elegante y funcional.

El esmalte en estilo 'Coral' presenta una base blanca luminosa con sutiles matices en tonos rosados y violetas que se funden entre las ondas naturales de la cerámica. Es el objeto perfecto para organizar tus joyas más preciadas o para funcionar como un acento decorativo único en tu espacio.`,
    details: [
      "Material: Arcilla color vainilla",
      "Acabado: Esmalte colores blanco, con tonos morados y rosados.",
      "Medidas: 14cm de altura.",
    ],
    slug: "coral-seashell-trinket-dish",
    mainImage: "/piezas/Dec2025/Kahlu_ID25_00002.jpg",
    gallery: [
      "/piezas/Dec2025/Kahlu_ID25_00001.jpg",
      "/piezas/Dec2025/Kahlu_ID25_00002.jpg",
      "/piezas/Dec2025/Kahlu_ID25_00003.jpg",
      "/piezas/Dec2025/Kahlu_ID25_00004.jpg",
      "/piezas/Dec2025/Kahlu_ID25_00005.jpg",
      "/piezas/Dec2025/Kahlu_ID25_00006.jpg",
      "/piezas/Dec2025/Kahlu_ID25_00007.jpg",
    ],
  },
  {
    id: "26",
    title: "'By the fire' Mug",
    price: 200,
    stock: 1,
    description: `Esta pieza es modelada a mano en torno. Destaca por su juego de esmaltes en bandas verticales que combinan tonos crema, ocre y un azul claro.

Es una taza de carácter robusto y tacto artesanal, donde el esmalte fluye de manera orgánica sobre la arcilla, creando una sensación visual acogedora. Con su diseño clásico, es la compañera ideal para disfrutar de una bebida caliente durante una mañana lenta o una lectura tranquila al finalizar el día.`,
    details: [
      "Material: Arcilla color vainilla",
      "Acabado: Esmalte color crema por dentro. Por fuera con diseño tricolor: celeste, vainilla y color ocre.",
      "Capacidad: 470ml",
    ],
    slug: "by-the-fire-mug",
    mainImage: "/piezas/Dec2025/Kahlu_ID26_00003.jpg",
    gallery: [
      "/piezas/Dec2025/Kahlu_ID26_00001.jpg",
      "/piezas/Dec2025/Kahlu_ID26_00002.jpg",
      "/piezas/Dec2025/Kahlu_ID26_00003.jpg",
      "/piezas/Dec2025/Kahlu_ID26_00004.jpg",
      "/piezas/Dec2025/Kahlu_ID26_00005.jpg",
    ],
  },
  {
    id: "27",
    title: "'Coral' Thumb Cup",
    price: 200,
    stock: 1,
    description: `Esta taza estilo tumbler combina una silueta estilizada con una experiencia táctil única. Presenta hendiduras modeladas manualmente que ofrecen un agarre ergonómico y cómodo.

El esmalte estilo 'Coral' funde una base blanca luminosa con matices rosados y violetas que se asientan suavemente sobre la arcilla expuesta en la base. Una pieza elegante y contemporánea, ideal para quienes buscan diseño funcional con un toque de color sutil.`,
    details: [
      "Material: Arcilla color vainilla",
      "Acabado: Esmalte reactivo color blanco con matices rosado y violeta.",
      "Capacidad: 500ml",
    ],
    slug: "coral-thumb-cup",
    mainImage: "/piezas/Dec2025/Kahlu_ID27_00002.jpg",
    gallery: [
      "/piezas/Dec2025/Kahlu_ID27_00001.jpg",
      "/piezas/Dec2025/Kahlu_ID27_00002.jpg",
      "/piezas/Dec2025/Kahlu_ID27_00003.jpg",
    ],
  },
  {
    id: "28",
    title: "'Glacier' Thumb Cup",
    price: 190,
    stock: 1,
    description: `Una pieza que equilibra la frialdad del paisaje ártico con la calidez del trabajo artesanal. Esta taza alta, modelada en torno, destaca por sus hendiduras laterales moldeadas a mano, diseñadas para que tus dedos encajen de forma natural en la pieza.

Su esmalte en tonos celestes y turquesas fluye de manera orgánica sobre la arcilla clara, creando una textura visual que recuerda al hielo en el océano. Es una pieza moderna, ergonómica y perfecta para disfrutar de una bebida refrescante o un té reconfortante.`,
    details: [
      "Material: Arcilla color vainilla",
      "Acabado: Esmalte reactivo color turquesa y celeste.",
      "Capacidad: 35ml",
    ],
    slug: "glacier-thumb-cup",
    mainImage: "/piezas/Dec2025/Kahlu_ID28_00003.jpg",
    gallery: [
      "/piezas/Dec2025/Kahlu_ID28_00001.jpg",
      "/piezas/Dec2025/Kahlu_ID28_00002.jpg",
      "/piezas/Dec2025/Kahlu_ID28_00003.jpg",
      "/piezas/Dec2025/Kahlu_ID28_00004.jpg",
      "/piezas/Dec2025/Kahlu_ID28_00005.jpg",
    ],
  },
  // ================= EXISTENTES =================
  {
    id: "7",
    title: "Salsero 'Tierra y Agua'",
    price: 120.0,
    oldPrice: 150,
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
      "Medidas: 2.5 pulgadasde alto × 4.5 pulgadas de diámetro",
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
      "Medidas: 3.5 pulgadas de diámetro × 4.5 pulgadas de altura",
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
      "Medidas: 4 pulgadas de alto × 3.3 pulgadas de diámetro",
    ],
    slug: "pichelito-gold-breeze",
    mainImage: "/piezas/Pieza11_1.jpg",
    gallery: ["/piezas/Pieza11_1.jpg", "/piezas/Pieza11_2.jpg"],
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
      "Medidas: 1.7 pulgadas de alto × 4.2 pulgadas de diámetro",
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
    id: "16",
    title: "Azucarera 'Winter Shore' #3",
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
      "Medidas: 4.5 pulgadas de alto × 3.5 pulgadas de diámetro",
    ],
    slug: "azucarera-winter-shore3",
    mainImage: "/piezas/Pieza16_1.jpg",
    gallery: [
      "/piezas/Pieza16_1.jpg",
      "/piezas/Pieza16_2.jpg",
      "/piezas/Pieza16_3.jpg",
      "/piezas/Pieza16_4.jpg",
    ],
  },
  {
    id: "18",
    title: "Plato de cena 'Snow'",
    price: 150,
    oldPrice: 170,
    stock: 4,
    description: `
Plato plano, ideal para servir comidas principales, postres o aperitivos con carácter. Modelado a mano con técnica de placas y pellizco, presenta una forma sencilla, rústica y atemporal con un sutil borde levantado.

Su esmalte crea un efecto de nieve, fusionando tonos blanco, azules claros y oscuros. Se percibe en los bordes la arcilla roja bajo un esmalte translúcido.
    `,
    details: [
      "Material: Arcilla roja",
      "Acabado: Esmalte blanco con tonos azules claros y oscuros.",
      "Medidas: 8.7 pulgadas de diámetro",
    ],
    slug: "plato-cena-snow",
    mainImage: "/piezas/Pieza18_1.jpg",
    gallery: [
      "/piezas/Pieza18_1.jpg",
      "/piezas/Pieza18_2.jpg",
      "/piezas/Pieza18_3.jpg",
      "/piezas/Pieza18_4.jpg",
      "/piezas/Pieza18_5.jpg",
      "/piezas/Pieza18_6.jpg",
      "/piezas/Pieza18_7.jpg",
      "/piezas/Pieza18_8.jpg",
      "/piezas/Pieza18_9.jpg",
    ],
  },
  {
    id: "19",
    title: "Bowl de Cereal 'Snow'",
    price: 100,
    oldPrice: 120,
    stock: 1,
    description: `
Bowl profundo, ideal para servir cereales, yogurt, berries, sopas o guisos. Modelado a mano con torno, presenta una forma sencilla y rústica.

Su esmalte crea un efecto de nieve, fusionando tonos blanco, azules claros y oscuros. Se percibe en en ciertas areas la arcilla roja bajo un esmalte translúcido.
    `,
    details: [
      "Material: Arcilla roja",
      "Acabado: Esmalte blanco con tonos azules claros y oscuros.",
      "Medidas: 2.5 pulgadas de alto × 5.5 pulgadas de diámetro",
    ],
    slug: "bowl-cereal-snow",
    mainImage: "/piezas/Pieza19_4.jpg",
    gallery: ["/piezas/Pieza19_4.jpg", "/piezas/Pieza19_6.jpg"],
  },
];

export default products;
