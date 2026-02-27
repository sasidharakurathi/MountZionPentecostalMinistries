import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import enTranslations from './locales/en/translation.json';
import teTranslations from './locales/te/translation.json';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslations
            },
            te: {
                translation: teTranslations
            }
        },
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false, // React already safe from XSS
        }
    });

export default i18n;
