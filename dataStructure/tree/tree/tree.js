class Node {
    /** @type {number} */
    value;

    /** @type {Array} */
    children;

    /** @param {number} value  */
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

class Tree {
    /** @type {Node} */
    root;

    /** @type {number} */
    size;

    constructor() {
        this.root = null;
        this.size = 0;
    }

    insert(value) {
        const node = new Node(value);
        if (this.root === null) this.root = node;
        else {
            let isInserted = false;
            /** @type {Array} */
            let children = this.root.children;

            for (let i = 0; i < 3; i++) {
                while (!isInserted) {
                    if (children.length < 3) {
                        children.push(node);
                        isInserted = true;
                    } else {
                        children = children[i].children;
                    }
                }
                if (isInserted) break;
            }
        }
        this.size++;
    }

    hasValue(target) {
        let current = this.root;
        while (current) {
            if (current.value === target) return true;
            for (let i = 0; i < current.children.length; i++) {
                if (current.children[i].value === target) return true;
            }
            current = current.children[0];
        }
        return false;
    }

    getValues() {
        let current = this.root;
        let array = new Set();

        while (current) {
            array.add(current.value);
            for (let i = 0; i < current.children.length; i++) {
                array.add(current.children[i].value);
            }

            current = current.children[0];
        }
        return [...array];
    }

    getSize() {
        return this.size;
    }
}

module.exports = { Tree };
