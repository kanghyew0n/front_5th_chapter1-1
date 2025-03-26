import { BASE_PATH } from "../constants";
import { ErrorPage, LoginPage, MainPage, ProfilePage } from "../pages";
import { userStore } from "../store/store";

const routes = {
  [`${BASE_PATH}#/`]: MainPage,
  [`${BASE_PATH}#/profile`]: ProfilePage,
  [`${BASE_PATH}#/login`]: LoginPage,
};

const goTo = (path) => {
  history.pushState(null, null, path);
  render();
};

export const render = () => {
  const root = document.getElementById("root");
  const path =
    location.hash === "" ? `${BASE_PATH}#/` : `${BASE_PATH}${location.hash}`;

  const isLoggedIn = userStore.loggedIn();

  if (!isLoggedIn && path === `${BASE_PATH}#/profile`) {
    return goTo(`${BASE_PATH}#/login`);
  }
  if (isLoggedIn && path === `${BASE_PATH}#/login`) {
    return goTo(`${BASE_PATH}#/`);
  }

  const page = routes[path] || ErrorPage;
  root.innerHTML = page();

  root.addEventListener("click", (e) => {
    const target = e.target.closest("a");
    if (!target) return;

    e.preventDefault();
    if (e.target.id === "logout") {
      userStore.logout();

      history.pushState(null, null, `${BASE_PATH}#/login`);
      return render();
    }

    goTo(`${BASE_PATH}#${target.pathname}`);
  });

  root.addEventListener("submit", (e) => {
    e.preventDefault();

    if (e.target.id === "login-form") {
      const username = e.target.elements.username.value;

      if (!username || !username.trim()) {
        return window.alert("이름을 입력해주세요.");
      }

      userStore.setUserInfo("username", username);
      userStore.setUserInfo("email", "");
      userStore.setUserInfo("bio", "");

      history.pushState(null, "", `${BASE_PATH}#/profile`);
      return render();
    }

    if (e.target.id === "profile-form") {
      e.preventDefault();
      const { username, email, bio } = userStore.getUserInfo();

      const userNameValue = e.target.elements.username.value;
      const emailValue = e.target.elements.email.value;
      const bioValue = e.target.elements.bio.value;

      if (username !== userNameValue) {
        userStore.setUserInfo("username", userNameValue);
      }
      if (email !== emailValue) {
        userStore.setUserInfo("email", emailValue);
      }
      if (bio !== bioValue) {
        userStore.setUserInfo("bio", bioValue);
      }
    }
  });
};

window.addEventListener("popstate", () => render());
