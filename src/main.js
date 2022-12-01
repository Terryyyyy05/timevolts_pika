import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/css/app.scss";
<<<<<<< HEAD
createApp(App).use(store).use(router).mount("#app");
=======

import TheHeading from "./components/layout/TheHeading.vue";

const app = createApp(App);

app.use(store);
app.use(router);

app.component("the-heading", TheHeading);

app.mount("#app");
>>>>>>> 28cb96cdee115d28c863cf2f898bd6f0fa07be98
