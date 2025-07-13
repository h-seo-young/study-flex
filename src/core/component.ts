export class Component {
  $: HTMLElement;
  styleHref?: string;

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

  render() {
    this.$.innerHTML = this.template();
  }

  destroy() {
    this.$.innerHTML = "";
  }
}
