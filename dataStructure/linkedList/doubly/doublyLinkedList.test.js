const { DoublyLinkedList } = require("./doublyLinkedList");

describe("Doubly Linked list", () => {
	test("Array to dll converter", () => {
		const dl = new DoublyLinkedList([10, 20, 30]);
		expect(dl.getArry()).toEqual([10, 20, 30]);
		expect(dl.getArryReverse()).toEqual([30, 20, 10]);
	});
	test("Inserting Values", () => {
		const dl = new DoublyLinkedList();
		dl.push(10);
		dl.push(20);
		dl.push(30);
		expect(dl.getArry()).toEqual([10, 20, 30]);
	});
});
