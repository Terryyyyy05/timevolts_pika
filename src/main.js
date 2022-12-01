import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/css/app.scss";
createApp(App).use(store).use(router).mount("#app");

import TheHeading from "./components/layout/TheHeading.vue";

const app = createApp(App);

app.use(store);
app.use(router);

app.component("the-heading", TheHeading);

