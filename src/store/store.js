import { userParam } from "../data/param";
import { USER_STORAGE_KEY } from "../constants";

export const userStore = {
  init: () => {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userParam));
  },
  setUserInfo: (key, value) => {
    const originUserInfo = JSON.parse(localStorage.getItem(USER_STORAGE_KEY));
    const userInfo = { ...originUserInfo, [key]: value };

    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userInfo));
  },
  getUserInfo: () => {
    return JSON.parse(localStorage.getItem(USER_STORAGE_KEY));
  },
  logout: () => {
    localStorage.removeItem(USER_STORAGE_KEY);
  },
};
