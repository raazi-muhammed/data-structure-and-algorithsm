const quickSort = (arr) => {
  if (arr.length < 2) return arr;
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

const quickSortIndex = (array) => {
  quickSortIndexHelper(array, 0, array.length - 1);
  return array;
};

const quickSortIndexHelper = (array, startIdx, endIdx) => {
  if (startIdx >= endIdx) return;

  let pivotIdx = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;

  while (leftIdx <= rightIdx) {
    if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
      swap(array, leftIdx, rightIdx);
      leftIdx++;
      rightIdx--;
    }
    if (array[leftIdx] <= array[pivotIdx]) leftIdx++;
    if (array[rightIdx] >= array[pivotIdx]) rightIdx--;
  }
  swap(array, rightIdx, pivotIdx);
  quickSortIndexHelper(array, startIdx, rightIdx - 1);
  quickSortIndexHelper(array, rightIdx + 1, endIdx);
};

const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

module.exports = { quickSort, quickSortIndex };
