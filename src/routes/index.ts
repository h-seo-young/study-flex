import { Case1 } from "../page/1";
import { Case2 } from "../page/2";
import { Case3 } from "../page/3";
import { Case4 } from "../page/4";
import { Case5 } from "../page/5";

import type { Component } from "../core/component";

import "./index.css";

export type Route = {
  component: typeof Component;
  href: string;
  name?: string;
};

export const routes: Route[] = [
  {
    component: Case1,
    href: "/1",
    name: "Case 1",
  },
  {
    component: Case2,
    href: "/2",
    name: "Case 2",
  },
  {
    component: Case3,
    href: "/3",
    name: "Case 3",
  },
  {
    component: Case4,
    href: "/4",
    name: "Case 4",
  },
  {
    component: Case5,
    href: "/5",
    name: "Case 5",
  },
];

/**
 * 라우트 설정 및 렌더링 함수
 *
 * 이 함수는 현재 경로에 맞는 컴포넌트를 렌더링하고, 뒤로가기 / 앞으로가기 버튼을 처리합니다.
 */
export function setUpRoutes() {
  let currentComponent: Component | null = null;

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
    /**
     * 현재 경로에 맞는 컴포넌트를 렌더링하는 함수
     * @param element - 렌더링할 HTML 요소
     *
     * 이 함수는 현재 경로에 맞는 컴포넌트를 찾아서 렌더링합니다.
     * 만약 현재 경로에 맞는 컴포넌트가 없다면, 첫 번째 라우트의 컴포넌트를 렌더링합니다.
     */
    renderLocation,
    /**
     * 현재 페이지를 렌더링할 HTML 요소
     * @type {HTMLElement}
     *
     * 이 요소는 현재 페이지의 내용을 렌더링하는 데 사용됩니다.
     * 페이지 컴포넌트가 이 요소에 내용을 추가합니다.
     */
    contentsEl: rootRenderEl,
  };
}
