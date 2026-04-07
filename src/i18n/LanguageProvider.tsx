import { useCallback, useMemo, useState, type ReactNode } from "react";
import { LanguageContext } from "./language-context";
import translations, { type Locale, type TranslationKey } from "./translations";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("es");

  const t = useCallback(
    (key: TranslationKey): string => {
      const entry = translations[key];
      return entry?.[locale] ?? entry?.es ?? key;
    },
    [locale],
  );

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
