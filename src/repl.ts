export function cleanInput(input: string): string[] {
  const result = [];
  const splitArray = input.split(" ");
  for (let word of splitArray) {
    const cleaned = word.trim().toLowerCase();
    if (cleaned !== "") result.push(cleaned);
  }
  return result;
}
