const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function generateCombinations(startIndex: number, combination: number[], combinations: number[][]): void {
  for (let index = startIndex; index < digits.length; index += 1) {
    const nextCombination = [...combination, digits[index]];
    combinations.push(nextCombination);
    generateCombinations(index + 1, nextCombination, combinations);
  }
}

function allKillerCombinations(): number[][] {
  const combinations: number[][] = [];
  generateCombinations(0, [], combinations);
  return combinations;
}

export const killerCombinations: Array<Array<number>> = allKillerCombinations();
