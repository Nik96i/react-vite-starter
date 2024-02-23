import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enTranslation from '@/services/i18n/locales/en/translation.json';
import faTranslation from '@/services/i18n/locales/fa/translation.json';

// Type Definitions
export type SupportedLanguages = 'en' | 'fa';
export type LocaleDirs = 'ltr' | 'rtl';

void i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: enTranslation,
      },
      fa: {
        translation: faTranslation,
      }
    },
    debug: true,
    lng: 'fa',
    fallbackLng: 'fa',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
