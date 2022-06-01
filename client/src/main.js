import { createApp } from "vue";
import App from "./App.vue";
import store from '@/store'
import router from "./router";
import axios from "axios";
import "@/css/tailwind.css";
import "@popperjs/core";
import "flowbite";
import Popper from "vue3-popper";

const base = axios.create({
  baseURL: "http://localhost:4000",
});

const app = createApp(App).use(store);
app.component("Popper", Popper)

app.directive("focus", {
  /* ... */
});

app.config.globalProperties.$http = base;

app.use(router);

app.mount("#app");
