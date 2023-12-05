class minHeap {
    /** @type {number[]} */
    heap;

    /** @param {number[]} [values]  */
    constructor(values = []) {
        if (values.length <= 0) {
            this.heap = [];
        } else {
            this.heap = values;
            this.heapify();
        }
    }

    heapify() {
        for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
            this.shiftDown(i);
        }
    }

    /** @param {number} currentIdx  */
    shiftDown(currentIdx) {
        let endIdx = this.heap.length - 1;
        let leftIdx = this.leftChild(currentIdx);
        while (leftIdx <= endIdx) {
            const rightIdx = this.rightChild(currentIdx);
            let idxToShift;
            if (
                rightIdx <= endIdx &&
                this.heap[rightIdx] < this.heap[leftIdx]
            ) {
                idxToShift = rightIdx;
            } else {
                idxToShift = leftIdx;
            }

            if (this.heap[currentIdx] > this.heap[idxToShift]) {
                this.swap(currentIdx, idxToShift);
                currentIdx = idxToShift;
                leftIdx = this.leftChild(currentIdx);
            } else break;
        }
    }

    /** @param {number} currentIdx  */
    shiftUp(currentIdx) {
        let parentIdx = this.parent(currentIdx);
        while (currentIdx > 0 && this.heap[parentIdx] > this.heap[currentIdx]) {
            this.swap(parentIdx, currentIdx);
            currentIdx = parentIdx;
            parentIdx = this.parent(currentIdx);
        }
    }

    remove() {
        this.swap(0, this.heap.length - 1);
        this.heap.pop();
        this.shiftDown(0);
    }

    /** @param {number} value  */
    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }

    swap(idx, jdx) {
        let temp = this.heap[idx];
        this.heap[idx] = this.heap[jdx];
        this.heap[jdx] = temp;
    }

    /** @param {number} index  */
    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    /** @param {number} index  */
    leftChild(index) {
        return Math.floor(index * 2 + 1);
    }

    /** @param {number} index  */
    rightChild(index) {
        return Math.floor(index * 2 + 2);
    }

    getValues() {
        return this.heap;
    }

    peak() {
        return this.heap[0] || null;
    }

    drawHeap() {
        let count = 0;
        let values = [];

        for (let i = 0; i < this.heap.length; i++) {
            values.push(this.heap[i]);
            if (i === (Math.pow(2, count) - 1) * 2) {
                count++;

                console.log(values.reduce((a, e) => (a += `${e} `), " "));
                values = [];
            }
        }
    }
}

const mHeap = new minHeap([2, 4, 5, 6, 9, 22, 8]);
mHeap.drawHeap();

module.exports = { minHeap };
