import { useState, useMemo } from "react";
import { roses, roseColors } from "@/data/roses";
import { Filter } from "lucide-react";

const Catalog = () => {
  const [activeColor, setActiveColor] = useState("all");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filteredRoses = useMemo(
    () =>
      activeColor === "all"
        ? roses
        : roses.filter((r) => r.color === activeColor),
    [activeColor]
  );

  const activeLabel = roseColors.find((c) => c.id === activeColor)?.name ?? "Todas";

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-10 text-center md:py-16">
        <p className="mb-2 font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground">
          Catálogo Completo
        </p>
        <h1 className="font-serif text-3xl font-semibold text-foreground md:text-5xl">
          Nuestras Rosas
        </h1>
        <p className="mx-auto mt-4 max-w-lg font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
          Explora todas nuestras variedades premium cultivadas en las tierras
          altas de Ecuador.
        </p>
      </section>

      <section className="container mx-auto flex gap-0 px-4 pb-16 md:gap-10 md:px-8">
        {/* Mobile filter toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg md:hidden"
          aria-label="Filtrar por color"
        >
          <Filter className="h-5 w-5" />
        </button>

        {/* Sidebar — mobile overlay + desktop sticky */}
        <>
          {/* Mobile backdrop */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 z-30 bg-foreground/20 backdrop-blur-sm md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          <aside
            className={`
              fixed inset-y-0 left-0 z-40 w-64 transform bg-card p-6 pt-24 shadow-xl transition-transform duration-300 md:static md:z-auto md:w-52 md:shrink-0 md:transform-none md:bg-transparent md:p-0 md:pt-0 md:shadow-none lg:w-56
              ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
            `}
          >
            <div className="md:sticky md:top-28">
              <h2 className="mb-6 font-serif text-lg font-semibold text-foreground">
                Filtrar por Color
              </h2>

              <nav className="flex flex-col gap-2">
                {roseColors.map((color) => {
                  const isActive = activeColor === color.id;
                  return (
                    <button
                      key={color.id}
                      onClick={() => {
                        setActiveColor(color.id);
                        setSidebarOpen(false);
                      }}
                      className={`rounded-full px-5 py-2.5 text-left font-serif text-sm transition-all duration-200 ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      {color.name}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>
        </>

        {/* Grid — editorial catalog style */}
        <div className="flex-1">
          <p className="mb-6 font-sans text-xs tracking-widest uppercase text-muted-foreground">
            {activeLabel} — {filteredRoses.length}{" "}
            {filteredRoses.length === 1 ? "variedad" : "variedades"}
          </p>

          {filteredRoses.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredRoses.map((rose, i) => (
                <article
                  key={rose.id}
                  className="group flex animate-fade-in flex-col items-center text-center"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="mb-4 flex aspect-[3/4] w-full items-center justify-center overflow-hidden rounded-lg bg-secondary/30 p-5">
                    <img
                      src={rose.image}
                      alt={rose.name}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-base font-medium text-foreground md:text-lg">
                    {rose.name}
                  </h3>
                  {(rose.method || rose.type) && (
                    <p className="mt-0.5 font-sans text-[11px] tracking-widest uppercase text-muted-foreground">
                      {rose.method
                        ? `Método: ${rose.method}`
                        : `Tipo: ${rose.type}`}
                    </p>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <p className="py-20 text-center font-sans text-sm text-muted-foreground">
              No hay rosas disponibles en esta categoría.
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Catalog;
