import mergeSort from '.';

describe('Test Merge Sort', () => {
  test('Checks if items are in order', () => {
    const numbers = [10, 5, 4, 7, 8, 2, 1, 3, 9, 6];

    expect(mergeSort(numbers)).toEqual([
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
