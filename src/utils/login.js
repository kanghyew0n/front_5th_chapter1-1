import { render } from "../routes";
import { userStore } from "../store/store";

export const handleLogin = () => {
  const loginSubmitButton = document.getElementById("login-submit");

  loginSubmitButton?.addEventListener("click", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !username.trim()) {
      return window.alert("이름을 입력해주세요.");
    }
    if (!password || !password.trim()) {
      return window.alert("비밀번호를 입력해주세요.");
    }

    userStore.setUserInfo("username", username);
    userStore.setUserInfo("password", password);
    userStore.setUserInfo("email", "");
    userStore.setUserInfo("bio", "");

    history.pushState(null, null, "/profile");
    render();
  });
};
