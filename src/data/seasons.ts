export interface Season {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const seasons: Season[] = [
  {
    id: "madres",
    name: "Día de la Madre",
    description: "Celebra el amor incondicional con nuestras rosas más especiales.",
    icon: "Heart",
  },
  {
    id: "san_valentin",
    name: "San Valentín",
    description: "Expresa tu amor con las rosas más románticas del mundo.",
    icon: "HeartHandshake",
  },
  {
    id: "navidad",
    name: "Navidad",
    description: "Ilumina las fiestas con arreglos florales únicos.",
    icon: "Sparkles",
  },
  {
    id: "todo_el_ano",
    name: "Todo el Año",
    description: "Rosas frescas disponibles en cualquier momento.",
    icon: "Sun",
  },
];
