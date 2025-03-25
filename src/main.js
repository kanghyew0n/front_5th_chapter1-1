import { render } from "./routes.js";
import { handleLogin } from "./utils/login.js";
import { handleLogout } from "./utils/logout.js";
import { updateProfile } from "./utils/updateProfile.js";

const app = () => {
  render();

  handleLogin();
  handleLogout();
  updateProfile();
};

app();
