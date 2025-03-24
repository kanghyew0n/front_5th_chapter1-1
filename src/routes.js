import { ErrorPage, LoginPage, MainPage, ProfilePage } from "./pages";

const loadContent = (content) => {
  document.body.innerHTML = `${content()}`;
};

const routes = {
  "/": () => MainPage(),
  "/profile": () => ProfilePage(),
  "/login": () => LoginPage(),
  "/error": () => ErrorPage(),
};

export const router = (e) => {
  e.preventDefault();
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) return loadContent(routes["/error"]);

  loadContent(route);
};

// 다른 라우터 방법!
// // const routes = {
// //   '/user/:id': (id) => renderUserProfile(id),
// //   '/post/:id': (id) => renderPost(id),
// // };

// // function router() {
// //   const path = window.location.hash.slice(1);
// //   const [route, ...params] = path.split('/');
// //   const handler = routes[`/${route}/:id`];
// //   if (handler) {
// //       handler(...params);
// //   }
// // }

// const Router = (function () {
//   const routes = {};

//   function addRoute(path, component) {
//     routes[path] = component;
//   }

//   function navigate(path) {
//     const component = routes[path] || routes["404"];
//     document.getElementById("app").innerHTML = component();
//   }

//   function init() {
//     window.addEventListener("hashchange", () => {
//       navigate(window.location.hash.slice(1));
//     });
//     navigate(window.location.hash.slice(1) || "/");
//   }

//   return {
//     addRoute,
//     navigate,
//     init,
//   };
// })();

// // 사용
// Router.addRoute("/", () => "<h1>Home Page</h1>");
// Router.addRoute("/about", () => "<h1>About Page</h1>");
// Router.addRoute("404", () => "<h1>404 Not Found</h1>");
// Router.init();
