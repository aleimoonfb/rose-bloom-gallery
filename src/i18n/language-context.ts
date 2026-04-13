import { createContext } from "react";
import translations, { type Locale, type TranslationKey } from "./translations";

export interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
}

const defaultLanguageContext: LanguageContextValue = {
  locale: "es",
  setLocale: () => undefined,
  t: (key) => translations[key]?.es ?? key,
};

export const LanguageContext = createContext<LanguageContextValue>(defaultLanguageContext);
