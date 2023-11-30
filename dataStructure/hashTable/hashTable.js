// @ts-check

class HashTable {
    table;
    /** @type {number} */
    size;

    /** @param {number} size  */
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    /**
     * @param {string} key
     * @returns {number}
     */
    hash(key) {
        /** @type {number} */
        let hashedKey = 0;

        for (let i = 0; i < key.length; i++) {
            hashedKey += key.charCodeAt(i);
        }

        const index = hashedKey % this.size;
        return index;
    }

    /**
     * @param {string | number} value
     * @param {string} key
     */
    set(key, value) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [{ key, value }];
        } else {
            const sameItem = bucket.find((item) => item.key === key);
            if (sameItem) sameItem.value = value;
            else bucket.push({ key, value });
        }
    }
    /** @param {string} key */
    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (!bucket) return undefined;

        const itemFound = bucket.find((item) => item.key === key);
        return itemFound ? itemFound : undefined;
    }

    /** @param {string} key */
    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (!bucket) return;

        let toRemove = bucket.find((item) => item.key === key);
        if (toRemove) bucket.splice(bucket.indexOf(toRemove), 1);
    }

    getTable() {
        let table = this.table.filter((val) => val !== undefined);
        return table;
    }

    display() {
        console.log(this.table);
    }
}

module.exports = HashTable;
