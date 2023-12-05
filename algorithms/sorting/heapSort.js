/** @param {number[]} array */
const heapSort = (array) => {
    let sortedArray = [];

    for (let i = array.length - 1; i > 0; i--) {
        array = heapify(array);
        sortedArray.push(array.shift());
    }
    return [...sortedArray, ...array];
};

/** @param {number[]} array */
const heapify = (array) => {
    for (let i = parent(array.length - 1); i >= 0; i--) {
        array = shiftDown(array, i);
    }
    return array;
};

const shiftDown = (array, currentIdx) => {
    let endIdx = array.length - 1;
    let leftIdx = leftChild(currentIdx);
    while (leftIdx <= endIdx) {
        const rightIdx = rightChild(currentIdx);
        let idxToShift;
        if (rightIdx <= endIdx && array[rightIdx] < array[leftIdx]) {
            idxToShift = rightIdx;
        } else {
            idxToShift = leftIdx;
        }

        if (array[currentIdx] > array[idxToShift]) {
            array = swap(array, currentIdx, idxToShift);
            currentIdx = idxToShift;
            leftIdx = leftChild(currentIdx);
        } else break;
    }

    return array;
};

const swap = (array, idx, jdx) => {
    const temp = array[idx];
    array[idx] = array[jdx];
    array[jdx] = temp;
    return array;
};

/** @param {number} index  */
const parent = (index) => {
    return Math.floor((index - 1) / 2);
};

/** @param {number} index  */
const leftChild = (index) => {
    return Math.floor(index * 2 + 1);
};

/** @param {number} index  */
const rightChild = (index) => {
    return Math.floor(index * 2 + 2);
};

module.exports = { heapSort };
