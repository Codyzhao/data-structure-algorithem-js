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
var reverseList = function (head) {
  if (head === null || head.next === null) return head;
  let prev = null;

  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};

var reverseList2 = function (head) {
  if (head === null || head.next === null) return head;

  return reverse(null, head);

  function reverse(pre, cur) {
    if (cur === null) return pre;
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    return reverse(cur, next);
  }
};
