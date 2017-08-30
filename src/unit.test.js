import {uniteUnique} from './unit';

test('make sure it returns only unique elements', () => {
  const result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  expect(result).toEqual([1, 3, 2, 5, 4]);
});

test('it supports multiple arguments', () => {
  const result = uniteUnique([1, 2, 3], [5, 2, 1]);
  expect(result).toEqual([1, 2, 3, 5]);
});

test('if nested arrays present merge them as it is', () => {
  const result = uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
  expect(result).toEqual([1, 3, 2, [5], [4]]);
});

test('more arguments', () => {
  const result = uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
  expect(result).toEqual([1, 2, 3, 5, 4, 6, 7, 8]);
});
