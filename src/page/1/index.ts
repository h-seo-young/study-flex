import { Page } from "../../core/page";
import "./index.css";

class Page1 extends Page {
  template(): string {
    return /*html*/ `
      <div class='container'>
        <header class='header'>page 1 header</header>
        
        <main class='main'>
        ${Array.from({ length: 20 })
          .map((_, idx) => `<div class='content'>${idx} 번째 요소</div>`)
          .join("")}
          </main>
          
        <footer class='footer'>footer</footer>
      </div>
    `;
  }
}

export { Page1 };
