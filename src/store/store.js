import { userParam } from "../data/param";

export const userStore = {
  init: () => {
    localStorage.setItem("user", JSON.stringify(userParam));
  },
  setUserInfo: (key, value) => {
    const originUserInfo = JSON.parse(localStorage.getItem("menu"));
    const userInfo = { ...originUserInfo, [key]: value };
    localStorage.setItem("user", JSON.stringify(userInfo));
  },
  getUserInfo: () => {
    return JSON.parse(localStorage.getItem("user"));
  },
  logout: () => {
    return localStorage.clear();
  },
};
