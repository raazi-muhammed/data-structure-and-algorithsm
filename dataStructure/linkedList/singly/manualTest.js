const findFibonacciRecursive = (index) => {
	if (index <= 1) return index;
	return findFibonacciRecursive(index - 1) + findFibonacciRecursive(index - 2);
}; // O(2^n)ST

let a = findFibonacciRecursive(5);
console.log(a);
