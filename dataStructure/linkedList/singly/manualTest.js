const { SinglyLinkedList } = require("./SinglyLinkedListWithTail");

const sll = new SinglyLinkedList([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(sll);
sll.delete(1);
sll.delete(5);
console.log(sll);
sll.delete(8);
expect(sll.getArray()).toEqual([2, 3, 4, 6, 7]);
expect(sll.getSize()).toBe(5);

sll.delete(10);
sll.delete(32);
expect(sll.getArray()).toEqual([2, 3, 4, 6, 7]);
expect(sll.getSize()).toBe(5);
