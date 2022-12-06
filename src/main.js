import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// SCSS
import "@/assets/css/app.scss";

// Import Components
import TheHeading from "./components/all_layout/TheHeading.vue";
import BaseCard from "./components/all_UI/BaseCard.vue";
import innerpageHeader from "./components/innerpageHeader.vue";
import header from "./components/header.vue";
import footer from "./components/footer.vue";

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
// add icons from library
library.add(faChevronDown);
library.add(faChevronRight);
library.add(faChevronLeft);
library.add(faMagnifyingGlass);
library.add(faXmark);
library.add(faMinus);
library.add(faPlus);
library.add(faCircleCheck);
library.add(faTrashCan);

// Vue 實體
const app = createApp(App);

app.use(store);
app.use(router);

app.component("the-heading", TheHeading);
app.component("base-card", BaseCard);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("innerpageHeader", innerpageHeader);
app.component("all-header", header);
app.component("all-footer", footer);

app.mount("#app");
