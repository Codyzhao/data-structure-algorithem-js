/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  if (head === null || head.next === null) return head;
  let slow = head;
  let fast = head;

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let length = 0;
  let cur = head;

  while (cur !== null) {
    length++;
    cur = cur.next;
  }

  if (length % 2 === 0) {
    return slow.next;
  }

  return slow;
};

var middleNode2 = function (head) {
  if (head === null || head.next === null) return head;

  let length = 0;
  let cur = head;
  let p = head;

  while (cur !== null) {
    length++;
    cur = cur.next;
  }

  const mid = Math.floor(length / 2) + 1;

  for (let i = 1; i < mid; i++) {
    p = p.next;
  }

  return p;
};
