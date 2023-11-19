const replaceCharAtNthPosition = (str, n) => {
	const stringArry = str.split("").map((char) => {
		const charCode = char.charCodeAt(0);
		if (charCode === 32) return charCode;
		if (charCode > 96) return ((charCode + n - 97) % 26) + 97;
		else return ((charCode + n - 65) % 26) + 65;
	});
	return String.fromCharCode(...stringArry);
};

const input = [
	["aDcb", 2],
	["Zoo", 7],
	["This is a test", 2],
];

input.forEach((val) =>
	console.log(
		"\n",
		"Original String    :",
		val[0],
		"\n",
		"Shift Amount       :",
		val[1],
		"\n",
		"Replaced String    :",
		replaceCharAtNthPosition(...val)
	)
);
