import type { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]) {
    if (args.length !== 1) throw new Error("Please enter exactly one location name and without whitespace.");

    const locInfo = await state.pokeAPI.fetchLocation(args[0]);
    console.log(`Exploring ${args[0]}...`);
    console.log("Found Pokemon:");
    for (const encounter of locInfo.pokemon_encounters) {
        console.log(` - ${encounter.pokemon.name}`);
    };
}