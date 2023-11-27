const { bubbleSort } = require("./bubbleSort");
const { insertionSort } = require("./insertionsSort");
const { mergeSort, mergeSortInPlace } = require("./mergeSort");
const { quickSort, quickSortIndex } = require("./quickSort");
const { selectionSort } = require("./selectionSort");

test("Testing sort", () => {
  expect(mergeSortInPlace([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
  expect(mergeSortInPlace([4, 2, 3, 5])).toStrictEqual([2, 3, 4, 5]);
  expect(mergeSortInPlace([4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4]);
  expect(mergeSortInPlace([40, -2, -30, 1])).toStrictEqual([-30, -2, 1, 40]);
});
