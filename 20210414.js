// 21. 合并两个有序链表

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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  var c1 = l1;
  var c2 = l2;

  if (!c1 && !c2) return null;
  if (!c1) return c2;
  if (!c2) return c1;

  var head = null;
  if (c1.val < c2.val) {
    head = c1;
    c1 = c1.next;
  } else {
    head = c2;
    c2 = c2.next;
  }
  var cur = head;

  while (c1 || c2) {
    if (c1 && c2) {
      if (c1.val < c2.val) {
        cur.next = c1;
        c1 = c1.next;
        cur = cur.next;
      } else {
        cur.next = c2;
        c2 = c2.next;
        cur = cur.next;
      }
    } else if (c1) {
      cur.next = c1;
      c1 = c1.next;
      cur = cur.next;
    } else if (c2) {
      cur.next = c2;
      c2 = c2.next;
      cur = cur.next;
    }
  }

  return head;
};

var l1, l2;

l1 = [1, 2, 4], l2 = [3, 4, 6, 7]; // [1, 2, 3, 4, 4, 6, 7]
l1 = [1, 2, 4], l2 = [1, 3, 4];
l1 = [], l2 = [];

l1 = createListNodeFromArray(l1);
l2 = createListNodeFromArray(l2);

console.log(mergeTwoLists(l1, l2));
