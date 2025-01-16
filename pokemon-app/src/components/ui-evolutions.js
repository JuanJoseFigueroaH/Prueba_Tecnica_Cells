import { LitElement, html, css } from "lit";

export class UIEvolutions extends LitElement {
  static styles = css`
    .evolution-card {
      display: flex;
      align-items: center;
      border: 1px solid #ccc;
      padding: 16px;
      margin: 8px;
    }
    img {
      width: 50px;
      height: 50px;
      margin-right: 16px;
    }
    .no-evolutions {
      font-size: 18px;
      color: gray;
      margin-top: 16px;
      text-align: center;
    }
  `;

  static properties = {
    pokemon: { type: Object },
    onBack: { type: Function },
    onEditEvolution: { type: Function },
  };

  render() {
    return html`
      <button @click="${this.onBack}">Back</button>
      <h2>Evolutions for ${this.pokemon.name}</h2>
      ${this.pokemon.evolutions && this.pokemon.evolutions.length > 0
        ? html`
            ${this.pokemon.evolutions.map(
              (evo) => html`
                <div class="evolution-card">
                  <img src="src/assets/img/${evo.image}" alt="${evo.name}" />
                  <div>
                    <div>${evo.name}</div>
                    <div>${evo.type}</div>
                    <button @click="${() => this.onEditEvolution(evo)}">
                      Edit
                    </button>
                  </div>
                </div>
              `
            )}
          `
        : html`
            <div class="no-evolutions">
              This Pokémon does not have any evolutions.
            </div>
          `}
    `;
  }
}
customElements.define("ui-evolutions", UIEvolutions);
