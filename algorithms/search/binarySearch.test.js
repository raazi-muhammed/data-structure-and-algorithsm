const {
	binarySearch,
	duplicateFinder,
	closestValueFinder,
} = require("./binarySearch");

describe("Checking Binary Search", () => {
	test("Return the index of the given value", () => {
		const arry = [2, 4, 5, 7, 9, 12, 16, 18, 38];
		expect(binarySearch(arry, 9)).toBe(4);
		expect(binarySearch(arry, 2)).toBe(0);
		expect(binarySearch(arry, 5)).toBe(2);
		expect(binarySearch(arry, 12)).toBe(5);
		expect(binarySearch(arry, 38)).toBe(8);
		expect(binarySearch(arry, 338)).toBe(-1);
		expect(binarySearch(arry, -8)).toBe(-1);
	});
	test("Closes value to the given value", () => {
		const arry = [2, 4, 5, 7, 9, 12, 16, 18, 38];
		expect(closestValueFinder(arry, 4)).toBe(5);
		expect(closestValueFinder(arry, 9)).toBe(7);
		expect(closestValueFinder(arry, 2)).toBe(4);
		expect(closestValueFinder(arry, 38)).toBe(18);
	});
	test("Find if the there are duplicates for this value", () => {
		expect(duplicateFinder([1, 2, 3, 4, 4], 4)).toBe(true);
		expect(duplicateFinder([1, 2, 3, 4, 4], 40)).toBe(false);
		expect(duplicateFinder([1, 3, 3, 3, 4], 3)).toBe(true);
	});
});
