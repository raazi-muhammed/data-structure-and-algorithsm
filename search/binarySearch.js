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

module.exports = { binarySearch };
