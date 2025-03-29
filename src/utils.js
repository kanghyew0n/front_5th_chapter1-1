import { BASE_HISTORY_ROUTER } from "./constants.js";
import { LoginPage } from "./pages/login.js";
import { MainPage } from "./pages/main.js";
import { ProfilePage } from "./pages/profile.js";

export const getBasePath = (routeType) => {
  return routeType === "history" ? BASE_HISTORY_ROUTER : "#";
};

export const getRoutes = (routeType) => {
  const routerPrefix = getBasePath(routeType);

  return {
    [`${routerPrefix}/`]: MainPage,
    [`${routerPrefix}/profile`]: ProfilePage,
    [`${routerPrefix}/login`]: LoginPage,
  };
};

export const getPathByRouteType = (routeType) => {
  const hash = location.hash === "" ? "#/" : `${location.hash}`;
  return routeType === "history" ? location.pathname : hash;
};
