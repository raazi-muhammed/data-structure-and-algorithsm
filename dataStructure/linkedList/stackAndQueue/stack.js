//@ts-check

class Node {
    /** @type {number} */
    value;
    /** @type {Node | null} */
    down;

    /** @param {number} value */
    constructor(value) {
        this.value = value;
        this.down = null;
    }
}

class Stack {
    /** @type {Node | null} */
    top = null;
    size = 0;
    /** @type {number | null} */
    limit = null;

    /** @param {number[]} [values] */
    constructor(values = []) {
        if (values.length <= 0) {
            this.top = null;
            this.size = 0;
        } else {
            values.map((val) => {
                this.push(val);
            });
        }
    }

    /** @param {number} value */
    push(value) {
        if (this.limit != null && this.size >= this.limit) return;

        const node = new Node(value);

        if (this.size > 0) node.down = this.top;
        this.top = node;

        this.size++;
    }

    pop() {
        if (this.top == null) return;
        this.top = this.top.down;
        this.size--;
    }

    /** @param {number} val */
    setLimit(val) {
        this.limit = val;
    }

    /** @returns {number[]} */
    getValues() {
        let array = [];
        let current = this.top;
        while (current) {
            array.push(current.value);
            current = current.down;
        }

        return array;
    }
}

module.exports = { Stack };
