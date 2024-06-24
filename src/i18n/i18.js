// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./Languages/en";
import ru from "./Languages/ru";

// Sample translation resources
const resources = {
    en: en,
    ru: ru,
};

i18n
    .use(initReactI18next) // Passes i18n instance to react-i18next
    .init({
        resources,
        lng: "en", // Default language
        interpolation: {
            escapeValue: false, // Not needed for React
        },
    });

export default i18n;