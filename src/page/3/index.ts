import { Component } from "../../core/component";

class Case3 extends Component {
  styleHref = "src/page/3/style.css";

  template(): string {
    return /*html*/ `
      <div class="page3">
        <h1>Page 3</h1>
        <p>This is the content of Page 3.</p>
      </div>
    `;
  }
}

export { Case3 };
