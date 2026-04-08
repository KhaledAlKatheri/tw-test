import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";

export default class CompTest extends LitElement {
  @property({ type: Object })
  config?: Record<string, any>;

  static styles = css`
    :host {
      display: block;
    }
    .comp-test {
      padding: 1rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    .comp-test-title {
      font-weight: 500;
      color: #2c3e50;
      margin: 0 0 1rem;
    }
    .comp-test-content {
      color: #666;
    }
  `;

  render() {
    return html`
      <div class="comp-test">
        <h3 class="comp-test-title">${this.config?.title || 'Comp Test'}</h3>
        <div class="comp-test-content">
          ${this.config?.content || 'This is a new Comp Test component'}
        </div>
      </div>
    `;
  }
}
