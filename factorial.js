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

console.log(findFactorialRecursive(1));
console.log(findFactorialRecursive(4));
console.log(findFactorialRecursive(5));
