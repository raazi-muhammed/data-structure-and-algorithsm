const { DoublyLinkedList } = require("./doublyLinkedList");

describe("Doubly Linked list", () => {
	test("Array to linked list converter", () => {
		const dl = new DoublyLinkedList([10, 20, 30]);
		expect(dl.getArry()).toEqual([10, 20, 30]);
		expect(dl.getSize()).toBe(3);
	});
	test("Reverse an array in doubly linked list", () => {
		const dl = new DoublyLinkedList([10, 20, 30, 40]);
		expect(dl.getArryReverse()).toEqual([40, 30, 20, 10]);
	});
	test("Remove duplicates from an array", () => {
		const dl = new DoublyLinkedList([10, 20, 20, 30, 40]);
		dl.removeDuplicates();
		expect(dl.getArry()).toEqual([10, 20, 30, 40]);

		const dl1 = new DoublyLinkedList([10, 20, 20, 30, 30, 30, 40, 40]);
		dl1.removeDuplicates();
		expect(dl1.getArry()).toEqual([10, 20, 30, 40]);
	});
	test("Merge two Linked List", () => {
		const dl1 = new DoublyLinkedList([10, 20]);
		const dl2 = new DoublyLinkedList([100, 200]);
		dl1.mergeLinkedList(dl2);
		expect(dl1.getArry()).toEqual([10, 20, 100, 200]);
		expect(dl1.getSize()).toBe(4);
	});
	test("Inserting Values", () => {
		const dl = new DoublyLinkedList();
		dl.push(10);
		dl.push(20);
		dl.push(30);
		expect(dl.getArry()).toEqual([10, 20, 30]);
	});
});
