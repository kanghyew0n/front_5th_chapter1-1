import { userParam } from "../data/param";
import { USER_STORAGE_KEY } from "../constants";

export const userStore = {
  init: () => {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userParam));
  },
  setUserInfo: (userInfo) => {
    const { username, email, bio } = userInfo;
    const originUserInfo = userStore.getUserInfo();

    // 로그인 시
    if (!originUserInfo) {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userInfo));
      return;
    }

    // 프로필 수정 시
    const newUserInfo = {
      ...originUserInfo,
      ...(originUserInfo.username !== username && { username }),
      ...(originUserInfo.email !== email && { email }),
      ...(originUserInfo.bio !== bio && { bio }),
    };

    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUserInfo));
  },
  getUserInfo: () => {
    return JSON.parse(localStorage.getItem(USER_STORAGE_KEY));
  },
  loggedIn: () => {
    return !!userStore.getUserInfo();
  },
  logout: () => {
    localStorage.removeItem(USER_STORAGE_KEY);
  },
};
