import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import heroImg from "@/assets/lamina.png";

const Home = () => {
  const { t } = useLanguage();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroImg}
        alt="Magic Roses"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center drop-shadow-[0_5px_8px_rgba(0,0,0,0.8)]">
        <p className="mb-3 font-sans text-xs font-semibold tracking-[0.35em] uppercase text-primary-foreground/90">
          {t("home.subtitle")}
        </p>
        <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
          {t("home.title")}
        </h1>
        <p className="mx-auto mt-6 max-w-lg font-sans text-base font-semibold leading-relaxed text-white md:text-lg">
          {t("home.description")}
        </p>
        <Link
          to="/catalogo"
          className="mt-10 inline-flex items-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-8 py-3 font-sans text-sm tracking-wider uppercase text-white backdrop-blur-sm transition-all duration-300 hover:bg-primary-foreground/20"
        >
          {t("home.cta")}
        </Link>
      </div>
    </main>
  );
};

export default Home;
