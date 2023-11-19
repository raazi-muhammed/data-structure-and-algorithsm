const findSecondLargest = (arr) => {
	let largest, secondLargest;

	if (arr[0] > arr[1]) [largest, secondLargest] = arr;
	else [secondLargest, largest] = arr;

	for (const item of arr) {
		if (item > secondLargest) {
			if (item < largest) secondLargest = item;
			if (item > largest) {
				secondLargest = largest;
				largest = item;
			}
		}
	}
	return secondLargest;
}; // O(n)T     | O(1)S

console.log("Array             :", [12, 4, 11, 11, 3]);
console.log("Second Largest    :", findSecondLargest([12, 4, 11, 11, 3]));
console.log("Array             :", [12, 4, -11, 9, 2, -3]);
console.log("Second Largest    :", findSecondLargest([12, 4, -11, 9, 2, -3]));
console.log("Array             :", [-12, -9, -2, -3]);
console.log("Second Largest    :", findSecondLargest([-12, -9, -2, -3]));
