const isPrimeNumber = (num) => {
	for (let i = 2; i < num; i++) {
		for (let j = i; j < num; j++) {
			if (i * j === num) return [num, false];
		}
	}
	return [num, true];
}; // O(n^2)T       / O(1)S

const isPrimeNumber1 = (num) => {
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) return [num, false];
	}

	return [num, true];
}; // O(sqrt(n))T   / O(1)S

console.log(isPrimeNumber1(5));
console.log(isPrimeNumber1(4));
console.log(isPrimeNumber1(1));
console.log(isPrimeNumber1(2));
console.log(isPrimeNumber1(6));
