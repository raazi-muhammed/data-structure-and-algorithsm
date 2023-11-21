class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	isEmpty() {
		return this.size === 0;
	}

	getSize() {
		return this.size;
	}

	prepend(value) {
		const node = new Node(value);

		if (this.isEmpty()) this.head = node;
		else {
			node.next = this.head;
			this.head = node;
		}

		this.size++;
	} // O(1)

	append(value) {
		const node = new Node(value);

		if (this.isEmpty()) this.head = node;
		else {
			let prev = this.head;
			while (prev.next) {
				prev = prev.next;
			}
			prev.next = node;
		}

		this.size++;
	} // O(n)

	insert(value, index) {
		if (index < 0 || index > this.size) return;

		if (index === 0) {
			this.prepend(value);
		} else if (index === this.size) {
			this.append(value);
		} else {
			let pointer = this.head;
			let node = new Node(value);
			for (let i = 0; i < index; i++) {
				if (i === index - 1) {
					node.next = pointer.next;
					pointer.next = node;
				}
				pointer = pointer.next;
			}
			this.size++;
		}
	}

	getAllItems() {
		if (this.isEmpty()) return [];

		let allItemsArry = [];
		let curr = this.head;
		while (curr) {
			allItemsArry.push(curr.value);
			curr = curr.next;
		}
		return allItemsArry;
	}
}

module.exports = { LinkedList };
