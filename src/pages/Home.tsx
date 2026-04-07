import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const Home = () => {
  const { t } = useLanguage();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="/assets/hero-poster.jpg"
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="mb-3 font-sans text-xs tracking-[0.35em] uppercase text-primary-foreground/70">
          {t("home.subtitle")}
        </p>
        <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight text-primary-foreground md:text-6xl lg:text-7xl">
          {t("home.title")}
        </h1>
        <p className="mx-auto mt-6 max-w-lg font-sans text-sm leading-relaxed text-primary-foreground/80 md:text-base">
          {t("home.description")}
        </p>
        <Link
          to="/catalogo"
          className="mt-10 inline-flex items-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-8 py-3 font-sans text-sm tracking-wider uppercase text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:bg-primary-foreground/20"
        >
          {t("home.cta")}
        </Link>
      </div>
    </main>
  );
};

export default Home;
