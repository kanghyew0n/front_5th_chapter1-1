import { router } from "./routes.js";

const app = () => {
  window.addEventListener("hashchange", router);
  window.addEventListener("load", router);
};

app();
