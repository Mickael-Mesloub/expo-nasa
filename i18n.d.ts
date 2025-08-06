// import the original type declarations
import 'i18next';
// import all namespaces (for the default language, only)
import fr from '@/src/config/i18n/locales/fr.json';
import en from '@/src/config/i18n/locales/en.json';

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: 'fr';
    // custom resources type
    resources: {
      fr: typeof fr;
      en: typeof en;
    };
  }
}
