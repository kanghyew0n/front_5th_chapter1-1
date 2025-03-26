import { userStore } from "../store/store";

export const handleLogin = () => {
  const form = document.getElementById("login-form");

  const username = form.username.value;
  const password = form.password.value;

  if (!username || !username.trim()) {
    return window.alert("이름을 입력해주세요.");
  }
  if (!password || !password.trim()) {
    return window.alert("비밀번호를 입력해주세요.");
  }

  userStore.setUserInfo("username", username);
  userStore.setUserInfo("email", "");
  userStore.setUserInfo("bio", "");

  history.pushState(null, "", "/profile");
};
