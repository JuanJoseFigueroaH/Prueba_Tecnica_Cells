import { LitElement, html } from "lit";
import "./components/data-manager";
import "./components/ui-list";
import "./components/ui-evolutions";
import "./components/ui-form";
import "./components/ui-modal";

export class PokemonApp extends LitElement {
  static properties = {
    pokemon: { type: Array },
    currentPage: { type: String },
    currentPokemon: { type: Object },
    selectedEvolution: { type: Object },
    showModal: { type: Boolean },
  };

  constructor() {
    super();
    this.pokemon = [];
    this.currentPage = "list";
    this.currentPokemon = null;
    this.selectedEvolution = null;
    this.showModal = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchPokemon();
  }

  async fetchPokemon() {
    const dataManager = new (customElements.get("data-manager"))();
    this.pokemon = await dataManager.fetchPokemon();
  }

  navigateTo(page, pokemon = null, evolution = null) {
    this.currentPage = page;
    this.currentPokemon = pokemon;
    this.selectedEvolution = evolution;
  }

  render() {
    return html`
      ${this.currentPage === "list"
        ? html`
            <ui-list
              .pokemon="${this.pokemon}"
              .onSelectPokemon="${(pokemon) =>
                this.navigateTo("evolutions", pokemon)}"
            ></ui-list>
          `
        : ""}
      ${this.currentPage === "evolutions"
        ? html`
            <ui-evolutions
              .pokemon="${this.currentPokemon}"
              .onBack="${() => this.navigateTo("list")}"
              .onEditEvolution="${(evolution) =>
                this.navigateTo("form", this.currentPokemon, evolution)}"
            ></ui-evolutions>
          `
        : ""}
      ${this.currentPage === "form"
        ? html`
            <ui-form
              .pokemon="${this.selectedEvolution}"
              .onBack="${() =>
                this.navigateTo("evolutions", this.currentPokemon)}"
              .onShowModal="${() => (this.showModal = true)}"
            ></ui-form>
          `
        : ""}
      <ui-modal .show="${this.showModal}"></ui-modal>
    `;
  }
}
customElements.define("pokemon-app", PokemonApp);
