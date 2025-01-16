import { LitElement, html, css } from "lit";

export class UIForm extends LitElement {
  static styles = css`
    form {
      display: flex;
      flex-direction: column;
      gap: 8px;
      max-width: 300px;
    }
    label {
      font-weight: bold;
    }
    input {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  `;

  static properties = {
    pokemon: { type: Object },
    onBack: { type: Function },
    onShowModal: { type: Function },
  };

  constructor() {
    super();
    this.pokemon = null;
  }

  handleCheckChange(e) {
    if (e.target.checked) {
      this.onShowModal();
    }
  }

  render() {
    return html`
      <button @click="${this.onBack}">Back</button>
      <form>
        <label for="name">Name:</label>
        <input id="name" type="text" .value="${this.pokemon.name}" />

        <label for="type">Type:</label>
        <input id="type" type="text" .value="${this.pokemon.type}" />

        <label>
          <input type="checkbox" @change="${this.handleCheckChange}" />
          Is this Pokémon repeated?
        </label>
      </form>
    `;
  }
}
customElements.define("ui-form", UIForm);
