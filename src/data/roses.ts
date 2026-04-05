export interface Rose {
  id: string;
  number: string;
  name: string;
  method?: string;
  type?: string;
  color: string;
  description: string;
  image: string;
  seasonIds: string[];
}

export const roseColors = [
  { id: "all", name: "Todas" },
  { id: "rojo", name: "Rojo" },
  { id: "blanco", name: "Blanco & Crema" },
  { id: "rosa", name: "Rosa" },
  { id: "lavanda", name: "Lavanda" },
  { id: "amarillo", name: "Amarillo" },
  { id: "tinturado", name: "Tinturado" },
] as const;

import rosePink from "@/assets/rose-pink.png";
import roseRed from "@/assets/rose-red.png";
import roseLavender from "@/assets/rose-lavender.png";
import roseWhite from "@/assets/rose-white.png";
import rosePeach from "@/assets/rose-peach.png";
import roseYellow from "@/assets/rose-yellow.png";
import roseBicolor from "@/assets/rose-bicolor.png";
import roseBlue from "@/assets/rose-blue.png";

export const roses: Rose[] = [
  {
    id: "sweet-mother",
    number: "01",
    name: "Sweet Mother",
    method: "Absorción",
    description:
      "Rosa tintada en tonos rosa pastel con degradados suaves. Perfecta para expresar ternura y gratitud maternal.",
    image: rosePink,
    seasonIds: ["madres"],
  },
  {
    id: "eternal-love",
    number: "02",
    name: "Eternal Love",
    type: "Fresca",
    description:
      "Rosa roja de tallo largo con pétalos aterciopelados. El clásico símbolo del amor profundo e incondicional.",
    image: roseRed,
    seasonIds: ["madres", "san_valentin"],
  },
  {
    id: "lavender-dream",
    number: "03",
    name: "Lavender Dream",
    method: "Absorción",
    description:
      "Delicada rosa lavanda con matices violeta. Evoca serenidad, elegancia y un toque de misterio.",
    image: roseLavender,
    seasonIds: ["madres", "todo_el_ano"],
  },
  {
    id: "pure-grace",
    number: "04",
    name: "Pure Grace",
    type: "Fresca",
    description:
      "Rosa blanca de pétalos inmaculados. Símbolo de pureza, nuevos comienzos y amor sincero.",
    image: roseWhite,
    seasonIds: ["madres", "navidad", "todo_el_ano"],
  },
  {
    id: "sunset-blush",
    number: "05",
    name: "Sunset Blush",
    type: "Fresca",
    description:
      "Rosa en tonos durazno y coral que recuerda los atardeceres ecuatorianos. Cálida y reconfortante.",
    image: rosePeach,
    seasonIds: ["madres", "san_valentin"],
  },
  {
    id: "golden-joy",
    number: "06",
    name: "Golden Joy",
    type: "Fresca",
    description:
      "Rosa amarilla radiante que transmite alegría, amistad y gratitud. Ideal para iluminar cualquier momento.",
    image: roseYellow,
    seasonIds: ["madres", "todo_el_ano"],
  },
  {
    id: "rosa-bicolor",
    number: "07",
    name: "Dulce Abrazo",
    method: "Absorción",
    description:
      "Rosa bicolor con pétalos crema y bordes rosados. Un abrazo visual lleno de dulzura y delicadeza.",
    image: roseBicolor,
    seasonIds: ["madres", "san_valentin"],
  },
  {
    id: "mystic-blue",
    number: "08",
    name: "Mystic Blue",
    method: "Absorción",
    description:
      "Rosa tintada en azul profundo con reflejos celestes. Única, misteriosa y absolutamente cautivadora.",
    image: roseBlue,
    seasonIds: ["san_valentin", "navidad"],
  },
];
