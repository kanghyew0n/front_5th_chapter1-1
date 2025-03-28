import { ErrorPage } from "../pages";
import { userStore } from "../store/store";
import { getBasePath, getPathByRouteType, getRoutes } from "../utils";
import { event } from "../event/event";

export const renderWithNavigation = (routerType = "history", path) => {
  switch (routerType) {
    case "hash":
      window.location.hash = `#${path}`;
      break;
    case "history": {
      const basePath = getBasePath(routerType);
      history.pushState(null, null, `${basePath + path}`);
      break;
    }
  }
  render(routerType);
};

let eventFlag = false;

export const render = (routeType) => {
  const root = document.getElementById("root");

  const routes = getRoutes(routeType);
  const path = getPathByRouteType(routeType);
  const basePath = getBasePath(routeType);

  const isLoggedIn = userStore.loggedIn();

  if (!isLoggedIn && path === `${basePath}/profile`) {
    return renderWithNavigation(routeType, "/login");
  }
  if (isLoggedIn && path === `${basePath}/login`) {
    return renderWithNavigation(routeType, "/");
  }

  const page = routes[path] || ErrorPage;
  root.innerHTML = page();

  if (!eventFlag) {
    eventFlag = true;
    event(routeType);
  }
};

window.addEventListener("popstate", () => render("history"));
window.addEventListener("hashchange", () => render("hash"));
