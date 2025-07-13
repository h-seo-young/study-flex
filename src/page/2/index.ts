import { Component } from "../../core/component";
import "./index.css";

class Case2 extends Component {
  template(): string {
    return /*html*/ `
      <main class="case2-main">
        <section class="row-container">
          ${Array.from(
            { length: 20 },
            (_, idx) => `<div class='row-item'>${idx}</div>`
          ).join("")}
        </section>
      
        <section class="col-container">
          ${Array.from(
            { length: 20 },
            (_, idx) => `<div class='col-item'>${idx}</div>`
          ).join("")}
        </section>
        
      </main>
    `;
  }
}

export { Case2 };
