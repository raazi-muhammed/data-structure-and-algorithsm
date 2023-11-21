const findFactorial = (num) => {
	let factori = 1;
	for (let i = 2; i <= num; i++) {
		factori = factori * i;
	}
	return factori;
}; // O(n)T     / O(1)S

const findFactorialRecursive = (num) => {
	if (num <= 2) {
		if (num === 0) return 1;
		return num;
	}
	return num * findFactorialRecursive(num - 1);
}; // O(n)T

const input = [[1], [4], [5], [9]];

input.forEach((val) =>
	console.log(
		"\n",
		"Number      :",
		val[0],
		"\n",
		"Factorial   :",
		findFactorialRecursive(...val)
	)
);

console.log(findFactorialRecursive(1));
console.log(findFactorialRecursive(4));
console.log(findFactorialRecursive(5));
