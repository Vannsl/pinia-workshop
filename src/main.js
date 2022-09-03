import "vuetify/styles";
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import { loadFonts } from "./plugins/webfontloader";
import App from "./App.vue";

loadFonts();

const app = createApp(App);
const vuetify = createVuetify();

app.use(vuetify);

app.mount("#app");
