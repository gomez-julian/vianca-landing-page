import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import { installPrimeVue } from './primevue'
import 'primevue/resources/themes/tailwind-light/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const app = createApp(App)
app.use(PrimeVue, { ripple: true });
installPrimeVue(app);
app.mount('#app')