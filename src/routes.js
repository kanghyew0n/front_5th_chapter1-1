import { ErrorPage, LoginPage, MainPage, ProfilePage } from "./pages";
import { userStore } from "./store/store";

const routes = {
  "/": MainPage,
  "/profile": ProfilePage,
  "/login": LoginPage,
};

export const renderPage = (path) => {
  const pageComponent = routes[path];
  const userInfo = userStore.getUserInfo();

  // 로그인 필수 path를 관리하는 방법 없을까? 코드에 녹이기는 너무 복잡하다..!
  if (!pageComponent) {
    return (document.body.innerHTML = `${ErrorPage()}`);
  }
  if (!userInfo && path === "/profile") {
    return (document.body.innerHTML = `${LoginPage()}`);
  }
  return (document.body.innerHTML = `${pageComponent()}`);
};

export const render = () => {
  renderPage(location.pathname);

  document.body.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      e.preventDefault();
      const newPathName = e.target.href.replace(location.origin, "");
      history.pushState(null, null, newPathName);

      renderPage(newPathName);
    }
  });
};

window.addEventListener("popstate", () => render());
