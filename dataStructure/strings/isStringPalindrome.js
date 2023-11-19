const isStringPalindrome = (str) => {
	const strIndexLength = str.length - 1;
	for (let i = 0; i <= strIndexLength / 2; i++) {
		if (str.charAt(i) !== str.charAt(strIndexLength - i)) return false;
	}
	return true;
};

const input = [["hi"], ["malayalam"], ["palindrome"], ["mom"]];

input.forEach((val) =>
	console.log(
		"\n",
		"Original String    :",
		val[0],
		"\n",
		"Reversed String    :",
		isStringPalindrome(...val)
	)
);
