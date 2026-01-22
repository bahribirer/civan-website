import { createI18n } from 'vue-i18n';
import tr from './locales/tr.json';
import en from './locales/en.json';

const i18n = createI18n({
    legacy: false, // Usage with Composition API
    locale: 'tr', // Default locale
    fallbackLocale: 'en',
    globalInjection: true,
    messages: {
        tr,
        en
    }
});

export default i18n;
