import { createApp } from 'vue';
import App from './App.vue';
import NavbarContainer from './components/Navbar.vue';
import VeeValidateSetup from './plugins/SetupVeeValidate';
import Router from './routes/routes';
import { createPinia } from 'pinia';
import vuetify from './plugins/Vuetify';
import { vue_i18n } from './plugins/vue_i18n';

// Import our custom CSS
import './scss/styles.scss'; //order matters
import './assests/main.css';

// Import all of Bootstrap's JS

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(vue_i18n);
app.use(vuetify);
app.use(VeeValidateSetup);
app.use(Router);
app.component('NavbarContainer', NavbarContainer);
app.mount('#app');