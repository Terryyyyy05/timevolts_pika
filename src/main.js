import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/css/app.scss";

import TheHeading from "./components/layout/TheHeading.vue";

const app = createApp(App);

app.use(store);
app.use(router);

app.component("the-heading", TheHeading);

app.mount("#app");
