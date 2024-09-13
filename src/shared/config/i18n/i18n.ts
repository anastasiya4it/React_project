import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import HttpBackend, { type HttpBackendOptions } from "i18next-http-backend";
import ChainedBackend from "i18next-chained-backend";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEn from "../../../../public/locales/en/translation.json";
import translationUa from "../../../../public/locales/ua/translation.json";
import translationRu from "../../../../public/locales/ru/translation.json";

const resources = {
  en: {
    translation: translationEn,
  },
  ua: {
    translation: translationUa,
  },
  ru: {
    translation: translationRu,
  },
};
i18n
  .use(Backend)
  .use(LanguageDetector)
  // .use(initReactI18next)
  // .use(ChainedBackend)
  .init({
    // resources,
    backend: {
      loadPath: "./locales/{{lng}}/{{ns}}.json",
    },
    fallbackLng: "en",
    supportedLngs: ["en", "ru", "ua"],
    debug: __IS_DEV__,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    saveMissing: true,
  });

export default i18n;
