const findFibonacci = (index) => {
	if (index === 0) return [];
	if (index === 1) return [0];
	if (index === 2) return [0, 1];

	let fibArry = [0, 1];
	for (let i = 2; i < index; i++) {
		fibArry.push(fibArry[i - 2] + fibArry[i - 1]);
	}
	return fibArry;
}; // O(n)ST

const findFibonacciRecursive = (index) => {
	if (index <= 1) return index;
	return findFibonacciRecursive(index - 1) + findFibonacciRecursive(index - 2);
}; // O(2^n)ST

const input = [[1], [4], [5], [9]];

input.forEach((val) =>
	console.log(
		"\n",
		"Number      :",
		val[0],
		"\n",
		"Fibonacci   :",
		findFibonacciRecursive(...val)
	)
);

console.log(findFibonacciRecursive(0));
console.log(findFibonacciRecursive(2));
console.log(findFibonacciRecursive(3));
console.log(findFibonacciRecursive(4));
console.log(findFibonacciRecursive(6));
