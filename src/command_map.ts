import type { State } from "./state.js";

export async function commandMap(state: State) {
    const locations = await state.pokeAPI.fetchLocations(state.nextLocationsURL);
    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;
    for (const result of locations.results) {
        console.log(result.name)
    }
}

export async function commandMapBack(state: State) {
    if (state.prevLocationsURL === null) {
        console.log("you're on the first page");
        return;
    } else {
        const locations = await state.pokeAPI.fetchLocations(state.prevLocationsURL);
        state.nextLocationsURL = locations.next;
        state.prevLocationsURL = locations.previous;
        for (const result of locations.results) {
            console.log(result.name)
        }
    }
}