const { bubbleSort } = require("./bubbleSort");
const { insertionSort } = require("./insertionsSort");
const { mergeSort, mergeSortInPlace } = require("./mergeSort");
const {
    stringSort,
    sortEventNumberFirst,
    sortOddAndEvenIntoSeparateArray,
} = require("./problems");
const { quickSort, quickSortIndex } = require("./quickSort");
const { selectionSort } = require("./selectionSort");

describe("Testing Sortings", () => {
    test("Character Sorting", () => {
        expect(stringSort("raazi")).toStrictEqual("aairz");
        expect(stringSort("acb")).toStrictEqual("abc");
    });
    test("Sorting even number first", () => {
        expect(sortEventNumberFirst([1, 2, 3, 4])).toStrictEqual([2, 4, 1, 3]);
        expect(sortEventNumberFirst([5, 3, 1, 2, 2, 5, 7])).toStrictEqual([
            2, 2, 1, 3, 5, 5, 7,
        ]);
    });
    test("Sorting even and odd numbers into separate arrays", () => {
        expect(sortOddAndEvenIntoSeparateArray([1, 2, 3, 4])).toStrictEqual([
            [2, 4],
            [1, 3],
        ]);
        expect(
            sortOddAndEvenIntoSeparateArray([5, 3, 1, 2, 2, 5, 7])
        ).toStrictEqual([
            [2, 2],
            [1, 3, 5, 5, 7],
        ]);
    });
    test("Testing sort", () => {
        expect(mergeSort([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
        expect(mergeSort([4, 2, 3, 5])).toStrictEqual([2, 3, 4, 5]);
        expect(mergeSort([4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4]);
        expect(mergeSort([40, -2, -30, 1])).toStrictEqual([-30, -2, 1, 40]);
    });
});
