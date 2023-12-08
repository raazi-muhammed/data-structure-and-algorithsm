class Node {
    value;

    /** @type {Map} */
    children;

    /** @type {boolean} */
    isEnd;

    constructor(value) {
        this.value = value;
        this.children = new Map();
        this.isEnd = false;
    }
}

class Trie {
    root;

    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            if (current.children.has(word.charAt(i))) {
                current = current.children.get(word.charAt(i));
            } else {
                const node = new Node(word.charAt(i));
                current.children.set(node.value, node);
                current = current.children.get(node.value);
            }

            if (i === word.length - 1) current.isEnd = true;
        }
    }

    contains(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!curr.children.has(word.charAt(i))) return false;
            if (i === word.length - 1) {
                if (!curr.children.get(word.charAt(i)).isEnd) return false;
            }
            curr = curr.children.get(word.charAt(i));
        }

        return true;
    }
    hasPrefix(word) {
        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            if (!current.children.has(word.charAt(i))) return false;
            current = current.children.get(word.charAt(i));
        }
        return true;
    }
    hasExactWord(word) {
        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            if (!current.children.has(word.charAt(i))) return false;
            current = current.children.get(word.charAt(i));
        }
        if (!current.isEnd) return false;
        else return true;
    }

    /* show() {
        return this.showHelper(this.root, []);
    }

    showHelper(root, values) {
        if (!root.children) return;

        root.children.forEach((value, key) => {
            values.push(key);
            if (!value.isEnd) {
                this.showHelper(value, values);
            }
        });

        return values;
    } */
    show() {
        return this.showHelper(this.root, "", []);
    }

    showHelper(node, currentWord, words) {
        // If the current node is the end of a word, add the current word to the array
        if (node.isEnd || !node.children) {
            words.push(currentWord);
        }
        // Recursively call showHelper on all children

        node.children.forEach((key, child) => {
            this.showHelper(child, currentWord + key, words);
        });

        return words;
    }

    withPrefix(word) {
        /** @type {Node} */
        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            if (!current.children.has(word.charAt(i))) return false;
            current = current.children.get(word.charAt(i));
        }

        let output = [];
        current.children.forEach((val, key) => output.push(key));
        return output;
    }
}

module.exports = { Trie };
