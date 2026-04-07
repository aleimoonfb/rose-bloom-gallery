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
  { id: "red", name: "Red" },
  { id: "hot_pink", name: "Hot Pink" },
  { id: "lavanda", name: "Lavanda" },
  { id: "pink", name: "Pink" },
  { id: "white_cream", name: "White & Cream" },
  { id: "peach", name: "Peach" },
  { id: "orange_yellow", name: "Orange & Yellow" },
  { id: "green", name: "Green" },
  { id: "dark", name: "Dark" },
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
    color: "pink",
    description: "",
    image: rosePink,
    seasonIds: ["madres"],
  },
  {
    id: "eternal-love",
    number: "02",
    name: "Eternal Love",
    type: "Fresca",
    color: "red",
    description: "",
    image: roseRed,
    seasonIds: ["madres", "san_valentin"],
  },
  {
    id: "lavender-dream",
    number: "03",
    name: "Lavender Dream",
    method: "Absorción",
    color: "lavanda",
    description: "",
    image: roseLavender,
    seasonIds: ["madres", "todo_el_ano"],
  },
  {
    id: "pure-grace",
    number: "04",
    name: "Pure Grace",
    type: "Fresca",
    color: "white_cream",
    description: "",
    image: roseWhite,
    seasonIds: ["madres", "navidad", "todo_el_ano"],
  },
  {
    id: "sunset-blush",
    number: "05",
    name: "Sunset Blush",
    type: "Fresca",
    color: "peach",
    description: "",
    image: rosePeach,
    seasonIds: ["madres", "san_valentin"],
  },
  {
    id: "golden-joy",
    number: "06",
    name: "Golden Joy",
    type: "Fresca",
    color: "orange_yellow",
    description: "",
    image: roseYellow,
    seasonIds: ["madres", "todo_el_ano"],
  },
  {
    id: "rosa-bicolor",
    number: "07",
    name: "Dulce Abrazo",
    method: "Absorción",
    color: "hot_pink",
    description: "",
    image: roseBicolor,
    seasonIds: ["madres", "san_valentin"],
  },
  {
    id: "mystic-blue",
    number: "08",
    name: "Mystic Blue",
    method: "Absorción",
    color: "dark",
    description: "",
    image: roseBlue,
    seasonIds: ["san_valentin", "navidad"],
  },
];
