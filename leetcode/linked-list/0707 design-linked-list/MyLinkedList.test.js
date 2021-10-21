const MyLinkedList = require('./MyLinkedList');

test.skip('MyLinkedList', () => {
  const myLinkedList = new MyLinkedList();
  myLinkedList.addAtHead(1);
  myLinkedList.addAtTail(3);
  myLinkedList.print();
  myLinkedList.addAtIndex(1, 2); // linked list becomes 1->2->3
  myLinkedList.print();
  expect(myLinkedList.get(1)).toBe(2); // return 2
  myLinkedList.deleteAtIndex(1); // now the linked list is 1->3
  expect(myLinkedList.get(1)).toBe(3); // return 3
});

test.skip('MyLinkedList 2', () => {
  const myLinkedList = new MyLinkedList();
  myLinkedList.addAtHead(0);
  myLinkedList.addAtIndex(1, 4);
  // console.log('size: ', myLinkedList.getSize());
  myLinkedList.addAtTail(8);
  myLinkedList.addAtHead(5);
  myLinkedList.addAtIndex(4, 3);
  // myLinkedList.print();
  myLinkedList.addAtTail(0);
  myLinkedList.addAtTail(5);
  myLinkedList.addAtIndex(6, 3);
  myLinkedList.deleteAtIndex(7);
  myLinkedList.deleteAtIndex(5);
  myLinkedList.addAtTail(4);
});

test('MyLinkedList 3', () => {
  const myLinkedList = new MyLinkedList();
  myLinkedList.addAtTail(1);
  myLinkedList.addAtTail(3);
  myLinkedList.getSize();
  myLinkedList.addAtIndex(1, 2);
  myLinkedList.deleteAtIndex(1);
  myLinkedList.get(2);
});
