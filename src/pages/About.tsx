import heroFarm from "@/assets/hero-farm.jpg";
import { MapPin, Phone, Mail, Instagram, Heart } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <section className="relative h-64 overflow-hidden md:h-96">
        <img
          src={heroFarm}
          alt="Pedro Moncayo, Ecuador"
          className="h-full w-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/40">
          <div className="text-center">
            <p className="mb-2 font-sans text-xs tracking-[0.3em] uppercase text-primary-foreground/80">
              {t("about.subtitle")}
            </p>
            <h1 className="font-serif text-3xl font-semibold text-primary-foreground md:text-5xl">
              {t("about.title")}
            </h1>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <Heart className="mx-auto h-8 w-8 text-primary" />
          <h2 className="font-serif text-2xl font-medium text-foreground md:text-3xl">
            {t("about.heading")}
          </h2>
          <p className="font-sans text-base leading-relaxed text-muted-foreground">
            {t("about.p1")}
          </p>
          <p className="font-sans text-base leading-relaxed text-muted-foreground">
            {t("about.p2")}
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="mb-8 text-center font-serif text-xl font-medium text-foreground md:text-2xl">
            {t("about.contact")}
          </h3>
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-lg bg-background p-5">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-sans text-sm font-medium text-foreground">{t("about.phones")}</p>
                <p className="mt-1 font-sans text-sm text-muted-foreground">
                  +593 996841179<br />+593 996931536
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-background p-5">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-sans text-sm font-medium text-foreground">{t("about.email")}</p>
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
                <p className="font-sans text-sm font-medium text-foreground">{t("about.location")}</p>
                <p className="mt-1 font-sans text-sm text-muted-foreground">Pedro Moncayo, Ecuador</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-background p-5">
              <Instagram className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-sans text-sm font-medium text-foreground">{t("about.social")}</p>
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
