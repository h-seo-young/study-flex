import { routes, setUpRoutes } from "./routes";
import { setupNavigation } from "./setup/nav";

import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;
const nav = document.createElement("nav");
const main = document.createElement("main");

app.appendChild(nav);
app.appendChild(main);

const { renderLocation } = setUpRoutes(main);

setupNavigation({
  routes,
  element: nav,
  renderPage: () => {
    renderLocation(main);
  },
});

renderLocation(main); // 초기 페이지 렌더링
