const { bubbleSort } = require("./bubbleSort");
const { mergeSort } = require("./mergeSort");

/** @param {string} str */
const stringSort = (str) => {
    // any sorting algorithm
    const sortArray = bubbleSort(str.split(""));
    return sortArray.join("");
};

const sortEventNumberFirst = (array) => {
    const odd = [];
    const even = [];

    for (itm of array) {
        if (itm % 2 === 0) even.push(itm);
        else odd.push(itm);
    }
    return [...mergeSort(even), ...mergeSort(odd)];
};
const sortOddAndEvenIntoSeparateArray = (array) => {
    const odd = [];
    const even = [];

    for (itm of array) {
        if (itm % 2 === 0) even.push(itm);
        else odd.push(itm);
    }
    return [mergeSort(even), mergeSort(odd)];
};

module.exports = {
    stringSort,
    sortEventNumberFirst,
    sortOddAndEvenIntoSeparateArray,
};
