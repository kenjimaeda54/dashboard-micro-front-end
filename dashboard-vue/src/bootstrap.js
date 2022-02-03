import { createApp } from "vue";
import Dashboard from "./pages/Dashboard.vue";

const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const root = document.querySelector("#dashboard-root-vue");
  if (root) {
    mount(root);
  }
}

export { mount };
