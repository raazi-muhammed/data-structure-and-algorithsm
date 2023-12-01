const bubbleSort = (arr) => {
    do {
        isItemsSwapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                isItemsSwapped = true;
            }
        }
    } while (isItemsSwapped);

    return arr;
};

module.exports = { bubbleSort };
