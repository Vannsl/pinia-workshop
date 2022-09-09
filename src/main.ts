import { createApp } from "vue";
import router from "./router/router";
import { createPinia } from "pinia";
import "./style.css";
import "./index.css";
import App from "./App.vue";

createApp(App).use(router).use(createPinia()).mount("#app");
