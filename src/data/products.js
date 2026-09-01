const img = (file) => `${import.meta.env.BASE_URL}images/products/${file}`;

export const WHATSAPP_NUMBER = "919537126525";
export const PHONE_DISPLAY = "+91 95371 26525";
export const BUSINESS_NOTE = "Available for Wholesale & Retail";
export const EMAIL = "jayeshdulla@gmail.com";
export const LOCATION = "Rajkot";
export const SOCIAL = {
  facebook: "https://www.facebook.com/share/14qg4N1gwD9/",
  instagram: "https://www.instagram.com/jayeshdulla?igsh=aDNsZXk1Nzd0cXE2",
};

export const categories = [
  { id: "wall-decor", name: "Wall Decor", image: img("golden-bell-wall-plaque.webp") },
  {
    id: "table-decor",
    name: "Table Decor",
    image: img("desk-organizer.webp"),
  },
  {
    id: "traditional",
    name: "Traditional Decor",
    image: img("puja-wall-shelf.webp"),
  },
  { id: "custom", name: "Custom Creations", image: img("table-decor-display.webp") },
];

export const products = [
  {
    id: "golden-bell-wall-plaque",
    name: "Golden Bell Wall Plaque",
    price: 300,
    category: "wall-decor",
    rating: 4.9,
    reviews: 18,
    bestSeller: true,
    inStock: true,
    material: "Bamboo sticks, Metal bell, Artificial flowers, Braided cord",
    size: "Approx. 18 × 8 inch",
    color: "Gold, Pink & Multicolor",
    image: img("golden-bell-wall-plaque.webp"),
    gallery: [img("golden-bell-wall-plaque.webp")],
    shortDescription:
      "Tall bamboo wall plaque with golden bell, vine leaves and floral pot.",
    description:
      "Inspired by festive home traditions, this vertical plaque blends natural bamboo sticks with a golden bell, soft florals and ornate borders — ideal for entryways.",
    care: "Wipe gently. Avoid water on painted and metal parts.",
    shipping: "Dispatched within 3–5 working days.",
  },
  {
    id: "ganesha-labh-wall-hanging",
    name: "Ganesha Labh Diamond Wall Hanging",
    price: 350,
    category: "wall-decor",
    rating: 4.8,
    reviews: 12,
    bestSeller: false,
    inStock: true,
    material: "Glitter panel, Rhinestones, Silk tassels, Ganesha motif",
    size: "Approx. 12 × 14 inch",
    color: "Royal Blue, Silver, Gold & Mauve",
    image: img("ganesha-labh-wall-hanging.webp"),
    gallery: [img("ganesha-labh-wall-hanging.webp")],
    shortDescription:
      "Festive diamond wall hanging with Ganesha centre, Labh panels and silk tassels.",
    description:
      "A traditional handcrafted wall piece with a glitter silver Ganesha centre, royal blue Labh side panels, colourful stone borders and elegant mauve silk tassels — perfect for entryways, puja rooms and festive gifting.",
    care: "Dust gently with a soft dry cloth. Keep away from moisture and direct sunlight.",
    shipping: "Dispatched within 3–5 working days. Packed with care.",
  },
  {
    id: "shubh-labh-wooden-diamond-pair",
    name: "Wooden Shubh Labh Diamond Wall Pair",
    price: 200,
    category: "wall-decor",
    rating: 4.7,
    reviews: 9,
    bestSeller: false,
    inStock: true,
    material: "Wooden slats, Laser-cut medallion, Pearls, Silk tassel",
    size: "Approx. 8 × 10 inch (pair)",
    color: "Cream, Brown, Maroon & Gold",
    image: img("shubh-labh-wooden-diamond-pair.webp"),
    gallery: [img("shubh-labh-wooden-diamond-pair.webp")],
    shortDescription:
      "Handcrafted Shubh & Labh wooden pair with diamond-cut medallions and maroon tassels.",
    description:
      "A classic festive wall set featuring cream wooden slats, pearl borders and laser-cut diamond medallions inscribed with Shubh and Labh — finished with elegant maroon silk tassels for doorways and puja spaces.",
    care: "Wipe gently with a dry cloth. Avoid water on wooden and pearl parts.",
    shipping: "Dispatched within 3–5 working days. Packed with care.",
  },
  {
    id: "labh-shield-wall-hanging-pair",
    name: "Labh Shield Festive Wall Hanging Pair",
    price: 170,
    category: "wall-decor",
    rating: 4.6,
    reviews: 8,
    bestSeller: false,
    inStock: true,
    material: "Fabric panel, Rhinestones, Artificial flowers, Silk tassel",
    size: "Approx. 9 × 12 inch (pair)",
    color: "Red, Yellow, Gold & Royal Blue",
    image: img("labh-shield-wall-hanging-pair.webp"),
    gallery: [img("labh-shield-wall-hanging-pair.webp")],
    shortDescription:
      "Bright red Labh shield pair with gold borders, florals and blue silk tassels.",
    description:
      "A vibrant festive wall set with shield-shaped red panels, yellow centres, Labh inscriptions, pearl and stone borders, floral accents and rich royal blue tassels — ideal for doorways and puja decor.",
    care: "Dust gently with a soft dry cloth. Keep away from moisture.",
    shipping: "Dispatched within 3–5 working days. Packed with care.",
  },
  {
    id: "wooden-om-ganesha-wall-hanging",
    name: "Wooden Om Ganesha Wall Hanging",
    price: 350,
    category: "wall-decor",
    rating: 4.8,
    reviews: 10,
    bestSeller: false,
    inStock: true,
    material: "Dark wood, Gold beads, Rhinestones, Embossed motifs",
    size: "Approx. 10 × 14 inch",
    color: "Brown, Orange, Gold & Green",
    image: img("wooden-om-ganesha-wall-hanging.webp"),
    gallery: [img("wooden-om-ganesha-wall-hanging.webp")],
    shortDescription:
      "Handcrafted wooden Om disc with Swastika, lotus and Ganesha hangings.",
    description:
      "A sacred handmade wall piece with a central embossed Om on dark wood, gem-studded gold border, and three beaded drops featuring Swastika panels, a lotus accent and a Ganesha motif — perfect for puja rooms and festive entryways.",
    care: "Wipe gently with a dry cloth. Avoid water on wood and metal parts.",
    shipping: "Dispatched within 3–5 working days. Packed with care.",
  },
  {
    id: "radha-krishna-shubh-labh-wall-hanging",
    name: "Radha Krishna Shubh Labh Wall Hanging",
    price: 300,
    category: "wall-decor",
    rating: 4.9,
    reviews: 11,
    bestSeller: false,
    inStock: true,
    material: "Glitter panel, Gold frame, Rhinestones, Silk tassels",
    size: "Approx. 12 × 14 inch",
    color: "Pink, Gold, Cream & Multicolor",
    image: img("radha-krishna-shubh-labh-wall-hanging.webp"),
    gallery: [img("radha-krishna-shubh-labh-wall-hanging.webp")],
    shortDescription:
      "Diamond Shubh Labh hanging with Radha Krishna, Ganesha and peacock feather.",
    description:
      "An ornate festive wall piece with a pink glitter centre, Radha Krishna figurine, peacock feather, Ganesha top accent, Shubh Labh inscriptions, gem-studded gold frame and elegant silk tassels — ideal for puja rooms and entryways.",
    care: "Dust gently with a soft dry cloth. Keep away from moisture and direct sunlight.",
    shipping: "Dispatched within 3–5 working days. Packed with care.",
  },
  {
    id: "wooden-lotus-shubh-labh-wall-hanging",
    name: "Wooden Lotus Shubh Labh Wall Hanging",
    price: 300,
    category: "wall-decor",
    rating: 4.8,
    reviews: 10,
    bestSeller: false,
    inStock: true,
    material: "Wood panel, Gold beads, Rhinestones, Silk tassels",
    size: "Approx. 10 × 12 inch",
    color: "Magenta, Yellow, Gold & Blue",
    image: img("wooden-lotus-shubh-labh-wall-hanging.webp"),
    gallery: [img("wooden-lotus-shubh-labh-wall-hanging.webp")],
    shortDescription:
      "Krishna flute lotus panel with Shubh Labh, Ganesha accents and peacock pendants.",
    description:
      "A vibrant handcrafted wall piece with a yellow Krishna flute centre, pink lotus, Shubh Labh side panels, Ganesha motifs, gem-studded peacock pendants and magenta silk tassels — perfect for festive doorways and puja decor.",
    care: "Dust gently with a soft dry cloth. Avoid water on wood and bead parts.",
    shipping: "Dispatched within 3–5 working days. Packed with care.",
  },
  {
    id: "acrylic-om-wall-hanging",
    name: "Acrylic Om Wall Hanging",
    price: 150,
    category: "wall-decor",
    rating: 4.7,
    reviews: 7,
    bestSeller: false,
    inStock: true,
    material: "Acrylic panel, Gold frame, Rhinestones, Silk tassels",
    size: "Approx. 8 × 11 inch",
    color: "Royal Blue, Red, Gold & Purple",
    image: img("acrylic-om-wall-hanging.webp"),
    gallery: [img("acrylic-om-wall-hanging.webp")],
    shortDescription:
      "Blue shield Om hanging with gold frame, gem border and purple tassels.",
    description:
      "A compact festive wall piece with a gold-framed red Om on a royal blue acrylic shield, colourful stone border, gold fringe and purple silk tassels — ideal for puja rooms and entryways.",
    care: "Wipe gently with a dry cloth. Avoid water and direct sunlight.",
    shipping: "Dispatched within 3–5 working days. Packed with care.",
  },
  {
    id: "shubh-labh-lotus-floral-wall-hanging",
    name: "Shubh Labh Lotus Floral Wall Hanging",
    price: 250,
    category: "wall-decor",
    rating: 4.8,
    reviews: 9,
    bestSeller: false,
    inStock: true,
    material: "Gold lattice frame, Acrylic motifs, Artificial flowers, Silk tassels",
    size: "Approx. 8 × 14 inch",
    color: "Gold, Red, Teal & Multicolor",
    image: img("shubh-labh-lotus-floral-wall-hanging.webp"),
    gallery: [img("shubh-labh-lotus-floral-wall-hanging.webp")],
    shortDescription:
      "Vertical Shubh Labh hanging with Ganesha, lotus, peacock motifs and florals.",
    description:
      "An elegant festive wall piece with Ganesha top accent, Shubh and Labh star panels, central lotus, peacock feather motifs, red floral bouquet and teal silk tassels — perfect for doorways and puja decor.",
    care: "Dust gently with a soft dry cloth. Keep away from moisture.",
    shipping: "Dispatched within 3–5 working days. Packed with care.",
  },
  {
    id: "wooden-shiva-om-ganesha-wall-hanging",
    name: "Wooden Shiva Om Ganesha Wall Hanging",
    price: 300,
    category: "wall-decor",
    rating: 4.9,
    reviews: 8,
    bestSeller: false,
    inStock: true,
    material: "Dark wood, Laser-cut panel, Gold accents, Beaded chains",
    size: "Approx. 10 × 14 inch",
    color: "Brown, Gold, Yellow & Blue",
    image: img("wooden-shiva-om-ganesha-wall-hanging.webp"),
    gallery: [img("wooden-shiva-om-ganesha-wall-hanging.webp")],
    shortDescription:
      "Three-tier wooden hanging with Om mandala, Shiva plaque and Ganesha drop.",
    description:
      "A sacred handcrafted wall piece with a laser-cut Om mandala top, Shiva silhouette plaque with Shree Shivay Namastubhyam text, decorative bell accent and Ganesha house drop — ideal for puja rooms and spiritual decor.",
    care: "Wipe gently with a dry cloth. Avoid water on wood and metal parts.",
    shipping: "Dispatched within 3–5 working days. Packed with care.",
  },
  {
    id: "acrylic-shubh-labh-banner-pair",
    name: "Acrylic Shubh Labh Banner Pair",
    price: 190,
    category: "wall-decor",
    rating: 4.7,
    reviews: 8,
    bestSeller: false,
    inStock: true,
    material: "Acrylic panel, Gold trim, Artificial flower, Silk tassel",
    size: "Approx. 8 × 12 inch (pair)",
    color: "Yellow, Red, Gold & Purple",
    image: img("acrylic-shubh-labh-banner-pair.webp"),
    gallery: [img("acrylic-shubh-labh-banner-pair.webp")],
    shortDescription:
      "Festive Shubh & Labh banner pair with Ganesha plaques and purple tassels.",
    description:
      "A bright acrylic wall set with yellow ribbed banners, red top accents, Ganesha Shubh and Labh centre plaques, red floral drops and rich purple silk tassels — perfect for doorways and Diwali decor.",
    care: "Dust gently with a soft dry cloth. Keep away from moisture.",
    shipping: "Dispatched within 3–5 working days. Packed with care.",
  },
  {
    id: "peacock-shubh-wall-hanging-pair",
    name: "Peacock Shubh Wall Hanging Pair",
    price: 150,
    category: "wall-decor",
    rating: 4.6,
    reviews: 7,
    bestSeller: false,
    inStock: true,
    material: "Acrylic panel, Golden lace, Silk tassel, Artificial flower",
    size: "Approx. 7 × 7 inch (pair)",
    color: "Gold, Blue, Red & White",
    image: img("peacock-shubh-wall-hanging-pair.webp"),
    gallery: [img("peacock-shubh-wall-hanging-pair.webp")],
    shortDescription:
      "Golden lace square pair with peacock Shubh motif and silk tassels.",
    description:
      "A festive wall set with ornate golden lace frames, white jali grids, colourful peacock Shubh centre plaques, red floral accents and grey and red silk tassels — ideal for doorways and Diwali decor.",
    care: "Dust gently with a soft dry cloth. Keep away from moisture.",
    shipping: "Dispatched within 3–5 working days. Packed with care.",
  },
  {
    id: "wooden-radhe-krishna-wall-hanging",
    name: "Wooden Radhe Krishna Wall Hanging",
    price: 250,
    category: "wall-decor",
    rating: 4.8,
    reviews: 9,
    bestSeller: false,
    inStock: true,
    material: "Dark wood, Printed panel, Gold ornaments, Silk tassel",
    size: "Approx. 8 × 10 inch",
    color: "Brown, Gold, Red & Blue",
    image: img("wooden-radhe-krishna-wall-hanging.webp"),
    gallery: [img("wooden-radhe-krishna-wall-hanging.webp")],
    shortDescription:
      "Radhe-Radhe wooden frame with chibi Radha-Krishna art and colourful tassels.",
    description:
      "A charming devotional wall piece with Radhe-Radhe text, floral top accents, golden side ornaments, cute Radha-Krishna illustration, multicolour silk tassels and a swastika temple drop — perfect for puja rooms and gifting.",
    care: "Wipe gently with a dry cloth. Avoid water on wood.",
    shipping: "Dispatched within 3–5 working days. Packed with care.",
  },
  {
    id: "todla-wall-hanging-pair",
    name: "Todla Wall Hanging Pair",
    price: 300,
    category: "wall-decor",
    rating: 4.8,
    reviews: 8,
    bestSeller: false,
    inStock: true,
    material: "Acrylic panel, Gold accents, Fabric flowers, Silk tassel",
    size: "Approx. 8 × 14 inch (pair)",
    color: "Gold, Green, Pink & Blue",
    image: img("todla-wall-hanging-pair.webp"),
    gallery: [img("todla-wall-hanging-pair.webp")],
    shortDescription:
      "Traditional Todla pair with Ganesha, lotus, swastika and silk tassels.",
    description:
      "A festive side-hanging pair with golden peacock tops, Ganesha accents, gem-studded borders, green lotus centres, swastika motifs, colourful fabric flowers and blue silk tassels — perfect for doorways and puja decor.",
    care: "Dust gently with a soft dry cloth. Keep away from moisture.",
    shipping: "Dispatched within 3–5 working days. Packed with care.",
  },
  {
    id: "desk-organizer",
    name: "Handmade Desk Organizer",
    price: 150,
    category: "table-decor",
    rating: 4.6,
    reviews: 31,
    bestSeller: true,
    inStock: true,
    material: "Popsicle sticks, Rhinestones, Beads, Fabric trim",
    size: "Approx. 10 × 6 × 4 inch",
    color: "Natural Wood & Multicolor",
    image: img("desk-organizer.webp"),
    gallery: [img("desk-organizer.webp")],
    shortDescription:
      "Colourful popsicle-stick desk set with pen holder and open tray.",
    description:
      "Functional and decorative — keeps stationery tidy while adding a cheerful handmade touch to study tables and workspaces.",
    care: "Wipe dry. Do not soak in water.",
    shipping: "Dispatched within 2–4 working days.",
  },
  {
    id: "golden-pillar-vase",
    name: "Golden Peacock Pillar Vase",
    price: 130,
    category: "table-decor",
    rating: 4.6,
    reviews: 16,
    bestSeller: false,
    inStock: true,
    material: "Metal-style vase, Artificial foliage",
    size: "Approx. 10 inch height",
    color: "Gold, Blue & Purple",
    image: img("golden-pillar-vase.webp"),
    gallery: [img("golden-pillar-vase.webp")],
    shortDescription:
      "Gold lattice pillar vase with peacock motifs and purple foliage.",
    description:
      "A statement table accent with embossed peacock panels and lush artificial foliage — perfect for consoles, shelves and gifting.",
    care: "Wipe with dry cloth. Indoor use only.",
    shipping: "Dispatched within 2–4 working days.",
  },
  {
    id: "peacock-pillar-hanging",
    name: "Peacock Pillar Wall Hanging",
    price: 300,
    category: "traditional",
    rating: 4.8,
    reviews: 13,
    bestSeller: false,
    inStock: true,
    material: "Gold pillars, Rhinestones, Artificial flowers",
    size: "Approx. 16 × 12 inch",
    color: "Gold & Multicolor",
    image: img("peacock-pillar-hanging.webp"),
    gallery: [img("peacock-pillar-hanging.webp")],
    shortDescription:
      "Palace-inspired wall hanging with peacock pillars and floral base.",
    description:
      "Two ornate peacock pillars frame a jewelled centre panel above a bed of bright artificial flowers — a festive showpiece for traditional interiors.",
    care: "Dust lightly. Hang indoors only.",
    shipping: "Dispatched within 4–6 working days.",
  },
  {
    id: "puja-wall-shelf",
    name: "Puja Wall Shelf",
    price: 500,
    category: "traditional",
    rating: 4.7,
    reviews: 19,
    bestSeller: false,
    inStock: true,
    material: "Wood shelf, Fabric pillars, Artificial flowers, Metal chain",
    size: "Approx. 14 × 12 inch",
    color: "Pink, Blue & Gold",
    image: img("puja-wall-shelf.webp"),
    gallery: [img("puja-wall-shelf.webp")],
    shortDescription:
      "Hanging puja shelf with golden bell, floral accents and decorative pillars.",
    description:
      "A colourful handmade wall shelf designed for sacred corners — with arched frame, golden bell, floral sides and rich traditional detailing.",
    care: "Dust gently. Keep dry and hang securely.",
    shipping: "Dispatched within 4–6 working days.",
  },
  {
    id: "sweet-home-hanging",
    name: "Sweet Home Wall Hanging",
    price: 300,
    category: "wall-decor",
    rating: 4.5,
    reviews: 22,
    bestSeller: false,
    inStock: true,
    material: "Bamboo slats, Beads, Tassels, Artificial plants",
    size: "Approx. 14 × 12 inch",
    color: "Multicolor",
    image: img("sweet-home-hanging.webp"),
    gallery: [img("sweet-home-hanging.webp")],
    shortDescription:
      "Cheerful “Sweet Home” hanging with tassels and mini balcony garden.",
    description:
      "A warm welcome piece for your entrance or living room — colourful lettering, festive tassels and a tiny balcony filled with greenery.",
    care: "Dust gently. Keep away from moisture.",
    shipping: "Dispatched within 3–5 working days.",
  },
  {
    id: "table-decor-display",
    name: "Monk Table Decor Set",
    price: 450,
    category: "table-decor",
    rating: 4.6,
    reviews: 10,
    bestSeller: false,
    inStock: true,
    material: "Mixed craft materials, Artificial flowers, Wood stand",
    size: "Set display · Approx. 16 inch width",
    color: "Gold, Blue & Multicolor",
    image: img("table-decor-display.webp"),
    gallery: [img("table-decor-display.webp")],
    shortDescription:
      "Complete table décor arrangement with twin vases and monk display stand.",
    description:
      "A ready-to-style handmade set featuring twin decorative vases, floral centre and a tiered monk figurine stand — beautiful for shelves and consoles.",
    care: "Wipe dry. Handle figurines carefully.",
    shipping: "Dispatched within 4–6 working days.",
  },
];

export const galleryImages = products.map((product, index) => ({
  id: index + 1,
  src: product.image,
  alt: product.name,
}));

export function formatPrice(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(categoryId) {
  if (!categoryId || categoryId === "all") return products;
  return products.filter((p) => p.category === categoryId);
}
