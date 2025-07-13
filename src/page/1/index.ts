import { Page } from "../../core/page";

class Page1 extends Page {
  styleHref = "src/page/1/style.css";

  template(): string {
    return /*html*/ `
      <div class="page1">
        <h1>Page 1</h1>
        <p>This is the content of Page 1.</p>
      </div>
    `;
  }
}

export { Page1 };
