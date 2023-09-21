import "vue-toastification/dist/index.css";
import { createApp } from "vue";
import App from "./App.vue";
import Toast from "vue-toastification";

import router from "./router";
const app = createApp(App);

app.use(router);
app.use(Toast);
app.mount("#app");
