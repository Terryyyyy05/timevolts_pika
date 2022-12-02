import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// SCSS
import "@/assets/css/app.scss";

// Import Components
import TheHeading from "./components/layout/TheHeading.vue";

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// add icons from library
library.add(faChevronDown);
library.add(faMagnifyingGlass);
library.add(faXmark);

// Vue 實體
const app = createApp(App);

app.use(store);
app.use(router);

app.component("the-heading", TheHeading);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
