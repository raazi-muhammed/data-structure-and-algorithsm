class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class SinglyLinkedList {
	head = null;
	tail = null;
	size = null;

	constructor(values = []) {
		if (values.length > 0) {
			values.map((val) => {
				this.push(val);
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
		if (this.tail !== null) this.tail.next = node;
		this.tail = node;

		this.size++;
	}

	pop() {
		if (this.size <= 0) return;
		else {
			let current = this.head;
			while (current) {
				if (current.next === this.tail) current.next = null;
				current = current.next;
			}
		}

		this.size--;
	}

	unshift(val) {
		const node = new Node(val);
		node.next = this.head;
		this.head = node;

		this.size++;
	}

	shift() {
		if (this.size <= 0) return;
		else this.head = this.head.next;

		this.size--;
	}

	delete(value) {
		if (this.head.value === value) this.shift();
		else if (this.tail.value === value) this.pop();
		else {
			let previous = this.head;
			let current = this.head.next;
			while (current) {
				if (current.value === value) {
					previous.next = current.next;
					this.size--;
					return;
				}
				previous = current;
				current = current.next;
			}
		}
		return;
	}

	insertAt(value, index) {
		console.log(index);
		if (index > this.size || index < 0) return;
		else if (index === 0) this.unshift(value);
		else if (index === this.size) this.push(value);
		else {
			const node = new Node(value);

			let current = this.head;
			for (let i = 0; i < index - 1; i++) current = current.next;
			node.next = current.next;
			current.next = node;
			this.size++;
		}
	}

	insertAfter(value, target) {
		const node = new Node(value);

		if (target === this.tail.value) {
			this.tail.next = node;
			this.tail = node;

			this.size++;
		} else {
			let current = this.head;
			while (current) {
				if (current.value === target) {
					node.next = current.next;
					current.next = node;

					this.size++;
					break;
				}
				current = current.next;
			}
		}
	}

	insertBefore(value, target) {
		const node = new Node(value);
		if (target === this.head.value) {
			node.next = this.head;
			this.head = node;

			this.size++;
		} else {
			let current = this.head.next;
			let previous = this.head;
			while (current) {
				if (current.value === target) {
					node.next = previous.next;
					previous.next = node;

					this.size++;
				}
				previous = current;
				current = current.next;
			}
		}
	}

	display() {
		if (this.size <= 0) console.log("List is empty");
		else {
			let current = this.head;
			while (current) {
				console.log(current.value);
				current = current.next;
			}
		}
	}
	displayReverse() {
		if (this.size <= 0) console.log("List is empty");
		else {
			let current = this.head;
			while (current) {
				console.log(current.value);
				current = current.next;
			}
		}
	}

	getArray() {
		if (this.size <= 0) return ["List empty"];
		else {
			let values = [];
			let current = this.head;
			while (current) {
				values.push(current.value);
				current = current.next;
			}
			return values;
		}
	}
}

module.exports = { SinglyLinkedList };
