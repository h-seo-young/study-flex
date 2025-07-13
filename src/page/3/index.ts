import { Component } from "../../core/component";
import "./index.css";

class Case3 extends Component {
  template(): string {
    return /*html*/ `
      <main class="case3-container">
        ${Array.from({ length: 100 }, (_, i) => i + 1)
          .map(
            (num) => `
          <div class="item">
            <h2>Item ${num}</h2>
            <p>This is the content of item ${num}.</p>
          </div>
        `
          )
          .join("")}
      </main>

      <div class="case3-footer">
          <p>Footer </p>
      </div>
    `;
  }
}

export { Case3 };
