import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ko from "etc/lib/language/web/languages/ko";
import en from "etc/lib/language/web/languages/en";
import id from "etc/lib/language/web/languages/id";

i18n.use(LanguageDetector) // 사용자 언어 탐지
    .use(initReactI18next) // i18n 객체를 react-18next에 전달
    .init({
        // for all options read: https://www.i18next.com/overview/configuration-options
        debug: true,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            ko: ko,
            en: en,
            id: id,
        },
    });

export default i18n;
