class Node {
    /** @type {number} */
    value;

    /** @param {Map} */
    children;

    /** @param {number} value  */
    constructor(value) {
        this.value = value;
        this.children = new Map();
    }

    /** @param {Node} value  */
    addChild(value) {
        this.children.set(value, value);
    }

    /** @param {Node} value  */
    removeChild(value) {
        this.children.delete(value);
    }
}

class Tree {
    /** @type {Node} */
    root;

    constructor(rootVal) {
        const node = new Node(rootVal);
        this.root = node;
    }

    addChild(parent) {}
}
