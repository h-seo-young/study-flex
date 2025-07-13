import { Page1 } from "../page/1";
import { Page2 } from "../page/2";
import { Page3 } from "../page/3";

import type { Page } from "../core/page";

import "./index.css";

export type Route = {
  component: typeof Page;
  href: string;
  name?: string;
};

export const routes: Route[] = [
  {
    component: Page1,
    href: "/1",
    name: "Page 1",
  },
  {
    component: Page2, // 다른 페이지 컴포넌트로 변경 가능
    href: "/2",
    name: "Page 2",
  },
  {
    component: Page3, // 기본 페이지로 설정
    href: "/3",
    name: "Page 3",
  },
];

/**
 * 라우트 설정 및 렌더링 함수
 *
 * 이 함수는 현재 경로에 맞는 컴포넌트를 렌더링하고, 뒤로가기 / 앞으로가기 버튼을 처리합니다.
 *
 * @returns {Object} 렌더링 함수와 콘텐츠 엘리먼트를 포함하는 객체
 */
export function setUpRoutes() {
  let currentComponent: Page | null = null;

  const rootRenderEl = document.createElement("div");
  rootRenderEl.className = "app-contents";

  const renderLocation = (element: HTMLElement) => {
    if (currentComponent) {
      currentComponent.destroy(); // 현재 컴포넌트가 있다면 제거
    }

    const path = window.location.pathname;
    const route = routes.find((r) => r.href === path);

    if (route) {
      currentComponent = new route.component(element);
    } else {
      // 일치하는 라우트가 없으면 첫 번째 레이아웃을 표시
      currentComponent = new routes[0].component(element);
      window.location.pathname = routes[0].href; // 기본 경로로 리다이렉트
    }

    currentComponent.render();
  };

  const handelPopState = () => {
    renderLocation(rootRenderEl);
  };

  // 6. 뒤로가기/앞으로가기 처리
  window.addEventListener("popstate", handelPopState);

  return {
    renderLocation,
    contentsEl: rootRenderEl,
  };
}
