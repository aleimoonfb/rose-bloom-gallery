import { useMemo } from "react";
import RoseCard from "@/components/RoseCard";
import { roses } from "@/data/roses";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";
import DownloadPdfButton from "@/components/DownloadPdfButton";

const MOTHERS_BG =
  "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=1920&q=80";

const SeasonalCollections = () => {
  const activeSeason = "madres";
  const { t } = useLanguage();

  const seasonName = (id: string) => t(`season.${id}` as TranslationKey);
  const seasonDesc = (id: string) => t(`season.${id}.desc` as TranslationKey);

  const filteredRoses = useMemo(
    () => roses.filter((r) => r.seasonIds.includes(activeSeason)),
    [activeSeason]
  );

  return (
    <main className="relative min-h-screen transition-colors duration-700 print:bg-white">
      {/* Background layer — faint floral texture */}
      <div className="absolute inset-0 -z-10">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${MOTHERS_BG}')` }}
        />
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />
      </div>

      <section className="relative py-12 text-center md:py-20">
        <p className="mb-2 font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground">
          {t("seasonal.subtitle")}
        </p>
        <h1 className="font-serif text-3xl font-semibold text-foreground md:text-5xl">
          {seasonName(activeSeason)}
        </h1>
        <p className="mx-auto mt-4 max-w-lg font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
          {seasonDesc(activeSeason)}
        </p>

        {/* PDF Download */}
        <div className="mt-6 flex justify-center print:hidden">
          <DownloadPdfButton />
        </div>
      </section>

      <section className="container mx-auto px-4 py-10 md:px-8 md:py-16">
        {filteredRoses.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredRoses.map((rose, i) => (
              <div
                key={rose.id}
                className="animate-fade-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <RoseCard rose={rose} />
              </div>
            ))}
          </div>
        ) : (
          <p className="py-20 text-center font-sans text-sm text-muted-foreground">
            {t("seasonal.empty")}
          </p>
        )}
      </section>
    </main>
  );
};

export default SeasonalCollections;
