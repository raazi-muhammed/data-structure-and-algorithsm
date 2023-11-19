const reverseStringWithRecursion = (str) => {
	return reverseStringWithRecursionHelper(str, str.length);
};
const reverseStringWithRecursionHelper = (str, index) => {
	if (index < 0) return "";
	return str
		.charAt(index)
		.concat(reverseStringWithRecursionHelper(str, index - 1));
};

const input = [["hello"], ["brocamp"], ["this is a test"]];

input.forEach((val) =>
	console.log(
		"\n",
		"Original String    :",
		val[0],
		"\n",
		"Reversed String    :",
		reverseStringWithRecursion(...val)
	)
);
