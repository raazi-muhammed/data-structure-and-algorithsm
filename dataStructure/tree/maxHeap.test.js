const { maxHeap } = require("./maxHeap");

describe("Max Heap Test", () => {
    test("Init and Insert", () => {
        const mHeap = new maxHeap([6, 2, 8]);

        expect(mHeap.getValues()).toEqual([8, 2, 6]);

        mHeap.insert(4);
        mHeap.insert(9);
        mHeap.insert(22);
        mHeap.insert(5);

        mHeap.drawHeap();
        expect(mHeap.getValues()).toEqual([22, 8, 9, 2, 4, 6, 5]);
    });
    test("Remove an elements", () => {
        const mHeap = new maxHeap([22, 8, 9, 2, 4, 6, 5]);

        mHeap.remove();
        mHeap.drawHeap();
        expect(mHeap.getValues()).toEqual([9, 8, 6, 2, 4, 5]);

        mHeap.remove();
        mHeap.drawHeap();
        expect(mHeap.getValues()).toEqual([8, 5, 6, 2, 4]);
    });
    test("Peek the heap", () => {
        const mHeap = new maxHeap([2, 4, 5, 6, 9, 22, 8]);

        expect(mHeap.peak()).toEqual(22);

        const mHeap2 = new maxHeap();
        expect(mHeap2.peak()).toEqual(null);
    });
});
