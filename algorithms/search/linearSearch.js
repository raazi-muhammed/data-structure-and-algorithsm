const linearSearch = (arry, target) => {
	for (let i = 0; i < arry.length; i++) {
		if (arry[i] === target) return i;
	}
	return -1;
};

const linearSearchLargestValue = (arry) => {
	let largest = arry[0];
	for (let i = 0; i < arry.length; i++) {
		if (arry[i] > largest) largest = arry[i];
	}
	return largest;
};

const linearSearchSumFinder = (arry, target) => {
	for (let i = 0; i < arry.length - 1; i++) {
		for (let j = i + 1; j < arry.length; j++) {
			if (arry[i] + arry[j] === target) return [arry[i], arry[j]];
		}
	}
	return [];
};

const linearSearchOccurrenceFinder = (arry, target) => {
	let count = 0;
	arry.map((val) => {
		if (val === target) count++;
	});
	return count;
};

module.exports = {
	linearSearch,
	linearSearchLargestValue,
	linearSearchSumFinder,
	linearSearchOccurrenceFinder,
};
