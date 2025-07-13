import { Component } from "../../core/component";
import "./index.css";

class Case4 extends Component {
  template(): string {
    return /*html*/ `
      <header class="hg-header">
            <h1>Holy Grail Layout</h1>
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        </header>

        <div class="hg-main-container">
            <aside class="hg-left-sidebar">
                <h2>Left Sidebar</h2>
                <ul>
                    <li>Menu Item 1</li>
                    <li>Menu Item 2</li>
                    <li>Menu Item 3</li>
                </ul>
            </aside>

            <article class="hg-content">
                <h2>Main Content Area</h2>
                ${Array.from(
                  { length: 10 },
                  () =>
                    `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae perferendis quae assumenda unde, molestiae numquam harum doloremque rem, magnam id ullam expedita accusamus similique eveniet! Aliquid exercitationem illum quibusdam! Magnam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae perferendis quae assumenda unde, molestiae numquam harum doloremque rem, magnam id ullam expedita accusamus similique eveniet! Aliquid exercitationem illum quibusdam! Magnam!</p>`
                ).join("")}
            </article>

            <aside class="hg-right-sidebar">
                <h2>Right Sidebar</h2>
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                </ul>
            </aside>
        </div>

        <footer class="hg-footer">
            <p>&copy; 2025 Holy Grail Layout. All rights reserved.</p>
        </footer>
    </div>
    `;
  }
}

export { Case4 };
