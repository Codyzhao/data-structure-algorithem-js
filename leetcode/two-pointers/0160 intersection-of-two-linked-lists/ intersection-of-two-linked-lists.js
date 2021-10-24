var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }

  let a = headA;
  let b = headB;

  while (a !== b) {
    if (a === null) {
      a = headB;
    } else {
      a = a.next;
    }

    if (b === null) {
      b = headA;
    } else {
      b = b.next;
    }

    if (a === null && b === null) {
      return null;
    }
  }

  return a;
};

var getIntersectionNode2 = function (headA, headB) {
  var getListLen = function (head) {
    let len = 0,
      cur = head;
    while (cur) {
      len++;
      cur = cur.next;
    }
    return len;
  };

  let curA = headA,
    curB = headB,
    lenA = getListLen(headA),
    lenB = getListLen(headB);
  if (lenA < lenB) {
    [curA, curB] = [curB, curA];
    [lenA, lenB] = [lenB, lenA];
  }
  let i = lenA - lenB;
  while (i-- > 0) {
    curA = curA.next;
  }
  while (curA && curA !== curB) {
    curA = curA.next;
    curB = curB.next;
  }
  return curA;
};
