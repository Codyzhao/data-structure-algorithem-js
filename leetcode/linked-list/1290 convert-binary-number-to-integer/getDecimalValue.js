/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  if (head.next === null) return head.val;
  // flip a linked list
  let o = null;

  while (head) {
    let n = head.next;
    head.next = o;
    o = head;
    head = n;
  }

  // get the result
  let i = 0;
  let res = 0;
  while (head) {
    res += head.val * Math.pow(2, i);
    head = head.next;
    i++;
  }

  return res;
};

var getDecimalValue1 = function (head) {
  let result = 0;
  while (head) {
    result = result * 2 + head.val;
    head = head.next;
  }
  return result;
};
