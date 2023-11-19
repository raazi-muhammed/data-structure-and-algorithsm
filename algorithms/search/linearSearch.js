const linearSearch = (arry, target) => {
	for (let i = 0; i < arry.length; i++) {
		if (arry[i] === target) return i;
	}
	return -1;
}; // O(n)T

module.exports = linearSearch;
