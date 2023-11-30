import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

import router from "./router";
app.use(router);

app.mount("#app");

