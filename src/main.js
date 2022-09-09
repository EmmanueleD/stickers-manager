import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import PrimeVueConfigurator from "./utils/PrimeVueConfigurator";

import Vue3Lottie from "vue3-lottie";
import "vue3-lottie/dist/style.css";

import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "/node_modules/primeflex/primeflex.css";
import "./assets/scss/main.scss";
import "./registerServiceWorker";

const pinia = createPinia();
const app = createApp(App);

PrimeVueConfigurator.init(app);

app.use(pinia);
app.use(router);
app.use(Vue3Lottie);
app.mount("#app");
