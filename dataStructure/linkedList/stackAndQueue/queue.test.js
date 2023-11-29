const { Queue } = require("./queue");

describe("Queue Test", () => {
    test("Enqueue and dequeue", () => {
        const qu = new Queue();

        qu.enqueue(1);
        qu.enqueue(2);
        qu.enqueue(3);
        expect(qu.getValues()).toEqual([1, 2, 3]);

        qu.dequeue();
        expect(qu.getValues()).toEqual([2, 3]);

        qu.dequeue();
        qu.dequeue();
        qu.dequeue();
        qu.dequeue();
        expect(qu.getValues()).toEqual([]);
    });
    test("Array constructor for stack", () => {
        const qu = new Queue([1, 2, 3, 4]);
        expect(qu.getValues()).toEqual([1, 2, 3, 4]);
        qu.enqueue(5);
        qu.enqueue(6);
        expect(qu.getValues()).toEqual([1, 2, 3, 4, 5, 6]);
    });
    test("Peek in dequeue", () => {
        const qu = new Queue();
        expect(qu.peek()).toBeNull();
        qu.enqueue(1);
        qu.enqueue(2);
        expect(qu.peek()).toBe(1);
        qu.dequeue();
        expect(qu.peek()).toBe(2);
    });
});
