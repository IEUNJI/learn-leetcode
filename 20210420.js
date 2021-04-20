// 23. 合并K个升序链表

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  function mergeTwoLists(l1, l2) {
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
  }

  return lists.reduce((l1, l2) => {
    return mergeTwoLists(l1, l2);
  }, null);
};

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

var list;
lists = [[1, 4, 5], [1, 3, 4], [2, 6]];
// lists = [];
lists = [[]];

lists = lists.map(createListNodeFromArray);

console.log(mergeKLists(lists));
