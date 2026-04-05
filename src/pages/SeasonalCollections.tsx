import { useState, useMemo } from "react";
import SeasonTabs from "@/components/SeasonTabs";
import RoseCard from "@/components/RoseCard";
import { roses } from "@/data/roses";
import { seasons } from "@/data/seasons";

const SeasonalCollections = () => {
  const [activeSeason, setActiveSeason] = useState("madres");

  const activeMeta = useMemo(
    () => seasons.find((s) => s.id === activeSeason),
    [activeSeason]
  );

  const filteredRoses = useMemo(
    () => roses.filter((r) => r.seasonIds.includes(activeSeason)),
    [activeSeason]
  );

  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="py-12 text-center md:py-20">
        <p className="mb-2 font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground">
          Colecciones por Temporada
        </p>
        <h1 className="font-serif text-3xl font-semibold text-foreground md:text-5xl">
          {activeMeta?.name ?? "Colecciones"}
        </h1>
        <p className="mx-auto mt-4 max-w-lg font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
          {activeMeta?.description}
        </p>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 md:px-8">
        <SeasonTabs activeId={activeSeason} onSelect={setActiveSeason} />
      </section>

      {/* Grid */}
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
            Próximamente — estamos preparando esta colección con mucho cariño.
          </p>
        )}
      </section>
    </main>
  );
};

export default SeasonalCollections;
