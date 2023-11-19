const linearSearch = require("./linearSearch");

test("Checking linear search", () => {
	const arry = [1, 2, 3, 5, 32, 35, 1, 12, 3];
	expect(linearSearch(arry, 5)).toBe(3);
	expect(linearSearch(arry, 34)).toBe(-1);
	expect(linearSearch(arry, 12)).toBe(7);
});
