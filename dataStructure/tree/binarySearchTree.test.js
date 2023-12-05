const { BinarySearchTree } = require("./binarySearchTree");

describe("Binary Search Tree", () => {
    test("Init", () => {
        const bst = new BinarySearchTree();
        expect(bst.getSize()).toBe(0);
    });
    test("Insert", () => {
        const bst = new BinarySearchTree();
        bst.insert(10);
        bst.insert(12);
        bst.insert(52);
        bst.insert(22);
        bst.insert(2);

        expect(bst.getSize()).toBe(5);
    });
    test("Search", () => {
        const bst = new BinarySearchTree();
        bst.insert(10);
        bst.insert(12);
        bst.insert(52);
        bst.insert(22);
        bst.insert(2);

        expect(bst.search(22)).toBe(true);
        expect(bst.search(222)).toBe(false);
    });
    test("Traversal", () => {
        const bst = new BinarySearchTree();
        bst.insert(10);
        bst.insert(12);
        bst.insert(52);
        bst.insert(22);
        bst.insert(2);

        expect(bst.preOrder()).toEqual([10, 2, 12, 52, 22]);
        expect(bst.inOrder()).toEqual([2, 10, 12, 22, 52]);
        expect(bst.postOrder()).toEqual([2, 12, 22, 52, 10]);

        expect(bst.levelOrder()).toEqual([10, 2, 12, 52, 22]);
    });
    test("Min and max", () => {
        const bst = new BinarySearchTree();
        bst.insert(10);
        bst.insert(12);
        bst.insert(52);
        bst.insert(22);
        bst.insert(42);
        bst.insert(2);

        expect(bst.min()).toBe(2);
        expect(bst.max()).toBe(52);
    });
});
