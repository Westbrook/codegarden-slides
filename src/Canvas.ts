import { LitElement, html, css } from 'lit';


export class Canvas extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100vw;
      height: 100dvh;
      overflow: hidden;
    }
    div {
      translate: calc(var(--show-col, 0) * -100vw) calc(var(--show-row, 0) * -100dvh);
      /* transition: translate 0.3s ease-in-out; */
    }
  `;

  handleKeyup(event: KeyboardEvent): void {
    const { code } = event;
    const style = getComputedStyle(this);
    let col = parseFloat(style.getPropertyValue('--show-col'));
    let row = parseFloat(style.getPropertyValue('--show-row'));
    switch (code) {
      case 'ArrowRight':
        col += 1;
        if (event.shiftKey) {
          row = 0;
        }
        break;
      case 'ArrowLeft':
        col -= 1;
        if (event.shiftKey) {
          row = 0;
        }
        break;
      case 'ArrowDown':
        row += 1;
        if (event.shiftKey) {
          col = 0;
        }
        break;
      case 'ArrowUp':
        row -= 1;
        if (event.shiftKey) {
          col = 0;
        }
        break;
      default:
        break;
    }
    col = Math.max(col, 0);
    row = Math.max(row, 0);
    this.style.setProperty('--show-col', col.toString());
    this.style.setProperty('--show-row', row.toString());
  }

  render() {
    return html`
      <div
        part="canvas"
        @keyup=${this.handleKeyup}
      >
        <slot></slot>
      </div>
    `;
  }
}
