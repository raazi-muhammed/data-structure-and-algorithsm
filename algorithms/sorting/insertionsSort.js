const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let numberToInsert = array[i];
    let j = i - 1;
    while (array[j] > numberToInsert && j >= 0) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = numberToInsert;
  }
  return array;
};
module.exports = { insertionSort };
