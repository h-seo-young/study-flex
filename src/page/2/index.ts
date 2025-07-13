import { Page } from "../../core/page";

class Page2 extends Page {
  styleHref = "src/page/2/style.css";

  template(): string {
    return /*html*/ `
      <div class="page2">
        <h1>Page 2</h1>
        <p>This is the content of Page 2.</p>
      </div>
    `;
  }
}

export { Page2 };
