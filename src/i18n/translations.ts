export type Locale = "es" | "en" | "ru";

export const localeLabels: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  ru: "RU",
};

const translations = {
  // Navbar
  "nav.catalog": { es: "Catálogo General", en: "Full Catalog", ru: "Полный каталог" },
  "nav.seasonal": { es: "Colecciones por Temporada", en: "Seasonal Collections", ru: "Сезонные коллекции" },
  "nav.about": { es: "Quiénes Somos", en: "About Us", ru: "О нас" },

  // Catalog page
  "catalog.subtitle": { es: "Catálogo Completo", en: "Full Catalog", ru: "Полный каталог" },
  "catalog.title": { es: "Nuestras Rosas", en: "Our Roses", ru: "Наши розы" },
  "catalog.description": {
    es: "Explora todas nuestras variedades premium cultivadas en las tierras altas de Ecuador.",
    en: "Explore all our premium varieties grown in the highlands of Ecuador.",
    ru: "Откройте для себя все наши премиальные сорта, выращенные в высокогорьях Эквадора.",
  },
  "catalog.filterTitle": { es: "Filtrar por Color", en: "Filter by Color", ru: "Фильтр по цвету" },
  "catalog.varieties": { es: "variedades", en: "varieties", ru: "сортов" },
  "catalog.variety": { es: "variedad", en: "variety", ru: "сорт" },
  "catalog.empty": {
    es: "No hay rosas disponibles en esta categoría.",
    en: "No roses available in this category.",
    ru: "В этой категории нет роз.",
  },
  "catalog.method": { es: "Método", en: "Method", ru: "Метод" },
  "catalog.type": { es: "Tipo", en: "Type", ru: "Тип" },

  // Color filters
  "color.all": { es: "Todas", en: "All", ru: "Все" },
  "color.rojo": { es: "Rojo", en: "Red", ru: "Красный" },
  "color.blanco": { es: "Blanco & Crema", en: "White & Cream", ru: "Белый и кремовый" },
  "color.rosa": { es: "Rosa", en: "Pink", ru: "Розовый" },
  "color.lavanda": { es: "Lavanda", en: "Lavender", ru: "Лавандовый" },
  "color.amarillo": { es: "Amarillo", en: "Yellow", ru: "Жёлтый" },
  "color.tinturado": { es: "Tinturado", en: "Tinted", ru: "Тонированный" },

  // Seasonal collections page
  "seasonal.subtitle": { es: "Colección Especial", en: "Special Collection", ru: "Специальная коллекция" },
  "seasonal.fallback": { es: "Colecciones", en: "Collections", ru: "Коллекции" },
  "seasonal.empty": {
    es: "Próximamente — estamos preparando esta colección con mucho cariño.",
    en: "Coming soon — we're preparing this collection with love.",
    ru: "Скоро — мы готовим эту коллекцию с любовью.",
  },

  // Seasons
  "season.madres": { es: "Día de la Madre", en: "Mother's Day", ru: "День матери" },
  "season.madres.desc": {
    es: "Celebra el amor incondicional con nuestras rosas más especiales.",
    en: "Celebrate unconditional love with our most special roses.",
    ru: "Отпразднуйте безусловную любовь нашими самыми особенными розами.",
  },
  "season.san_valentin": { es: "San Valentín", en: "Valentine's Day", ru: "День Св. Валентина" },
  "season.san_valentin.desc": {
    es: "Expresa tu amor con las rosas más románticas del mundo.",
    en: "Express your love with the most romantic roses in the world.",
    ru: "Выразите свою любовь самыми романтичными розами в мире.",
  },
  "season.navidad": { es: "Navidad", en: "Christmas", ru: "Рождество" },
  "season.navidad.desc": {
    es: "Ilumina las fiestas con arreglos florales únicos.",
    en: "Light up the holidays with unique floral arrangements.",
    ru: "Украсьте праздники уникальными цветочными композициями.",
  },

  // About page
  "about.subtitle": { es: "Nuestra Historia", en: "Our Story", ru: "Наша история" },
  "about.title": { es: "Quiénes Somos", en: "About Us", ru: "О нас" },
  "about.heading": {
    es: "Una Empresa Familiar con Raíces Profundas",
    en: "A Family Business with Deep Roots",
    ru: "Семейный бизнес с глубокими корнями",
  },
  "about.p1": {
    es: "Somos una empresa familiar dedicada al cultivo y exportación de rosas de alta calidad. Nuestras fincas se encuentran en Pedro Moncayo, Ecuador — reconocida mundialmente como la Capital Mundial de la Rosa. Gracias a las condiciones únicas de nuestro suelo y clima ecuatorial, cultivamos rosas con tallos más largos, colores más vibrantes y una durabilidad excepcional.",
    en: "We are a family business dedicated to growing and exporting high-quality roses. Our farms are located in Pedro Moncayo, Ecuador — recognized worldwide as the Rose Capital of the World. Thanks to the unique conditions of our soil and equatorial climate, we grow roses with longer stems, more vibrant colors, and exceptional durability.",
    ru: "Мы — семейное предприятие, специализирующееся на выращивании и экспорте роз высочайшего качества. Наши фермы расположены в Педро-Монкайо, Эквадор — всемирно признанной Мировой столице роз. Благодаря уникальным условиям почвы и экваториального климата мы выращиваем розы с более длинными стеблями, яркими красками и исключительной стойкостью.",
  },
  "about.p2": {
    es: "Cada rosa que sale de nuestras manos lleva consigo el amor, la dedicación y la tradición de generaciones comprometidas con la excelencia floral.",
    en: "Every rose that leaves our hands carries with it the love, dedication, and tradition of generations committed to floral excellence.",
    ru: "Каждая роза, покидающая наши руки, несёт в себе любовь, преданность и традиции поколений, посвятивших себя цветочному совершенству.",
  },
  "about.contact": { es: "Contáctanos", en: "Contact Us", ru: "Свяжитесь с нами" },
  "about.phones": { es: "Teléfonos", en: "Phones", ru: "Телефоны" },
  "about.email": { es: "Correo", en: "Email", ru: "Эл. почта" },
  "about.location": { es: "Ubicación", en: "Location", ru: "Местоположение" },
  "about.social": { es: "Redes Sociales", en: "Social Media", ru: "Соцсети" },

  // Methods & types
  "method.Absorción": { es: "Absorción", en: "Absorption", ru: "Абсорбция" },
  "method.Fresca": { es: "Fresca", en: "Fresh", ru: "Свежая" },
  "method.Aspersión": { es: "Aspersión", en: "Spray", ru: "Опрыскивание" },
  "method.Tinturado": { es: "Tinturado", en: "Tinted", ru: "Тонированная" },

  // Color group headers
  "colorGroup.rojo": { es: "Rojos", en: "Reds", ru: "Красные" },
  "colorGroup.blanco": { es: "Blancos & Crema", en: "Whites & Cream", ru: "Белые и кремовые" },
  "colorGroup.rosa": { es: "Rosas", en: "Pinks", ru: "Розовые" },
  "colorGroup.lavanda": { es: "Lavandas", en: "Lavenders", ru: "Лавандовые" },
  "colorGroup.amarillo": { es: "Amarillos", en: "Yellows", ru: "Жёлтые" },
  "colorGroup.tinturado": { es: "Tinturados", en: "Tinted", ru: "Тонированные" },

  // Footer
  "footer.brand": {
    es: "Somos una empresa familiar dedicada al cultivo y exportación de rosas de alta calidad. Ubicados en Pedro Moncayo, Ecuador — la Capital Mundial de la Rosa.",
    en: "We are a family business dedicated to growing and exporting high-quality roses. Located in Pedro Moncayo, Ecuador — the Rose Capital of the World.",
    ru: "Мы — семейное предприятие по выращиванию и экспорту роз высшего качества. Педро-Монкайо, Эквадор — Мировая столица роз.",
  },
  "footer.contact": { es: "Contacto", en: "Contact", ru: "Контакты" },
  "footer.follow": { es: "Síguenos", en: "Follow Us", ru: "Подписывайтесь" },
  "footer.rights": {
    es: "Todos los derechos reservados.",
    en: "All rights reserved.",
    ru: "Все права защищены.",
  },
} as const;

export type TranslationKey = keyof typeof translations;

export default translations;
