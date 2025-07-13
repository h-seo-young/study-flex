import type { Route } from "../routes";
import "./index.css";

export function setupNavigation({
  routes,
  renderPage,
}: {
  routes: Route[];
  renderPage: () => void;
}) {
  const nav = document.createElement("nav");
  nav.className = "app-navigation";

  const renderNav = () => {
    nav.innerHTML = /*html*/ `
  <a class='app-title'>Study Flex Layout</a>
  
  <div class="app-navigation-links">
    ${routes
      .map(
        (route) =>
          `<a class="app-navigation-link ${
            route.href === window.location.pathname ? "current-page" : ""
          }" href="${route.href}">${route.name || route.component.name} </a>`
      )
      .join("")}
  </div>`;
  };

  renderNav();

  nav.addEventListener("click", (e) => {
    const target = e.target as HTMLAnchorElement;

    if (target.tagName === "A" && target.href) {
      e.preventDefault();
      history.pushState(null, "", target.href);

      renderPage();
      renderNav();
    }
  });

  return {
    navElement: nav,
  };
}
