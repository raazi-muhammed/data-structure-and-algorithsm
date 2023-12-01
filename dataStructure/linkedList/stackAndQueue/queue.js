class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    rare = null;
    front = null;
    size = 0;

    /** @param {number[]} [values] */
    constructor(values = []) {
        if (values.length <= 0) {
            this.rare = null;
            this.front = null;
            this.size = 0;
        } else {
            values.map((val) => {
                this.enqueue(val);
            });
        }
    }

    /** @param {number} value */
    enqueue(value) {
        const node = new Node(value);
        if (this.rare === null) {
            this.rare = this.front = node;
        } else {
            this.front.next = node;
            this.front = node;
        }
        this.size++;
    }

    dequeue() {
        if (this.rare === null) return;
        this.rare = this.rare.next;
        this.size--;
    }

    peek() {
        if (this.rare === null) return null;
        return this.rare.value;
    }

    getValues() {
        let current = this.rare;
        let array = [];
        while (current) {
            array.push(current.value);
            current = current.next;
        }
        return array;
    }
}

module.exports = { Queue };
