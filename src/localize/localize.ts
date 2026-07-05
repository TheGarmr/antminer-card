import * as en from './languages/en.json';
import * as ru from './languages/ru.json';
import * as uk from './languages/uk.json';
import { globalData } from '../helpers/globals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const languages: any = {
    en: en,
    ru: ru,
    uk: uk,
};

export function localize(string: string, search = '', replace = '') {
    try {
        const forcedLang = (globalData as { cardConfig?: { language?: string } }).cardConfig?.language;

        let langFromLocalStorage = localStorage.getItem('selectedLanguage');
        if (langFromLocalStorage === null)
            langFromLocalStorage = localStorage.getItem('editor-language');
        if (langFromLocalStorage === null)
            langFromLocalStorage = 'en';
        langFromLocalStorage = langFromLocalStorage
            .replace(/['"]+/g, '')
            .replace('-', '_');

        const hassLang =
            globalData.hass?.selectedLanguage ||
            globalData.hass?.locale?.language ||
            globalData.hass?.language;

        const lang =
            forcedLang && forcedLang !== 'auto'
                ? forcedLang
                : hassLang || langFromLocalStorage;

        let translated: string;

        try {
            translated = string?.split('.').reduce((o, i) => o[i], languages[lang]);
        } catch (e) {
            translated = string?.split('.')?.reduce((o, i) => o[i], languages['en']);
        }

        if (translated === undefined) {
            translated = string?.split('.')?.reduce((o, i) => o[i], languages['en']);
        }

        if (search !== '' && replace !== '') {
            translated = translated.replace(search, replace);
        }
        return translated;
    } catch (e) {
        return string;
    }
}
