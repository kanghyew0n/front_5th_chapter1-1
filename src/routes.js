import { ErrorPage, LoginPage, MainPage, ProfilePage } from "./pages";

const loadContent = (content) => {
  document.body.innerHTML = `${content()}`;
};

const routes = {
  "/": () => MainPage(),
  "/profile": () => ProfilePage(),
  "/login": () => LoginPage(),
  "/error": () => ErrorPage(),
};

export const router = (e) => {
  e.preventDefault();
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) return loadContent(routes["/error"]);

  loadContent(route);
};
