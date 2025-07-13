export class Component {
  $: HTMLElement;
  styleHref?: string;
  private styleElement: HTMLLinkElement | null = null;

  constructor(target: HTMLElement) {
    this.$ = target;
  }

  /**
   * 오버라이드하여 페이지의 HTML 템플릿을 정의합니다.
   * 이 메서드는 페이지가 렌더링될 때 호출됩니다.
   *
   * @returns {string} 페이지의 HTML 템플릿 문자열
   */
  template(): string {
    return ``;
  }

  // Method to load the CSS file
  private loadCss() {
    if (!this.styleElement && this.styleHref) {
      this.styleElement = document.createElement("link");
      this.styleElement.rel = "stylesheet";
      this.styleElement.href = this.styleHref;

      document.head.appendChild(this.styleElement);
    }
  }

  private unloadCss() {
    if (this.styleElement && document.head.contains(this.styleElement)) {
      document.head.removeChild(this.styleElement);
      this.styleElement = null;
    }
  }

  render() {
    this.loadCss();
    this.$.innerHTML = this.template();
  }

  destroy() {
    this.unloadCss();
    this.$.innerHTML = "";
  }
}
