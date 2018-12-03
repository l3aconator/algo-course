// Quick sort

// recursive
// we receive an array and pick a "pivot"
// items are compared to the pivots
// if an item is less than the pivot, put it in the "left" array, else into the "right" array
// return the array resulting from quicksort called on the left, the pivot and quicksort on the right

function quickSort(array) {
  // eslint-disable-next-line
  console.log(array.join(' '));

  if (array.length < 2) {
    return array;
  }

  const pivotIndex = array.length - 1;
  const pivot = array[pivotIndex];
  const left = [];
  const right = [];

  // eslint-disable-next-line
  for (let i = 0; i < pivotIndex; i++) {
    const currentItem = array[i];
    // eslint-disable-next-line
    currentItem < pivot
      ? left.push(currentItem)
      : right.push(currentItem);
  }

  const result = [...quickSort(left), pivot, ...quickSort(right)];

  // eslint-disable-next-line
  console.log(result.join(' '));

  return result;
}

export default quickSort;
