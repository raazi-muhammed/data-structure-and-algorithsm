const { maxHeap } = require("./maxHeap");

describe("Max Heap Test", () => {
    test("Heap Constructor", () => {
        const mHeap = new maxHeap([6, 2, 8]);

        expect(mHeap.getValues()).toEqual([8, 2, 6]);

        const mHeap2 = new maxHeap([16, 23, 3, 2, 22, 8]);
        expect(mHeap2.getValues()).toEqual([23, 22, 8, 2, 16, 3]);
    });
    test("Insert elements", () => {
        const mHeap = new maxHeap();
        mHeap.insert(4);
        mHeap.insert(9);
        mHeap.insert(22);
        mHeap.insert(5);

        expect(mHeap.getValues()).toEqual([22, 5, 9, 4]);
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
