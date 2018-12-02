import bubbleSort from '.';

describe('Test Bubble Sort', () => {
  test('Checks if items are in order', () => {
    const numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1];

    expect(bubbleSort(numbers)).toEqual([
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
