const isPowerOfTwo = (num) => {
	if (num == 1) return true;

	while (num > 1) {
		if (num % 2 == 0) return true;
		num = num / 2;
	}

	return false;
}; // O(logn)T      / O(1)S

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(8));
