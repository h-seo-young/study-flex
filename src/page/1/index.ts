import { Component } from "../../core/component";
import "./index.css";

class Case1 extends Component {
  template(): string {
    return /*html*/ `
      <div class='container'>
        <header class='header'>Case 1 header</header>
        
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

export { Case1 };
