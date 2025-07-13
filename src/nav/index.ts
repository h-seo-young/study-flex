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

  // Navigation links
  routes.forEach((route) => {
    const link = document.createElement("a");

    link.className = "app-navigation-link";
    link.href = route.href;
    link.textContent = `${route.name || route.component.name}`;

    nav.appendChild(link);
  });

  nav.addEventListener("click", (e) => {
    const target = e.target as HTMLAnchorElement;

    if (target.tagName === "A" && target.href) {
      e.preventDefault();
      history.pushState(null, "", target.href);

      renderPage();
    }
  });

  return {
    navElement: nav,
  };
}
