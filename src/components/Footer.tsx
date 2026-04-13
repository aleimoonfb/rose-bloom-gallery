import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <img
                src="/assets/logo.png"
                alt="EMFACC Magic Roses"
                className="h-10 w-auto"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='20' cy='20' r='18' fill='%23ccc'/%3E%3Ctext x='20' y='24' text-anchor='middle' font-size='10' fill='%23666'%3EMR%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            <p className="font-sans text-sm leading-relaxed text-muted-foreground">
              {t("footer.brand")}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-base font-medium text-foreground">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3 font-sans text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>+593 996841179 / +593 996931536</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div className="flex flex-col">
                  <a href="mailto:sales1@emfacc.com,sales2@emfacc.com" className="transition-colors hover:text-primary">
                    sales1@emfacc.com
                  </a>
                  <a href="mailto:sales1@emfacc.com,sales2@emfacc.com" className="transition-colors hover:text-primary">
                    sales2@emfacc.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Pedro Moncayo, Ecuador</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-base font-medium text-foreground">
              {t("footer.follow")}
            </h4>
            <a
              href="https://www.instagram.com/magic_roses_ec/#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
              @magic_roses_ec
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center font-sans text-xs text-muted-foreground">
          © {new Date().getFullYear()} EMFACC Magic Roses. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
