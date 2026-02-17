import { createInterface } from "readline";
import { getCommands } from "./commands.js";

export function cleanInput(input: string): string[] {
  const result = [];
  const splitArray = input.split(" ");
  for (let word of splitArray) {
    const cleaned = word.trim().toLowerCase();
    if (cleaned !== "") result.push(cleaned);
  }
  return result;
}

export function startREPL() {
  const rl = createInterface({
    input: process.stdin,  
    output: process.stdout,
    prompt: 'Pokedex > '
  });
  
  rl.prompt(true);
  rl.on('line', (input) => {
    const words = cleanInput(input);
    if (words.length === 0) {
      rl.prompt(true);
      return;
    }
    const commands = getCommands();
    const commandName = words[0];
    const cmd = commands[commandName];
    if (cmd) {
      try {
        cmd.callback(commands);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Unknown command");
    }
    rl.prompt(true);
  });
}