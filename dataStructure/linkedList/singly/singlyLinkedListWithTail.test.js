const { SinglyLinkedList } = require("./SinglyLinkedListWithTail");

describe("Singly Linked list", () => {
	test("Creating list", () => {
		const sll = new SinglyLinkedList();
		expect(sll.getSize()).toBe(0);
		expect(sll.getArray()).toEqual(["List empty"]);
	});

	test("Convert array to singly linked list", () => {
		const sll = new SinglyLinkedList([1, 2, 3]);
		expect(sll.getSize()).toBe(3);
		expect(sll.getArray()).toEqual([1, 2, 3]);
	});

	test("Testing push and pop", () => {
		const sll = new SinglyLinkedList();
		sll.push(4);
		sll.push(5);
		expect(sll.getArray()).toEqual([4, 5]);
		sll.pop();
		expect(sll.getArray()).toEqual([4]);
		sll.pop();
		expect(sll.getArray()).toEqual(["List empty"]);
		sll.pop();
	});

	test("Testing shift and unshift", () => {
		const sll = new SinglyLinkedList();
		sll.unshift(4);
		sll.unshift(5);
		expect(sll.getArray()).toEqual([5, 4]);
		sll.shift();
		expect(sll.getArray()).toEqual([4]);
		sll.shift();
		expect(sll.getArray()).toEqual(["List empty"]);
		sll.shift();
	});
	test("Deleting by value", () => {
		const sll = new SinglyLinkedList([1, 2, 3, 4, 5, 6, 7, 8]);
		sll.delete(2);
		sll.delete(1);
		sll.delete(5);
		sll.delete(8);
		expect(sll.getArray()).toEqual([3, 4, 6, 7]);
		expect(sll.getSize()).toBe(4);

		sll.delete(10);
		sll.delete(32);
		expect(sll.getArray()).toEqual([3, 4, 6, 7]);
		expect(sll.getSize()).toBe(4);
	});
	test("Inserting values", () => {
		const sll = new SinglyLinkedList([1, 2, 3, 4]);
		sll.insertAt(5, 0);
		sll.insertAt(50, 2);
		expect(sll.getArray()).toEqual([5, 1, 50, 2, 3, 4]);
		expect(sll.getSize()).toBe(6);

		sll.insertAt(50, 200);
		sll.insertAt(50, -2);
		expect(sll.getArray()).toEqual([5, 1, 50, 2, 3, 4]);
		expect(sll.getSize()).toBe(6);

		sll.insertAfter(55, 50);
		sll.insertAfter(45, 4);
		expect(sll.getArray()).toEqual([5, 1, 50, 55, 2, 3, 4, 45]);
		expect(sll.getSize()).toBe(8);

		sll.insertAfter(45, 400);
		expect(sll.getArray()).toEqual([5, 1, 50, 55, 2, 3, 4, 45]);
		expect(sll.getSize()).toBe(8);

		sll.insertBefore(44, 50);
		sll.insertBefore(22, 3);
		expect(sll.getArray()).toEqual([5, 1, 44, 50, 55, 2, 22, 3, 4, 45]);
		expect(sll.getSize()).toBe(10);

		sll.insertBefore(45, 400);
		expect(sll.getArray()).toEqual([5, 1, 44, 50, 55, 2, 22, 3, 4, 45]);
		expect(sll.getSize()).toBe(10);
	});
	test("Printing list", () => {});
});
