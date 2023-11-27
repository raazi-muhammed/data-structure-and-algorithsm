const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (leftArr, rightArr) => {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  return [...sortedArr, ...leftArr, ...rightArr];
};

const mergeSort2 = (array) => {
  if (array.length <= 1) return array;

  let middleIdx = Math.floor(array.length / 2);
  let firstHalf = array.slice(0, middleIdx);
  let lastHalf = array.slice(middleIdx, array.length);

  return join(mergeSort2(firstHalf), mergeSort2(lastHalf));
};

const join = (firstHalf, lastHalf) => {
  let arr = new Array(firstHalf.length + lastHalf.length);

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < firstHalf.length && j < lastHalf.length) {
    if (firstHalf[i] <= lastHalf[j]) {
      arr[k++] = firstHalf[i++];
    } else {
      arr[k++] = lastHalf[j++];
    }
  }

  while (i < firstHalf.length) {
    arr[k++] = firstHalf[i++];
  }
  while (j < lastHalf.length) {
    arr[k++] = lastHalf[j++];
  }

  return arr;
};

/* ------------------------------------------------------------------  */

const mergeInPlace = (arr, start, mid, end) => {
  let start2 = mid + 1;

  // If the direct merge is already sorted
  if (arr[mid] <= arr[start2]) {
    return;
  }

  // Two pointers to maintain start
  // of both arrays to merge
  while (start <= mid && start2 <= end) {
    // If element 1 is in right place
    if (arr[start] <= arr[start2]) {
      start++;
    } else {
      let value = arr[start2];
      let index = start2;

      // Shift all the elements between element 1
      // element 2, right by 1.
      while (index != start) {
        arr[index] = arr[index - 1];
        index--;
      }
      arr[start] = value;

      // Update all the pointers
      start++;
      mid++;
      start2++;
    }
  }
};

const mergeSortInPlaceHelper = (arr, l, r) => {
  if (l < r) {
    let m = l + Math.floor((r - l) / 2);

    mergeSortInPlaceHelper(arr, l, m);
    mergeSortInPlaceHelper(arr, m + 1, r);

    mergeInPlace(arr, l, m, r);
    return arr;
  }
};

const mergeSortInPlace = (array) => {
  return mergeSortInPlaceHelper(array, 0, array.length - 1);
};

module.exports = { mergeSort, mergeSortInPlace };
