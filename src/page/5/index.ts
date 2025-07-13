import { Component } from "../../core/component";
import "./index.css";

class Case5 extends Component {
  template(): string {
    return /*html*/ `
        <header class="app-header">
            <h1>Case 5 layout</h1>
            <nav>
                <a href="#">Home</a>
                <a href="#">Categories</a>
                <a href="#">Archives</a>
            </nav>
        </header>

        <main class="app-main-content-area">
            <article class="main-article">
                <h2>Case 5 layout</h2>
                ${Array.from(
                  { length: 10 },
                  () =>
                    `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae perferendis quae assumenda unde, molestiae numquam harum doloremque rem, magnam id ullam expedita accusamus similique eveniet! Aliquid exercitationem illum quibusdam! Magnam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae perferendis quae assumenda unde, molestiae numquam harum doloremque rem, magnam id ullam expedita accusamus similique eveniet! Aliquid exercitationem illum quibusdam! Magnam!</p>`
                ).join("")}
            </article>

            <aside class="main-sidebar">
                <h2>Side menu1</h2>
                <ul>
                    <li><a href="#">Title 1</a></li>
                    <li><a href="#">Title 2</a></li>
                    <li><a href="#">Title 3</a></li>
                </ul>
                <h2>Side menu2</h2>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </aside>
        </main>

        <footer class="app-footer">
            <p>&copy; 2025 Simple Layout. All rights reserved.</p>
        </footer>
    `;
  }
}

export { Case5 };
