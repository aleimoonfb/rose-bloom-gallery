import RoseCard from "@/components/RoseCard";
import { roses } from "@/data/roses";

const Catalog = () => {
  return (
    <main className="min-h-screen">
      <section className="py-12 text-center md:py-20">
        <p className="mb-2 font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground">
          Nuestras Variedades
        </p>
        <h1 className="font-serif text-3xl font-semibold text-foreground md:text-5xl">
          Catálogo General
        </h1>
        <p className="mx-auto mt-4 max-w-lg font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
          Explora todas nuestras variedades de rosas premium cultivadas en las
          tierras altas de Ecuador.
        </p>
      </section>

      <section className="container mx-auto px-4 pb-16 md:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {roses.map((rose, i) => (
            <div
              key={rose.id}
              className="animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <RoseCard rose={rose} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Catalog;
