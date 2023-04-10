import { killerCombinations } from './killlerCombinations';

export function range(start: number, end: number): number[] {
  start = Math.floor(start);
  end = Math.floor(end);

  const diff = end - start;
  if (diff === 0) {
    return [start];
  }

  const keys = Array(Math.abs(diff) + 1).keys();
  return Array.from(keys).map((x) => {
    const increment = end > start ? x : -x;
    return start + increment;
  });
}

function totalInArray(arr: number[]) {
  return arr.reduce((partialSum, a) => partialSum + a, 0);
}

function containsNumbers(arr1: number[], arr2: number[]): boolean {
  return arr1.some((num) => arr2.includes(num));
}

export function combinations(
  total: number,
  size: number,
  exclusions: number[],
) {
  return killerCombinations
    .filter((n) => !containsNumbers(n, exclusions))
    .filter((arr) => arr.length === size && totalInArray(arr) === total);
}
