import { LitElement } from "lit";

export class DataManager extends LitElement {
  async fetchPokemon() {
    const response = await fetch("http://localhost:3002/pokemon");
    return response.json();
  }

  async fetchEvolutions(pokemonName) {
    const response = await fetch(
      `http://localhost:3002/pokemon?name=${pokemonName}`
    );
    const data = await response.json();
    return data[0]?.evolutions || [];
  }
}
customElements.define("data-manager", DataManager);
