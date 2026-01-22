import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import i18n from './i18n';

import './style.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.my-app-dark', // Disable dark mode by default unless class added
        }
    }
});

app.mount('#app')
