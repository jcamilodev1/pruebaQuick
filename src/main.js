import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { loadFonts } from "./plugins/webfontloader";
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/main.scss'

loadFonts();

createApp(App).use(BootstrapVue3).use(router).use(store).mount("#app");
