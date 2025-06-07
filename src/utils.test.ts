import { range, numStrToArr, ensureUniqueNumbers, combinations } from './utils';

describe('range', () => {
  it('creates an increasing range', () => {
    expect(range(1, 3)).toEqual([1, 2, 3]);
  });

  it('creates a decreasing range', () => {
    expect(range(3, 1)).toEqual([3, 2, 1]);
  });

  it('returns single value when start equals end', () => {
    expect(range(2, 2)).toEqual([2]);
  });

  it('floors decimal values', () => {
    expect(range(1.9, 3.2)).toEqual([1, 2, 3]);
  });
});

describe('numStrToArr', () => {
  it('converts a space separated string to an array of numbers', () => {
    expect(numStrToArr('1 2 3')).toEqual([1, 2, 3]);
  });

  it('filters out invalid numbers', () => {
    expect(numStrToArr('1 10 a 5 0 9')).toEqual([1, 5, 9]);
  });
});

describe('ensureUniqueNumbers', () => {
  it('removes duplicates while preserving order', () => {
    expect(ensureUniqueNumbers([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });

  it('returns an empty array as-is', () => {
    expect(ensureUniqueNumbers([])).toEqual([]);
  });
});

describe('combinations', () => {
  it('filters combinations by inclusions', () => {
    expect(combinations(5, 2, [1], [])).toEqual([[1, 4]]);
  });

  it('filters combinations by inclusions and exclusions', () => {
    expect(combinations(5, 2, [1], [4])).toEqual([]);
  });
});
