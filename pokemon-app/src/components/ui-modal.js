import { LitElement, html, css } from "lit";

export class UIModal extends LitElement {
  static styles = css`
    .modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      padding: 20px;
      border: 1px solid #ccc;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
  `;

  static properties = {
    show: { type: Boolean },
  };

  render() {
    if (!this.show) return html``;
    return html`
      <div class="modal">
        <p>This Pokémon is repeated. You can change it at the nearest point.</p>
        <button @click="${() => (this.show = false)}">Close</button>
      </div>
    `;
  }
}
customElements.define("ui-modal", UIModal);
