class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	head = null;
	tail = null;
	size = 0;

	constructor(values = []) {
		if (values.length > 0) {
			values.map((val, i) => {
				const node = new Node(val);
				if (this.head === null) this.head = node;
				else {
					this.tail.next = node;
					node.prev = this.tail;
				}
				if (values.length > i) this.tail = node;
				this.size++;
			});
		} else {
			this.head = null;
			this.tail = null;
			this.size = 0;
		}
	}

	push(value) {
		const node = new Node(value);
		if (this.head === null) this.head = node;
		if (this.tail !== null) {
			node.prev = this.tail;
			this.tail.next = node;
		}
		this.tail = node;
		this.size++;
	}

	getArry() {
		let current = this.head;
		const arry = [];
		while (current) {
			arry.push(current.value);
			current = current.next;
		}
		return arry;
	}

	getArryReverse() {
		let current = this.tail;
		const arry = [];
		while (current) {
			arry.push(current.value);
			current = current.prev;
		}
		return arry;
	}
}

module.exports = { DoublyLinkedList };
