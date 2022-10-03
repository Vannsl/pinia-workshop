import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import vuexStore from "@/legacy_store/auth";
import messages from "./data/messages.json";
import router from "./router/router";
import "./style.css";
import "./index.css";
import App from "./App.vue";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLanguage: "en",
  messages,
});

createApp(App).use(i18n).use(router).use(vuexStore).mount("#app");
