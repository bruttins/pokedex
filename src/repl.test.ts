import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";

describe.each([
  {
    input: " hello world ",
    expected: ["hello", "world"],
  },
  {
    input: "Charmander BulbaSaur PIKACHU",
    expected: ["charmander", "bulbasaur", "pikachu"],
  },
])("cleanInput($input)", ({ input, expected }) => {
  test(`Expeected: ${expected}`, () => {
    const actual = cleanInput(input);
    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
});
