const shiftItemsInArray = (arr, shiftBy) => {
	const newArray = [];
	shiftBy = shiftBy % arr.length;

	for (let i = shiftBy; i < arr.length; i++) newArray.push(arr[i]);
	for (let i = 0; i < shiftBy; i++) newArray.push(arr[i]);
	return newArray;
}; // O(n)ST

console.log("Original Array     :", [1, 2, 3, 4, 5]);
console.log("Shift By           :", 2);
console.log("Shifted Array      :", shiftItemsInArray([1, 2, 3, 4, 5], 2));
console.log("\n");
console.log("Original Array     :", [1, 2, 3, 4, 5, 6]);
console.log("Shift By           :", 10);
console.log("Shifted Array      :", shiftItemsInArray([1, 2, 3, 4, 5, 6], 10));
