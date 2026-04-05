import heroFarm from "@/assets/hero-farm.jpg";
import { MapPin, Phone, Mail, Instagram, Heart } from "lucide-react";

const About = () => {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative h-64 overflow-hidden md:h-96">
        <img
          src={heroFarm}
          alt="Campos de rosas en Pedro Moncayo, Ecuador"
          className="h-full w-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/40">
          <div className="text-center">
            <p className="mb-2 font-sans text-xs tracking-[0.3em] uppercase text-primary-foreground/80">
              Nuestra Historia
            </p>
            <h1 className="font-serif text-3xl font-semibold text-primary-foreground md:text-5xl">
              Quiénes Somos
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-12 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <Heart className="mx-auto h-8 w-8 text-primary" />
          <h2 className="font-serif text-2xl font-medium text-foreground md:text-3xl">
            Una Empresa Familiar con Raíces Profundas
          </h2>
          <p className="font-sans text-base leading-relaxed text-muted-foreground">
            Somos una empresa familiar dedicada al cultivo y exportación de
            rosas de alta calidad. Nuestras fincas se encuentran en{" "}
            <strong className="text-foreground">Pedro Moncayo, Ecuador</strong>{" "}
            — reconocida mundialmente como la{" "}
            <em>Capital Mundial de la Rosa</em>. Gracias a las condiciones
            únicas de nuestro suelo y clima ecuatorial, cultivamos rosas con
            tallos más largos, colores más vibrantes y una durabilidad
            excepcional.
          </p>
          <p className="font-sans text-base leading-relaxed text-muted-foreground">
            Cada rosa que sale de nuestras manos lleva consigo el amor, la
            dedicación y la tradición de generaciones comprometidas con la
            excelencia floral.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="border-t border-border bg-secondary/30 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="mb-8 text-center font-serif text-xl font-medium text-foreground md:text-2xl">
            Contáctanos
          </h3>
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-lg bg-background p-5">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-sans text-sm font-medium text-foreground">Teléfonos</p>
                <p className="mt-1 font-sans text-sm text-muted-foreground">
                  +593 996841179
                  <br />
                  +593 996931536
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-background p-5">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-sans text-sm font-medium text-foreground">Correo</p>
                <a
                  href="mailto:salestabacundo@gmail.com"
                  className="mt-1 block font-sans text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  salestabacundo@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-background p-5">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-sans text-sm font-medium text-foreground">Ubicación</p>
                <p className="mt-1 font-sans text-sm text-muted-foreground">
                  Pedro Moncayo, Ecuador
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-background p-5">
              <Instagram className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-sans text-sm font-medium text-foreground">Redes Sociales</p>
                <a
                  href="https://www.instagram.com/emfaccmagicroses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block font-sans text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  @emfaccmagicroses
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
