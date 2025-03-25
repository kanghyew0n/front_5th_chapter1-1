import { userStore } from "../store/store";

export const updateProfile = () => {
  const profileSubmitButton = document.getElementById("profile-submit");

  profileSubmitButton?.addEventListener("click", (e) => {
    e.preventDefault();

    const { username, email, bio } = userStore.getUserInfo();

    const form = document.getElementById("profile-form");
    const userNameValue = form.username.value;
    const emailValue = form.email.value;
    const bioValue = form.bio.value;

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
};
