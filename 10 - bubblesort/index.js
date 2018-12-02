// Bubble sort

// loop through the array
// if this item > next item, swap them
// Indicate a swap occurred
// if a swap occurs, loop through array again
// continue looping until no swap occur

function bubbleSort(array) {
  let swapped = false;

  do {
    swapped = false;

    // eslint-disable-next-line
    array.forEach((item, index) => {
      // eslint-disable-next-line
      console.log(array.join(' '));
      if (item > array[index + 1]) {
        const temporary = item;

        // eslint-disable-next-line
        array[index] = array[index + 1];
        // eslint-disable-next-line
        array[index + 1] = temporary;
        swapped = true;
      }
    });
  } while (swapped);
  return array;
}

export default bubbleSort;
