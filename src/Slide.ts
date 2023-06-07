import { LitElement, html, css } from 'lit';

export class Slide extends LitElement {
  static styles = css`
    :host {
      display: grid;
      place-content: center;
      grid-template-rows: auto;
      grid-template-columns: auto;
      width: 100vw;
      height: 100vh;
      box-sizing: border-box;
      border: 0.5rem solid;
      padding: 2rem;
      position: absolute;
      translate: calc(var(--col, 0) * 100vw) calc(var(--row, 0) * 100dvh);
    }
    ::slotted(:not([slot])) {
      z-index: 1;
    }
    ::slotted(img[slot="staged"]) {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    [name="link"]::slotted(*) {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 25%;
      height: auto;
    }
    ::slotted([slot="footnote"]) {
      position: absolute;
      left: 0.5em;
      bottom: 0.5em;
      margin: 0;
      font-size: 0.5em;
    }
  `;

  render() {
    return html`
      <slot></slot>
      <slot name="staged"></slot>
      <slot name="link"></slot>
      <slot name="footnote"></slot>
    `;
  }

  firstUpdated() {
    this.tabIndex = -1;
  }
}
