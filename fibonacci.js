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

console.log(findFibonacci(3));
console.log(findFibonacci(7));
