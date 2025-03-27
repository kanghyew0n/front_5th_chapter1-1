import { userParam } from "../data/param";
import { USER_STORAGE_KEY } from "../constants";

// 강제로 객체형태로 사용하는것이 안전한 형태인지...
export const userStore = {
  init: () => {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userParam));
  },
  setUserInfo: (userInfo) => {
    const { username, email, bio } = userInfo;
    const originUserInfo = JSON.parse(localStorage.getItem(USER_STORAGE_KEY));

    // 로그인시
    if (!originUserInfo) {
      return localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userInfo));
    }

    // 프로필 수정시
    const newUserInfo = { ...originUserInfo };

    if (originUserInfo?.username !== username) {
      newUserInfo.username = username;
    }
    if (originUserInfo?.email !== email) {
      newUserInfo.email = email;
    }
    if (originUserInfo?.bio !== bio) {
      newUserInfo.bio = bio;
    }

    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUserInfo));
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
