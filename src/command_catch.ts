import type { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]) {
    if (args.length !== 1) throw new Error("Please enter exactly one pokemon name.");

    const pokemonInfo = await state.pokeAPI.fetchPokemon(args[0]);
    console.log(`Throwing a Pokeball at ${pokemonInfo.name}...`);
    const exp = pokemonInfo.base_experience;
    const k = 80;
    const catchChance = k / (k + exp);

    if (Math.random() < catchChance) {
        console.log(`${pokemonInfo.name} was caught!`);
        console.log("You may now inspect it with the inspect command.")
        state.caughtPokemon[pokemonInfo.name] = pokemonInfo;
    } else {
        console.log(`${pokemonInfo.name} escaped!`)
    }
}