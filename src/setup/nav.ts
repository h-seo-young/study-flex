import type { Route } from "../routes";

export function setupNavigation({
  routes,
  element,
  renderPage,
}: {
  routes: Route[];
  element: HTMLElement;
  renderPage: () => void;
}) {
  const nav = document.createElement("nav");

  element.appendChild(nav);

  // Navigation links
  routes.forEach((route) => {
    const link = document.createElement("a");
    link.href = route.href;
    link.textContent = `Go to ${route.href}`;

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
}
