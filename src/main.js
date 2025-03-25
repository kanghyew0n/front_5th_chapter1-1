import { render } from "./routes.js";
import { userStore } from "./store/store.js";
import { handleLogout } from "./utils/logout.js";

const app = () => {
  render();

  // Login
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

  // Update Profile
  const profileSubmitButton = document.getElementById("profile-submit");

  profileSubmitButton?.addEventListener("click", (e) => {
    e.preventDefault();

    const { username, email, bio } = userStore.getUserInfo();

    const userNameValue = document.getElementById("username").value;
    const emailValue = document.getElementById("email").value;
    const bioValue = document.getElementById("bio").value;

    if (username !== userNameValue) {
      userStore.setUserInfo("username", userNameValue);
    }
    if (email !== emailValue) {
      userStore.setUserInfo("email", emailValue);
    }
    if (bio !== bioValue) {
      userStore.setUserInfo("bio", bioValue);
    }

    window.alert("프로필이 업데이트되었어요!");
  });

  handleLogout();
};

app();
