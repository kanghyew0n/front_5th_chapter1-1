import { ErrorPage, LoginPage, MainPage, ProfilePage } from "./pages";

const routes = {
  "/": MainPage,
  "/profile": ProfilePage,
  "/login": LoginPage,
};

export const renderPage = (path) => {
  const pageComponent = routes[path];

  if (!pageComponent) {
    document.body.innerHTML = `${ErrorPage()}`;
  } else {
    document.body.innerHTML = `${pageComponent()}`;
  }
};

export const render = () => {
  renderPage(location.pathname);

  document.querySelectorAll("a").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      const newPathName = e.target.href.replace(location.origin, "");
      history.pushState(null, null, newPathName);

      renderPage(newPathName);
    });
  });
};

window.addEventListener("popstate", () => render());
