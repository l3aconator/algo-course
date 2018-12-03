import quickSort from '.';

describe('Test Quick Sort', () => {
  test('Checks if items are in order', () => {
    const numbers = [10, 6, 3, 2, 7, 9, 1, 8, 5, 4];

    expect(quickSort(numbers)).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
    ]);
  });
});
