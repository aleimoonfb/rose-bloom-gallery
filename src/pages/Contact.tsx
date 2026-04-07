import { useState } from "react";
import { MapPin, Phone, Mail, Instagram, Send } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(`Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:salestabacundo@gmail.com?subject=Consulta desde Web&body=${body}`);
  };

  return (
    <main className="relative min-h-screen">
      {/* Background video/image */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          poster="/assets/hero-poster.jpg"
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 py-16 md:px-8 md:py-24">
        <div className="mb-12 text-center">
          <p className="mb-2 font-sans text-xs tracking-[0.3em] uppercase text-primary-foreground/70">
            {t("contact.subtitle")}
          </p>
          <h1 className="font-serif text-3xl font-semibold text-primary-foreground md:text-5xl">
            {t("contact.title")}
          </h1>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Info card */}
          <div className="space-y-6 rounded-2xl border border-primary-foreground/10 bg-background/90 p-8 shadow-lg backdrop-blur-md">
            <h2 className="font-serif text-xl font-medium text-foreground">
              {t("contact.infoTitle")}
            </h2>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-sans text-sm font-medium text-foreground">{t("about.location")}</p>
                  <p className="font-sans text-sm text-muted-foreground">Pedro Moncayo, Ecuador</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-sans text-sm font-medium text-foreground">{t("about.phones")}</p>
                  <p className="font-sans text-sm text-muted-foreground">+593 996841179 / +593 996931536</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-sans text-sm font-medium text-foreground">{t("about.email")}</p>
                  <a href="mailto:salestabacundo@gmail.com" className="font-sans text-sm text-muted-foreground hover:text-primary">
                    salestabacundo@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Instagram className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-sans text-sm font-medium text-foreground">{t("about.social")}</p>
                  <a href="https://www.instagram.com/emfaccmagicroses" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-muted-foreground hover:text-primary">
                    @emfaccmagicroses
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-lg">
              <iframe
                title="EMFACC Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63830.4!2d-78.2!3d0.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2a1f4b1c9c0001%3A0x1!2sPedro+Moncayo!5e0!3m2!1ses!2sec!4v1"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form card */}
          <div className="rounded-2xl border border-primary-foreground/10 bg-background/90 p-8 shadow-lg backdrop-blur-md">
            <h2 className="mb-6 font-serif text-xl font-medium text-foreground">
              {t("contact.formTitle")}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-1.5 block font-sans text-xs tracking-wider uppercase text-muted-foreground">
                  {t("contact.name")}
                </label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="bg-secondary/50"
                />
              </div>
              <div>
                <label className="mb-1.5 block font-sans text-xs tracking-wider uppercase text-muted-foreground">
                  {t("contact.email")}
                </label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="bg-secondary/50"
                />
              </div>
              <div>
                <label className="mb-1.5 block font-sans text-xs tracking-wider uppercase text-muted-foreground">
                  {t("contact.message")}
                </label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-secondary/50"
                />
              </div>
              <Button type="submit" className="w-full gap-2 rounded-full">
                <Send className="h-4 w-4" />
                {t("contact.send")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
