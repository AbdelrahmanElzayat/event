import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import translationsEN from '../public/locales/en/common.json'
import translationAR from '@/locales/ar.json'
import translationEN from '@/locales/en.json'
i18n.use(initReactI18next).init({
  fallbackLng: "ar",
  lng: "ar", // اللغة الافتراضية
  resources: {
    en: {
      // translation: require("../public/locales/en/common.json"),
      translation: translationEN,
    },
    ar: {
      // translation: require("../public/locales/ar/common.json"),
      translation: translationAR,
    },
  },
  interpolation: {
    escapeValue: false, // React يعتني بالأمان
  },
});

export default i18n;
