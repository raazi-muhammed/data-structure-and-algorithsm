const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let j = i + 1;
    let smallest = arr[i];
    let smallestIdx = i;

    while (j < arr.length) {
      if (arr[j] < smallest) {
        smallest = arr[j];
        smallestIdx = j;
      }
      j++;
    }

    arr[smallestIdx] = arr[i];
    arr[i] = smallest;
  }

  return arr;
};

module.exports = { selectionSort };
