import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// Keep <html lang> in sync so the browser picks Japanese glyphs and
// screen readers use the right voice.
i18n.on('languageChanged', lng => {
  document.documentElement.lang = lng;
});

i18n
  .use(LanguageDetector)
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ja'],
    fallbackLng: 'en',
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
