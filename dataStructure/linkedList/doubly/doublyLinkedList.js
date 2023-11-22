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

	getSize() {
		return this.size;
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

	removeDuplicates() {
		let current = this.head;
		let next = current.next;
		while (current) {
			if (current.value === next?.value) {
				while (current.value === next?.value) {
					this.size--;
					next = next.next;
				}
				if (null) next.prev = current;
				else this.tail = next;

				current.next = next;
			}
			current = current.next;
		}
	}

	mergeLinkedList(list) {
		this.tail.next = list.head;

		let current = list.head;
		current.prev = this.tail;

		while (current) {
			this.size++;
			current = current.next;
		}
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
