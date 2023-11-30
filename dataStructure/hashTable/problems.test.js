const {
    sumOfTwoNumbersFromArray,
    charFrequency,
    containDuplicates,
} = require("./problems");

describe("Hash Table problems", () => {
    test("Sum of two number", () => {
        expect(sumOfTwoNumbersFromArray([1, 2, 3, 4, 5], 7)).toEqual([4, 3]);
        expect(sumOfTwoNumbersFromArray([1, 2, 3, 4, 5], 70)).toEqual([]);
        expect(sumOfTwoNumbersFromArray([1, 2, 3, 4, 5], 5)).toEqual([3, 2]);
    });
    test("Frequency of letter", () => {
        expect(charFrequency("abc")).toEqual([
            ["a", 1],
            ["b", 1],
            ["c", 1],
        ]);
        expect(charFrequency("raazi")).toEqual([
            ["r", 1],
            ["a", 2],
            ["z", 1],
            ["i", 1],
        ]);
        expect(charFrequency("malayalam")).toEqual([
            ["m", 2],
            ["a", 4],
            ["l", 2],
            ["y", 1],
        ]);
    });
    test("Does array contain duplicates number", () => {
        expect(containDuplicates([1, 2, 3])).toBe(false);
        expect(containDuplicates([1, 2, 3, 3])).toBe(true);
        expect(containDuplicates([1, 2, 3, 1])).toBe(true);
        expect(containDuplicates([1, 2, 9, 7, 3, 5, 6, 7, 8])).toBe(true);
    });
});
