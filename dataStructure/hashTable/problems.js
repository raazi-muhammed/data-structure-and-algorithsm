/**
 *
 * @param {number[]} array
 * @param {number} target
 * @returns {array}
 */
const sumOfTwoNumbersFromArray = (array, target) => {
    let hash = new Map();
    for (val of array) {
        let toFind = target - val;
        if (hash.get(toFind)) return [val, toFind];
        hash.set(val, val);
    }
    return [];
};

/**
 *
 * @param {string} string
 * @returns {array}
 */
const charFrequency = (string) => {
    const letterCount = new Map();
    for (let i = 0; i < string.length; i++) {
        const char = string.charAt(i);
        let charInHash = letterCount.get(char);
        if (charInHash) {
            letterCount.set(char, ++charInHash);
        } else {
            letterCount.set(char, 1);
        }
    }
    return [...letterCount];
};

/**
 *
 * @param {number[]} array
 * @returns {boolean}
 */
const containDuplicates = (array) => {
    const hash = new Map();
    for (val of array) {
        if (hash.get(val)) return true;
        hash.set(val, val);
    }
    return false;
};

module.exports = { sumOfTwoNumbersFromArray, charFrequency, containDuplicates };
