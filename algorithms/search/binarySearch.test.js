const { binarySearch } = require("./binarySearch");

test("Checking binary search", () => {
	const arry = [2, 4, 5, 7, 9, 12, 16, 18, 38];
	expect(binarySearch(arry, 9)).toBe(4);
	expect(binarySearch(arry, 2)).toBe(0);
	expect(binarySearch(arry, 5)).toBe(2);
	expect(binarySearch(arry, 12)).toBe(5);
	expect(binarySearch(arry, 38)).toBe(8);
	expect(binarySearch(arry, 338)).toBe(-1);
	expect(binarySearch(arry, -8)).toBe(-1);
});
