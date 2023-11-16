const findFactorial = (num) => {
	let factori = 1;
	for (let i = 2; i <= num; i++) {
		factori = factori * i;
	}
	return factori;
}; // O(n)T     / O(1)S

console.log(findFactorial(1));
console.log(findFactorial(4));
console.log(findFactorial(5));
