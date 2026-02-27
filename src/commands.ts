import type { CLICommand } from "./state.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapBack } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Displays the next 20 map-locations",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Displays the previous 20 map-locations",
            callback: commandMapBack,
        },
        explore: {
            name: "explore",
            description: "Shows the Pokemon in the chosen area",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "Tries to catch a Pokemon",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect",
            description: "Shows pokemon information, if the pokemon is already caught",
            callback: commandInspect,
        },
        pokedex: {
            name: "pokedex",
            description: "Shows a list of pokemon you have already caught",
            callback: commandPokedex,
        }
    }
}