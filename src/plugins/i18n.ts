import { createI18n } from "vue-i18n";
import type { LocaleMessages } from "vue-i18n";

import english from "../locales/english.json";
import russian from "../locales/russian.json";
import ukrainian from "../locales/ukrainian.json";

const messages: LocaleMessages<{ hello: string }> = {
  en: english,
  ru: russian,
  ua: ukrainian,
};

const i18n = createI18n({
  legacy: false,
  locale: (localStorage.getItem("language") || "en") as string,
  fallbackLocale: "en",
  messages,
  globalInjection: true,
});

export default i18n;
