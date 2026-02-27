import type { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]) {
    if (args.length !== 1) throw new Error("Please enter exactly one pokemon name.");

    if (args[0] in state.caughtPokemon) {
        const pokemon = args[0];
        console.log(`Name: ${state.caughtPokemon[pokemon].name}`);
        console.log(`Height: ${state.caughtPokemon[pokemon].height}`);
        console.log(`Weight: ${state.caughtPokemon[pokemon].weight}`);
        console.log("Stats:");
        for (const stat of state.caughtPokemon[pokemon].stats) {
            console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
        };
        console.log("Types:");
        for (const type of state.caughtPokemon[pokemon].types) {
            console.log(`  -${type.type.name}`);
        }
    } else {
        console.log("you have not caught that pokemon");
    }

}