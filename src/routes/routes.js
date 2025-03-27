import { BASE_PATH } from "../constants";
import { ErrorPage, LoginPage, MainPage, ProfilePage } from "../pages";
import { userStore } from "../store/store";

const routes = {
  [`${BASE_PATH}/`]: MainPage,
  [`${BASE_PATH}/profile`]: ProfilePage,
  [`${BASE_PATH}/login`]: LoginPage,
};

const renderPageWithHistory = (path) => {
  history.pushState(null, null, path);
  render();
};

const handleLogout = (elements) => {
  const username = elements.username.value;

  if (!username || !username.trim()) {
    return window.alert("이름을 입력해주세요.");
  }

  userStore.setUserInfo({ username, email: "", bio: "" });
  renderPageWithHistory(`${BASE_PATH}/profile`);
};

const updateProfile = (elements) => {
  const username = elements.username.value;
  const email = elements.email.value;
  const bio = elements.bio.value;

  userStore.setUserInfo({ username, email, bio });
};

export const render = () => {
  const root = document.getElementById("root");
  const path = location.pathname;
  const isLoggedIn = userStore.loggedIn();

  // 가드 만들기
  if (!isLoggedIn && path === `${BASE_PATH}/profile`) {
    return renderPageWithHistory(`${BASE_PATH}/login`);
  }
  if (isLoggedIn && path === `${BASE_PATH}/login`) {
    return renderPageWithHistory(`${BASE_PATH}/`);
  }

  const page = routes[path] || ErrorPage;
  root.innerHTML = page();

  root.addEventListener("click", (e) => {
    const target = e.target.closest("a");
    if (!target) return;

    e.preventDefault();

    if (e.target.id === "logout") {
      userStore.logout();
      renderPageWithHistory(`${BASE_PATH}/login`);
    }

    renderPageWithHistory(`${BASE_PATH + target.pathname}`);
  });

  root.addEventListener("submit", (e) => {
    e.preventDefault();

    if (e.target.id === "login-form") {
      handleLogout(e.target.elements);
    }

    if (e.target.id === "profile-form") {
      updateProfile(e.target.elements);
    }
  });
};

window.addEventListener("popstate", () => render());
