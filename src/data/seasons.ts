export interface Season {
  id: string;
  name: string;
  description: string;
  icon: string;
  bgColor: string;
}

export const seasons: Season[] = [
  {
    id: "madres",
    name: "Día de la Madre",
    description: "Celebra el amor incondicional con nuestras rosas más especiales.",
    icon: "Heart",
    bgColor: "hsl(340 60% 95%)",
  },
  {
    id: "san_valentin",
    name: "San Valentín",
    description: "Expresa tu amor con las rosas más románticas del mundo.",
    icon: "HeartHandshake",
    bgColor: "hsl(0 70% 95%)",
  },
  {
    id: "navidad",
    name: "Navidad",
    description: "Ilumina las fiestas con arreglos florales únicos.",
    icon: "Sparkles",
    bgColor: "hsl(140 40% 95%)",
  },
  {
    id: "todo_el_ano",
    name: "Todo el Año",
    description: "Rosas frescas disponibles en cualquier momento.",
    icon: "Sun",
    bgColor: "hsl(45 60% 95%)",
  },
];
