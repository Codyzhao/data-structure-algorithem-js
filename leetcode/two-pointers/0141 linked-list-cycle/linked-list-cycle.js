// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

const hasCycle = (head) => {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) return true;
  }

  return false;
};

module.exports = hasCycle;
