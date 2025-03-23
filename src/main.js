import { MainPage } from "./pages/main.js";

const app = () => {
  document.body.innerHTML = `
  ${MainPage()}
`;
};

app();
