const { Tree } = require("./tree");

describe("Tree", () => {
    test("Insert", () => {
        const tree = new Tree();

        tree.insert(1);
        tree.insert(6);
        tree.insert(10);

        expect(tree.getValues()).toEqual([1, 6, 10]);
    });
    test("Search", () => {
        const tree = new Tree();

        tree.insert(1);
        tree.insert(6);
        tree.insert(10);

        expect(tree.hasValue(1)).toBe(true);
        expect(tree.hasValue(12)).toBe(false);
        expect(tree.hasValue(10)).toBe(true);
    });
    test("Get size and values from tree", () => {
        const tree = new Tree();

        tree.insert(1);
        tree.insert(6);
        tree.insert(10);

        expect(tree.getSize(1)).toBe(3);
        expect(tree.getValues()).toEqual([1, 6, 10]);

        tree.insert(11);
        tree.insert(13);
        expect(tree.getSize(1)).toBe(5);
        expect(tree.getValues()).toEqual([1, 6, 10, 11, 13]);
    });
});
