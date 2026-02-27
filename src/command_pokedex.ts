import type { State } from "./state.js";

export async function commandPokedex(state: State) {
  console.log("Your Pokedex:");
  for (const key of Object.keys(state.caughtPokemon)) {
    console.log(` - ${key}`);
  }
}