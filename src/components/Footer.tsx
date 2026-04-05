import { Flower2, Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Flower2 className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg font-semibold text-foreground">
                EMFACC Magic Roses
              </span>
            </div>
            <p className="font-sans text-sm leading-relaxed text-muted-foreground">
              Somos una empresa familiar dedicada al cultivo y exportación de
              rosas de alta calidad. Ubicados en Pedro Moncayo, Ecuador — la
              Capital Mundial de la Rosa.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-serif text-base font-medium text-foreground">
              Contacto
            </h4>
            <ul className="space-y-3 font-sans text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>+593 996841179 / +593 996931536</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:salestabacundo@gmail.com"
                  className="transition-colors hover:text-primary"
                >
                  salestabacundo@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Pedro Moncayo, Ecuador</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-serif text-base font-medium text-foreground">
              Síguenos
            </h4>
            <a
              href="https://www.instagram.com/emfaccmagicroses"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
              @emfaccmagicroses
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center font-sans text-xs text-muted-foreground">
          © {new Date().getFullYear()} EMFACC Magic Roses. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
