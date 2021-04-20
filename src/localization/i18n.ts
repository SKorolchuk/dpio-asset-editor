import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

export const i18next = i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        debug: true,
        lng: "en",
        react: {
            useSuspense: true,
        },
        interpolation: {
            escapeValue: false,
        },
        keySeparator: "$_",
        nsSeparator: "::",
    });
