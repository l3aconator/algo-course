import insertionSort from '.';

describe('Test Insertion Sort', () => {
  test('Checks if items are in order', () => {
    const numbers = [10, 5, 2, 3, 8, 6, 7, 9, 1, 4];

    expect(insertionSort(numbers)).toEqual([
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
