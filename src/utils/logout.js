import { render } from "../routes";
import { userStore } from "../store/store";

export const handleLogout = () => {
  const logoutButton = document.getElementById("logout");

  logoutButton?.addEventListener("click", (e) => {
    e.preventDefault();

    userStore.logout();

    history.pushState(null, null, "/login");
    render();
  });
};
