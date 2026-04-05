import { useMemo } from "react";
import { roses, roseColors } from "@/data/roses";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

const Catalog = () => {
  const { t } = useLanguage();

  const groupedByColor = useMemo(() => {
    const colorOrder = roseColors.filter((c) => c.id !== "all");
    return colorOrder
      .map((color) => ({
        colorId: color.id,
        roses: roses.filter((r) => r.color === color.id),
      }))
      .filter((g) => g.roses.length > 0);
  }, []);

  return (
    <main className="min-h-screen print:min-h-0">
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
      </section>

      <section className="container mx-auto space-y-14 px-4 pb-20 md:px-8 print:space-y-8 print:pb-4">
        {groupedByColor.map((group) => (
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
        ))}
      </section>
    </main>
  );
};

export default Catalog;
