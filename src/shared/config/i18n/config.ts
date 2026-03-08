import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations } from './translations';

i18n.use(initReactI18next).init({
  resources: Object.entries(translations).reduce((acc, [lang, translation]) => {
    acc[lang] = { translation };
    return acc;
  }, {} as Record<string, { translation: typeof translations.en }>),
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
