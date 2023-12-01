import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

import router from "./router";
app.use(router);

import i18n from "./plugins/i18n";
app.use(i18n);

app.mount("#app");

