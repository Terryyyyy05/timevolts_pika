import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// SCSS
import "@/assets/css/app.scss";

// Import Components
import TheHeading from "./components/layout/TheHeading.vue";

// Vue 實體
const app = createApp(App);

app.use(store);
app.use(router);

app.component("the-heading", TheHeading);

app.mount("#app");
