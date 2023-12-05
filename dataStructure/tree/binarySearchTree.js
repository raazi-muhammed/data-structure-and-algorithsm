class Node {
    /** @type {number} */
    value;
    /** @type {Node} */
    left;
    /** @type {Node} */
    right;

    /** @param {number} value  */
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    /** @type {Node} */
    root;
    /** @type {number} */
    size;

    constructor() {
        this.root = null;
        this.size = 0;
    }

    /** @param {number} value  */
    insert(value) {
        const node = new Node(value);
        if (this.root === null) this.root = node;
        else this.insertNode(this.root, node);

        this.size++;
    }
    /**
     * @param {Node} root
     * @param {Node} node
     */
    insertNode(root, node) {
        if (node.value < root.value) {
            if (root.left === null) root.left = node;
            else this.insertNode(root.left, node);
        } else {
            if (root.right === null) root.right = node;
            else this.insertNode(root.right, node);
        }
    }

    /** @param {number} value  */
    search(value) {
        return this.searchNode(this.root, value);
    }

    searchNode(root, value) {
        if (root === null) return false;
        if (root.value === value) return true;

        if (value < root.value) return this.searchNode(root.left, value);
        else return this.searchNode(root.right, value);
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (root === null) return root;
        if (value < root.value) this.deleteNode(root.left, value);
        else if (value > root.value) this.deleteNode(root.right, value);
        else {
            if (!root.left && !root.right) return null;
            if (!root.left) return root.right;
            else if (!root.right) return root.left;

            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }

    preOrder(root = this.root, array = []) {
        if (root) {
            array.push(root.value);
            this.preOrder(root.left, array);
            this.preOrder(root.right, array);
        }

        return array;
    }

    inOrder(root = this.root, array = []) {
        if (root) {
            this.inOrder(root.left, array);
            array.push(root.value);
            this.inOrder(root.right, array);
        }
        return array;
    }

    postOrder(root = this.root, array = []) {
        if (root) {
            this.inOrder(root.left, array);
            this.inOrder(root.right, array);
            array.push(root.value);
        }
        return array;
    }

    levelOrder() {
        const queue = [];
        const array = [];
        queue.push(this.root);

        while (queue.length) {
            let curr = queue.shift();
            array.push(curr.value);
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }

        return array;
    }

    min() {
        let current = this.root;
        while (current) {
            if (current.left === null) break;
            current = current.left;
        }
        return current.value;
    }

    max() {
        let current = this.root;
        while (current) {
            if (current.right === null) break;
            current = current.right;
        }
        return current.value;
    }

    getSize() {
        return this.size;
    }
}

module.exports = { BinarySearchTree };
