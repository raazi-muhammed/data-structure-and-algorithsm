const binarySearch = (arr, target) => {
	let leftIndex = 0;
	let rightIndex = arr.length - 1;

	while (leftIndex <= rightIndex) {
		let middleItemIndex = Math.floor((rightIndex + leftIndex) / 2);
		if (arr[middleItemIndex] === target) return middleItemIndex;

		if (target < arr[middleItemIndex]) rightIndex = middleItemIndex - 1;
		if (target > arr[middleItemIndex]) leftIndex = middleItemIndex + 1;
	}

	return -1;
}; // o(logn)T

const binarySearchRecursive = (arr, target) => {
	let leftIndex = 0;
	let rightIndex = arr.length - 1;

	return recursiveCall(arr, target, leftIndex, rightIndex);
};

const recursiveCall = (arr, target, leftIndex, rightIndex) => {
	if (leftIndex > rightIndex) return -1;
	let middleItemIndex = Math.floor((leftIndex + rightIndex) / 2);
	if (target === arr[middleItemIndex]) return middleItemIndex;

	if (target < arr[middleItemIndex])
		return recursiveCall(arr, target, leftIndex, middleItemIndex - 1);
	if (target > arr[middleItemIndex])
		return recursiveCall(arr, target, middleItemIndex + 1, rightIndex);
}; // o(logn)T

module.exports = { binarySearch: binarySearchRecursive };
