const removeDuplicates = (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] == arr[i + 1]) arr.splice(i--, 1);
	}
	return arr;
};

console.log("Original Array :", [1, 1, 2, 3, 3, 3, 3, 3]);
console.log("Unique Array   :", removeDuplicates([1, 1, 2, 3, 3, 3, 3, 3]));
console.log("\n");
console.log("Original Array :", [1, 1, 2, 2, 2, 2, 2]);
console.log("Unique Array   :", removeDuplicates([1, 1, 2, 2, 2, 2, 2]));
