import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// SCSS
import "@/assets/css/app.scss";

// Import Components
import TheHeading from "./components/all_layout/TheHeading.vue";
import BaseCard from "./components/all_UI/BaseCard.vue";
import BaseDialog from "./components/all_UI/BaseDialog.vue";
import BaseSpinner from "./components/all_UI/BaseSpinner.vue";
import BaseButton from "./components/all_UI/BaseButton.vue";
import innerpageHeader from "./components/innerpageHeader.vue";
import allHeader from "./components/header.vue";
import allFooter from "./components/footer.vue";
import pageTop from "./components/pageTop.vue";
// import 'vue-loading-overlay/dist/css/index.css';

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
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { LoadingPlugin } from 'vue-loading-overlay';

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
library.add(faAnglesUp);
library.add(faFlag);
library.add(faStar);
library.add(faHeart);

// Vue 實體
const app = createApp(App);

app.use(store);
app.use(router);
// app.use(LoadingPlugin);

app.component("the-heading", TheHeading);
app.component("base-card", BaseCard);
app.component("base-dialog", BaseDialog);
app.component("base-spinner", BaseSpinner);
app.component("base-button", BaseButton);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("innerpageHeader", innerpageHeader);
app.component("all-header", allHeader);
app.component("all-footer", allFooter);
app.component("pageTop", pageTop);

app.mount("#app");
