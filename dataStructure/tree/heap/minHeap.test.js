const { minHeap } = require("./minHeap");

describe("Min Heap Test", () => {
    test("Init and Insert", () => {
        const mHeap = new minHeap([6, 2, 8]);

        expect(mHeap.getValues()).toEqual([2, 6, 8]);

        mHeap.insert(4);
        mHeap.insert(9);
        mHeap.insert(22);
        mHeap.insert(5);

        expect(mHeap.getValues()).toEqual([2, 4, 5, 6, 9, 22, 8]);
        mHeap.drawHeap();
    });
    test("Remove an elements", () => {
        const mHeap = new minHeap([2, 4, 5, 6, 9, 22, 8]);

        mHeap.remove();
        expect(mHeap.getValues()).toEqual([4, 6, 5, 8, 9, 22]);
        mHeap.drawHeap();

        mHeap.remove();
        expect(mHeap.getValues()).toEqual([5, 6, 22, 8, 9]);
        mHeap.drawHeap();
    });
    test("Peek the heap", () => {
        const mHeap = new minHeap([2, 4, 5, 6, 9, 22, 8]);

        expect(mHeap.peak()).toEqual(2);

        const mHeap2 = new minHeap();
        expect(mHeap2.peak()).toEqual(null);
    });
});
