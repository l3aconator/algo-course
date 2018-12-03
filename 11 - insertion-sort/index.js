// Insertion sort

// Uses nested loops
// Assumes a sorted list of length 1
// Compares the next item, and inserts it fbefore or after depending on the comparison

function insertionSort(array) {
  let i;
  let j;

  // eslint-disable-next-line
  for (i = 1; i < array.length; i++) {
    // eslint-disable-next-line
    for (j = 0; j < i; j++) {
      // eslint-disable-next-line
      console.log(array.join(' '));

      if (array[i] < array[j]) {
        const [item] = array.splice(i, 1);
        array.splice(j, 0, item);
      }
    }
  }

  // eslint-disable-next-line
  console.log(array.join(' '));
  return array;
}

export default insertionSort;
