import { userParam } from "../data/param";
import { USER_STORAGE_KEY } from "../constants";

// 강제로 객체형태로 사용하는것이 안전한 형태인지...
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
  loggedIn: () => {
    return !!JSON.parse(localStorage.getItem(USER_STORAGE_KEY));
  },
  logout: () => {
    localStorage.removeItem(USER_STORAGE_KEY);
  },
};
