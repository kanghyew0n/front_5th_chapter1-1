import { renderWithNavigation } from "../routes/router";
import { handleLogin, updateProfile } from "../store/userAction";
import { userStore } from "../store/store";

export const event = (routeType) => {
  const root = document.getElementById("root");

  root.addEventListener("click", (e) => {
    const target = e.target.closest("a");
    if (!target) return;

    e.preventDefault();

    if (e.target.id === "logout") {
      userStore.logout();
      return renderWithNavigation(routeType, "/login");
    }

    renderWithNavigation(routeType, target.pathname);
  });

  root.addEventListener("submit", (e) => {
    e.preventDefault();

    if (e.target.id === "login-form") {
      handleLogin(e.target.elements);
      renderWithNavigation(routeType, "/profile");
    }

    if (e.target.id === "profile-form") {
      updateProfile(e.target.elements);
    }
  });
};
