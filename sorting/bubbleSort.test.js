const { bubbleSort } = require("./bubbleSort");

test("Checking sorting algorithms", () => {
	expect(bubbleSort([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
	expect(bubbleSort([4, 2, 3, 5])).toStrictEqual([2, 3, 4, 5]);
	expect(bubbleSort([4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4]);
	expect(bubbleSort([40, -2, -30, 1])).toStrictEqual([-30, -2, 1, 40]);
});