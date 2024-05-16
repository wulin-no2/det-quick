// i18n.js or similar file
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend"; // if you are loading translations over a network
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // Automatically detect language settings
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["cookie"], // Where to store the language choice
    },
  });

export default i18n;
