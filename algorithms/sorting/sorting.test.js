const { bubbleSort } = require("./bubbleSort");
const { insertionSort } = require("./insertionsSort");
const { selectionSort } = require("./selectionSort");

test("Testing sort", () => {
  expect(selectionSort([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
  expect(selectionSort([4, 2, 3, 5])).toStrictEqual([2, 3, 4, 5]);
  expect(selectionSort([4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4]);
  expect(selectionSort([40, -2, -30, 1])).toStrictEqual([-30, -2, 1, 40]);
});
