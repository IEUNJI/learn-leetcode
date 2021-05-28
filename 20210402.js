/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function createListNodeFromArray(arr) {
  var head;
  var current;

  for (var i = 0; i < arr.length; i++) {
    if (head) {
      var ln = new ListNode(arr[i]);
      current.next = ln;
      current = ln;

    } else {
      head = new ListNode(arr[i]);
      current = head;
    }
  }

  return head;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd1 = function (head, n) {
  // 栈结构
  var arr = [];
  var current = head;

  while (current) {
    arr.push(current);
    current = current.next;
  }

  var idx = arr.length - n;

  if (idx === 0) {
    return arr[1] || null;
  }

  arr[idx - 1].next = arr[idx + 1] || null;

  return head;
};

var removeNthFromEnd2 = function (head, n) {
  // 快慢指针
  var fast = head;
  var slow = head;

  for (var i = 0; i < n + 1; i++) {
    if (!fast) {
      return slow.next;
    }
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return head;
};

var removeNthFromEnd = function (head, n) {
  var index = 0;
  var cur = null;
  var prev = null;

  function next(p) {
    if (!p) return;

    next(p.next);

    index++;

    if (index === n) {
      cur = p;
    }

    if (index === n + 1) {
      prev = p;
    }
  }

  next(head);

  if (prev == null) {
    head = cur.next;
  } else {
    prev.next = cur.next;
  }

  return head;
};

var head, n;
head = [1, 2, 3, 4, 5], n = 2;
head = [1], n = 1;
head = [1,2], n = 2;
head = [1,2], n = 1;

head = createListNodeFromArray(head);

console.log(removeNthFromEnd(head, n));
