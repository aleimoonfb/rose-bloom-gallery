import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Flower2 } from "lucide-react";

const navLinks = [
  { to: "/catalogo", label: "Catálogo General" },
  { to: "/", label: "Colecciones por Temporada" },
  { to: "/quienes-somos", label: "Quiénes Somos" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <Flower2 className="h-6 w-6 text-primary" />
          <span className="font-serif text-lg font-semibold tracking-wide text-foreground md:text-xl">
            EMFACC Magic Roses
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
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

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
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
