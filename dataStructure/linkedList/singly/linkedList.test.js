const { LinkedList } = require("./linkedList");

test("Testing Linked List", () => {
	const list = new LinkedList();

	expect(list.isEmpty()).toBe(true);
	expect(list.getSize()).toBe(0);

	expect(list.getAllItems()).toStrictEqual([]);

	list.prepend(10);
	list.prepend(20);
	list.prepend(30);

	expect(list.getSize()).toBe(3);
	expect(list.getAllItems()).toStrictEqual([30, 20, 10]);

	list.append(40);
	list.append(50);

	expect(list.getAllItems()).toStrictEqual([30, 20, 10, 40, 50]);

	list.insert(15, 2);

	expect(list.getAllItems()).toStrictEqual([30, 20, 15, 10, 40, 50]);
	list.insert(45, 5);
	expect(list.getAllItems()).toStrictEqual([30, 20, 15, 10, 40, 45, 50]);
});
