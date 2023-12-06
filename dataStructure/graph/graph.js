class Graph {
    map;
    constructor() {
        this.map = new Map();
    }

    addVertex(vertex) {
        this.map.set(vertex, new Set());
    }

    /**
     *
     * @param {number} vertex
     * @param {number} edge
     * @param {boolean} isBidirectional
     */
    insert(vertex, edge, isBidirectional = false) {
        if (!this.map.has(vertex)) {
            this.addVertex(vertex);
        }
        if (!this.map.has(edge)) {
            this.addVertex(edge);
        }

        this.map.get(vertex).add(edge);

        if (isBidirectional) {
            this.map.get(edge).add(vertex);
        }
    }

    /**
     *
     * @param {number} vertex
     * @param {number} edge
     * @returns
     */
    hasEdge(vertex, edge) {
        if (!this.map.has(vertex)) return false;
        return this.map.get(vertex).has(edge);
    }

    /**
     *
     * @param {number} vertex
     * @param {number} edge
     * @param {boolean} isBidirectional
     */
    removeEdge(vertex, edge, isBidirectional = false) {
        if (!this.map.has(vertex) || !this.map.has(edge)) return;

        this.map.get(vertex).delete(edge);
        if (isBidirectional) this.map.get(edge).delete(vertex);
    }

    /**
     *
     * @param {number} vertex
     */
    removeVertex(vertex) {
        if (!this.map.has(vertex)) return;
        this.map.forEach((val, key) => {
            val.delete(vertex);
        });
        this.map.delete(vertex);
    }

    traverseBFS() {
        /** @type {number[]} */
        let queue = [];

        /** @type {Set<number>} */
        let array = new Set();

        this.map.forEach((val, key) => {
            queue.push(key);

            while (queue.length) {
                let current = queue[0];
                array.add(current);

                this.map.get(current).forEach((val, key) => {
                    if (!array.has(key)) queue.push(val);
                });
                queue.shift();
            }
        });

        return [...array];
    }

    traverseDFS() {
        /** @type {number[]} */
        let stack = [];

        /** @type {Set<number>} */
        let array = new Set();

        this.map.forEach((val, key) => {
            stack.push(key);

            while (stack.length) {
                let current = stack[stack.length - 1];
                array.add(current);

                let isItemFound = false;
                this.map.get(current).forEach((val, key) => {
                    if (!array.has(key) && !isItemFound) {
                        stack.push(val);
                        isItemFound = true;
                    }
                });

                stack.pop();
            }
        });

        return [...array];
    }

    getValues() {
        let returnObj = {};
        this.map.forEach((value, key) => {
            returnObj[key] = [...value];
        });

        return returnObj;
    }

    display() {
        this.map.forEach((key, value) => {
            console.log(value, "\t:", key);
        });
    }
}

module.exports = { Graph };
