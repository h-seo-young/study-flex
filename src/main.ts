import { routes, setUpRoutes } from "./routes";
import { setupNavigation } from "./nav";

import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;
const { renderLocation, contentsEl } = setUpRoutes();

const { navElement } = setupNavigation({
  routes,
  renderPage: () => {
    renderLocation(contentsEl);
  },
});

app.appendChild(navElement);
app.appendChild(contentsEl);

renderLocation(contentsEl); // 초기 페이지 렌더링
