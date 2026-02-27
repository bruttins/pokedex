import { State } from "./state.js";

export function cleanInput(input: string): string[] {
  const result = [];
  const splitArray = input.split(" ");
  for (let word of splitArray) {
    const cleaned = word.trim().toLowerCase();
    if (cleaned !== "") result.push(cleaned);
  }
  return result;
}

export function startREPL(state: State) {
  
  state.readline.prompt();
  state.readline.on('line', async (input) => {
    const words = cleanInput(input);
    if (words.length === 0) {
      state.readline.prompt();
      return;
    }
    const commands = state.commands;
    const commandName = words[0];
    const cmd = commands[commandName];
    const args = words.slice(1);
    if (cmd) {
      try {
        await cmd.callback(state, ...args);
      } catch (err) {
        if (err instanceof Error) {
          console.log(err.message);
        } else {
          console.log(err);
        }
      }
    } else {
      console.log("Unknown command");
    }
    state.readline.prompt();
  });
} 