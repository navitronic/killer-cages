import { killerCombinations } from './killerCombinations';

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

function containsAnyNumbers(arr1: number[], arr2: number[]): boolean {
  return arr1.some((num) => arr2.includes(num));
}

function containsAllNumbers(arr1: number[], arr2: number[]): boolean {
  return arr2.every((num) => arr1.includes(num));
}

export function validCombinations(total: number, size: number) {
  return killerCombinations.filter((arr) => arr.length === size && totalInArray(arr) === total);
}

export function combinations(total: number, size: number, inclusions: number[], exclusions: number[]) {
  let combinations = validCombinations(total, size);

  if (exclusions.length > 0) {
    combinations = combinations.filter((n) => !containsAnyNumbers(n, exclusions));
  }

  if (inclusions.length > 0) {
    combinations = combinations.filter((n) => containsAllNumbers(n, inclusions));
  }

  return combinations;
}

export function numStrToArr(excStr: string): number[] {
  return excStr
    .split(' ')
    .map((n) => Number(n))
    .filter((value) => value >= 1 && value <= 9);
}

export function ensureUniqueNumbers(arr: number[]): number[] {
  const uniqueArray: number[] = [];

  arr.forEach((num) => {
    if (!uniqueArray.includes(num)) {
      uniqueArray.push(num);
    }
  });

  return uniqueArray;
}
