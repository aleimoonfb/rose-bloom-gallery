import { useState, useMemo } from "react";
import { roses } from "@/data/roses";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";
import DownloadPdfButton from "@/components/DownloadPdfButton";

const colorFilters = [
  { id: "all", key: "color.all" },
  { id: "red", key: "color.red" },
  { id: "hot_pink", key: "color.hot_pink" },
  { id: "lavanda", key: "color.lavanda" },
  { id: "pink", key: "color.pink" },
  { id: "white_cream", key: "color.white_cream" },
  { id: "peach", key: "color.peach" },
  { id: "orange_yellow", key: "color.orange_yellow" },
  { id: "green", key: "color.green" },
  { id: "blue", key: "color.blue" },
  { id: "multicolor", key: "color.multicolor" },
  { id: "dark", key: "color.dark" },
] as const;

type TypeFilter = "all" | "fresca" | "tinturado";

const Catalog = () => {
  const { t } = useLanguage();
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");
  const [colorFilter, setColorFilter] = useState("all");

  const filtered = useMemo(() => {
    return roses
      .filter((r) => {
        const matchesType =
          typeFilter === "all" ||
          (typeFilter === "fresca" && r.type === "Fresca") ||
          (typeFilter === "tinturado" && (r.method === "Absorción" || r.method === "Aspersión" || r.type === "Tinturado"));
        const matchesColor = colorFilter === "all" || r.color === colorFilter;
        return matchesType && matchesColor;
      })
      .sort((a, b) => {
        const aIsFresca = a.type === "Fresca" ? 0 : 1;
        const bIsFresca = b.type === "Fresca" ? 0 : 1;
        return aIsFresca - bIsFresca;
      });
  }, [typeFilter, colorFilter]);

  // Group filtered roses by color for display
  const groupedByColor = useMemo(() => {
    const colorOrder = colorFilters.filter((c) => c.id !== "all");
    return colorOrder
      .map((color) => ({
        colorId: color.id,
        key: color.key,
        roses: filtered.filter((r) => r.color === color.id),
      }))
      .filter((g) => g.roses.length > 0);
  }, [filtered]);

  const typeButtons: { value: TypeFilter; labelKey: TranslationKey }[] = [
    { value: "all", labelKey: "catalog.filterAll" },
    { value: "fresca", labelKey: "catalog.filterFresh" },
    { value: "tinturado", labelKey: "catalog.filterTinted" },
  ];

  return (
    <main className="min-h-screen print:min-h-0">
      {/* Header */}
      <section className="py-10 text-center md:py-16 print:py-6">
        <p className="mb-2 font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground">
          {t("catalog.subtitle")}
        </p>
        <h1 className="font-serif text-3xl font-semibold text-foreground md:text-5xl">
          {t("catalog.title")}
        </h1>
        <p className="mx-auto mt-4 max-w-lg font-sans text-sm leading-relaxed text-muted-foreground md:text-base print:hidden">
          {t("catalog.description")}
        </p>

        {/* PDF Download */}
        <div className="mt-6 flex justify-center print:hidden">
          <DownloadPdfButton />
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 md:px-8 print:hidden">
        {/* Type toggle */}
        <div className="mb-6 flex flex-wrap justify-center gap-3">
          {typeButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setTypeFilter(btn.value)}
              className={`rounded-full border px-5 py-2 font-serif text-sm tracking-wide transition-all duration-200 ${
                typeFilter === btn.value
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {t(btn.labelKey)}
            </button>
          ))}
        </div>

        {/* Color pills */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {colorFilters.map((color) => (
            <button
              key={color.id}
              onClick={() => setColorFilter(color.id)}
              className={`rounded-full border px-4 py-1.5 font-sans text-xs tracking-wider transition-all duration-200 ${
                colorFilter === color.id
                  ? "border-primary/60 bg-primary/10 font-medium text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {t(color.key as TranslationKey)}
            </button>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="container mx-auto space-y-14 px-4 pb-20 md:px-8 print:space-y-8 print:pb-4">
        {groupedByColor.length > 0 ? (
          groupedByColor.map((group) => (
            <div key={group.colorId}>
              <div className="mb-6 border-b border-border pb-2 print:mb-3">
                <h2 className="font-serif text-xl font-semibold tracking-wide uppercase text-foreground md:text-2xl">
                  {t(`colorGroup.${group.colorId}` as TranslationKey)}
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 print:grid-cols-4 print:gap-4">
                {group.roses.map((rose, i) => (
                  <article
                    key={rose.id}
                    className="group flex animate-fade-in flex-col items-center text-center"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <div className="mb-3 flex aspect-[3/4] w-full items-center justify-center overflow-hidden rounded-lg bg-secondary/30 p-5 print:bg-transparent print:p-2">
                      <img
                        src={rose.image}
                        alt={rose.name}
                        loading="lazy"
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105 print:group-hover:scale-100"
                      />
                    </div>
                    <h3 className="font-serif text-base font-medium text-foreground md:text-lg">
                      {rose.name}
                    </h3>
                    {(rose.method || rose.type) && (
                      <p className="mt-0.5 font-sans text-[11px] tracking-widest uppercase text-muted-foreground">
                        {rose.method
                          ? `${t("catalog.method")}: ${t(`method.${rose.method}` as TranslationKey)}`
                          : `${t("catalog.type")}: ${t(`method.${rose.type}` as TranslationKey)}`}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="py-20 text-center font-sans text-sm text-muted-foreground">
            {t("catalog.empty")}
          </p>
        )}
      </section>
    </main>
  );
};

export default Catalog;
