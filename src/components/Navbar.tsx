import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { localeLabels, type Locale } from "@/i18n/translations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { locale, setLocale, t } = useLanguage();

  const navLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/catalogo", label: t("nav.catalog") },
    { to: "/temporadas", label: t("nav.seasonal") },
    { to: "/contacto", label: t("nav.contact") },
    { to: "/quienes-somos", label: t("nav.about") },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md print:hidden">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/assets/logo.png"
            alt="EMFACC Magic Roses"
            className="h-10 w-auto md:h-12"
            onError={(e) => {
              // Fallback to text if logo not found
              const target = e.currentTarget;
              target.style.display = "none";
              const span = target.nextElementSibling as HTMLElement;
              if (span) span.style.display = "inline";
            }}
          />
          <span className="hidden font-serif text-lg font-semibold tracking-wide text-foreground md:text-xl">
            EMFACC Magic Roses
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`font-sans text-sm tracking-wide transition-colors hover:text-primary ${
                    location.pathname === link.to
                      ? "font-medium text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 font-sans text-xs tracking-wider text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground">
              <Globe className="h-3.5 w-3.5" />
              {localeLabels[locale]}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[5rem]">
              {(Object.keys(localeLabels) as Locale[]).map((lang) => (
                <DropdownMenuItem
                  key={lang}
                  onClick={() => setLocale(lang)}
                  className={`font-sans text-sm ${locale === lang ? "font-medium text-primary" : ""}`}
                >
                  {localeLabels[lang]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 rounded-full border border-border px-2.5 py-1 font-sans text-xs text-muted-foreground">
              <Globe className="h-3.5 w-3.5" />
              {localeLabels[locale]}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[5rem]">
              {(Object.keys(localeLabels) as Locale[]).map((lang) => (
                <DropdownMenuItem
                  key={lang}
                  onClick={() => setLocale(lang)}
                  className={`font-sans text-sm ${locale === lang ? "font-medium text-primary" : ""}`}
                >
                  {localeLabels[lang]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 font-sans text-sm tracking-wide transition-colors ${
                    location.pathname === link.to
                      ? "font-medium text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
