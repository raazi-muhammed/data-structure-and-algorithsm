const {
	linearSearch,
	linearSearchLargestValue,
	linearSearchSumFinder,
	linearSearchOccurrenceFinder,
} = require("./linearSearch");

describe("Testing Linear Search", () => {
	test("Get the index of the values from array", () => {
		const arry = [1, 2, 3, 5, 32, 35, 1, 12, 3];
		expect(linearSearch(arry, 5)).toBe(3);
		expect(linearSearch(arry, 34)).toBe(-1);
		expect(linearSearch(arry, 12)).toBe(7);
	});
	test("Finding largest element", () => {
		const arry = [1, 2, 3, 5, 32, 35, 1, 12, 3];
		expect(linearSearchLargestValue(arry)).toBe(35);
		expect(linearSearchLargestValue([1, 100])).toBe(100);
	});
	test("Occurrence finder", () => {
		const arry = [1, 1, 2, 2, 3, 1, 2, 3, 5, 1];
		expect(linearSearchOccurrenceFinder(arry, 1)).toBe(4);
		expect(linearSearchOccurrenceFinder(arry, 2)).toBe(3);
		expect(linearSearchOccurrenceFinder(arry, 5)).toBe(1);
		expect(linearSearchOccurrenceFinder(arry, 200)).toBe(0);
	});
	test("Find two values that equal to target from the array", () => {
		const arry = [1, 2, 3, 5, 32, 35, 1, 12, 3];
		expect(linearSearchSumFinder(arry, 5)).toEqual(
			expect.arrayContaining([2, 3] || [3, 2])
		);
		expect(linearSearchSumFinder(arry, 35)).toEqual(
			expect.arrayContaining([32, 3] || [3, 32])
		);
		expect(linearSearchSumFinder(arry, 1000)).toEqual([]);
	});
});
