import { compareTwoArray } from './compareTwoArray';

describe('compareTwoArray', () => {
  test('compare two array and return boolean.', () => {
    expect(compareTwoArray([1, 2, 3], [3, 2, 1])).toEqual(false);
    expect(compareTwoArray([1, 2, 3], [4, 2, 3])).toEqual(false);
    expect(compareTwoArray([1, 2, 1, 2], [1, 2, 1, 2])).toEqual(true);
    expect(compareTwoArray([1, 2, [3, 4]], [1, 2, [3, 4]])).toEqual(true);
    expect(compareTwoArray([1, '2, 5'], [1, 2, 3])).toEqual(false);
    expect(compareTwoArray([1, 2, [3, 4]], [1, 2, [3, 2]])).toEqual(false);
  });
});
