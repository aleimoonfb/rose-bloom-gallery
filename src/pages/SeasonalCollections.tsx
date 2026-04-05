import { useState, useMemo } from "react";
import RoseCard from "@/components/RoseCard";
import { roses } from "@/data/roses";
import { seasons } from "@/data/seasons";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SeasonalCollections = () => {
  const [activeSeason, setActiveSeason] = useState("madres");
  const { t } = useLanguage();

  const seasonName = (id: string) => t(`season.${id}` as TranslationKey);
  const seasonDesc = (id: string) => t(`season.${id}.desc` as TranslationKey);

  const filteredRoses = useMemo(
    () => roses.filter((r) => r.seasonIds.includes(activeSeason)),
    [activeSeason]
  );

  return (
    <main className="min-h-screen">
      <section className="py-12 text-center md:py-20">
        <p className="mb-2 font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground">
          {t("seasonal.subtitle")}
        </p>
        <h1 className="font-serif text-3xl font-semibold text-foreground md:text-5xl">
          {seasonName(activeSeason)}
        </h1>
        <p className="mx-auto mt-4 max-w-lg font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
          {seasonDesc(activeSeason)}
        </p>
      </section>

      <section className="container mx-auto flex justify-center px-4 md:px-8">
        <div className="w-full max-w-xs">
          <Select value={activeSeason} onValueChange={setActiveSeason}>
            <SelectTrigger className="rounded-full border-border bg-card font-serif text-sm shadow-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {seasons
                .filter((s) => s.id !== "todo_el_ano")
                .map((season) => (
                  <SelectItem
                    key={season.id}
                    value={season.id}
                    className="font-serif text-sm"
                  >
                    {seasonName(season.id)}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
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
