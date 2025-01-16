// src/components/ui-list.js
import { LitElement, html, css } from "lit";

export class UIList extends LitElement {
  static styles = css`
    .pokemon-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 16px;
      margin: 8px;
      text-align: center;
    }
    img {
      width: 100px;
      height: 100px;
    }
    .pokemon-name {
      font-size: 18px;
      font-weight: bold;
    }
  `;

  static properties = {
    pokemon: { type: Array },
    onSelectPokemon: { type: Function },
  };

  render() {
    return html`
      ${this.pokemon.map(
        (poke) => html`
          <div
            class="pokemon-card"
            @click="${() => this.onSelectPokemon(poke)}"
          >
            <img src="src/assets/img/${poke.image}" alt="${poke.name}" />
            <div class="pokemon-name">${poke.name}</div>
            <div class="pokemon-type">${poke.type}</div>
          </div>
        `
      )}
    `;
  }
}
customElements.define("ui-list", UIList);
