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
};

const binarySearchRecursive = (arr, target) => {
	let leftIndex = 0;
	let rightIndex = arr.length - 1;

	return binaryRecursiveHelper(arr, target, leftIndex, rightIndex);
};

const duplicateFinder = (arr, target) => {
	let leftIndex = 0;
	let rightIndex = arr.length - 1;

	let index = binaryRecursiveHelper(arr, target, leftIndex, rightIndex);
	if (arr[index - 1] === target || arr[index + 1] === target) return true;
	else return false;
};

const closestValueFinder = (arr, target) => {
	let leftIndex = 0;
	let rightIndex = arr.length - 1;

	const index = binaryRecursiveHelper(arr, target, leftIndex, rightIndex);
	if (index === 0) return arr[1];
	if (index === rightIndex) return arr[rightIndex - 1];

	const leftDiff = Math.abs(arr[index - 1] - target);
	const rightDiff = Math.abs(arr[index + 1] - target);

	if (leftDiff < rightDiff) return arr[index - 1];
	else return arr[index + 1];
};

const binaryRecursiveHelper = (arr, target, leftIndex, rightIndex) => {
	if (leftIndex > rightIndex) return -1;
	let middleItemIndex = Math.floor((leftIndex + rightIndex) / 2);
	if (target === arr[middleItemIndex]) return middleItemIndex;

	if (target < arr[middleItemIndex])
		return binaryRecursiveHelper(arr, target, leftIndex, middleItemIndex - 1);
	if (target > arr[middleItemIndex])
		return binaryRecursiveHelper(arr, target, middleItemIndex + 1, rightIndex);
}; // o(logn)T

module.exports = {
	binarySearch,
	binarySearchRecursive,
	duplicateFinder,
	closestValueFinder,
};
