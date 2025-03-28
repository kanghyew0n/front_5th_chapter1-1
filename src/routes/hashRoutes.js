import { ErrorPage, LoginPage, MainPage, ProfilePage } from "../pages";
import { handleLogin, updateProfile } from "../services/auth";
import { userStore } from "../store/store";

export const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/front_5th_chapter1-1" : "";

const routes = {
  ["#/"]: MainPage,
  ["#/profile"]: ProfilePage,
  ["#/login"]: LoginPage,
};

const renderPageWithHash = (path) => {
  window.location.hash = path;
  render();
};

let eventFlag = false;

export const render = () => {
  const root = document.getElementById("root");
  const path = location.hash === "" ? "#/" : `${location.hash}`;

  const isLoggedIn = userStore.loggedIn();

  if (!isLoggedIn && path === "#/profile") {
    return renderPageWithHash("#/login");
  }
  if (isLoggedIn && path === "#/login") {
    return renderPageWithHash("#/");
  }

  const page = routes[path] || ErrorPage;
  root.innerHTML = page();

  if (!eventFlag) {
    eventFlag = true;
    root.addEventListener("click", (e) => {
      const target = e.target.closest("a");
      if (!target) return;

      e.preventDefault();
      if (e.target.id === "logout") {
        userStore.logout();

        history.pushState(null, null, "#/login");
        return render();
      }

      renderPageWithHash(`#${target.pathname}`);
    });

    root.addEventListener("submit", (e) => {
      e.preventDefault();

      if (e.target.id === "login-form") {
        handleLogin(e.target.elements);
        renderPageWithHash("#/profile");
      }

      if (e.target.id === "profile-form") {
        updateProfile(e.target.elements);
      }
    });
  }
};

window.addEventListener("hashchange", () => render());
