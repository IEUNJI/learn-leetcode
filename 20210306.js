// 两数相加

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

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var l3;
  var cur; // 链表指针
  var carry = 0; // 进位

  do {
    l1 = l1 || new ListNode(0);
    l2 = l2 || new ListNode(0);

    var val = l1.val + l2.val + carry;

    if (val >= 10) {
      val = val - 10;
      carry = 1;
    } else {
      carry = 0;
    }

    if (!l3) {
      l3 = new ListNode(val);
      cur = l3;
    } else {
      cur.next = new ListNode(val);
      cur = cur.next;
    }

    l1 = l1.next;
    l2 = l2.next;
  } while (l1 || l2);

  if (carry) {
    cur.next = new ListNode(carry);
    cur = cur.next;
    carry = 0;
  }

  return l3;
};

function createListNode(arr) {
  var listNode;
  var cur;

  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (!listNode) {
      listNode = new ListNode(item);
      cur = listNode;
    } else {
      cur.next = new ListNode(item);
      cur = cur.next;
    }
  }

  return listNode;
}

// var l1 = [2, 4, 3], l2 = [5, 6, 4];
// var l1 = [0], l2 = [0];
var l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9];
// var l1 = [2, 4, 3], l2 = [5, 6, 4];

l1 = createListNode(l1);
l2 = createListNode(l2);

console.log(l1);
console.log(l2);

console.log(JSON.stringify(addTwoNumbers(l1, l2)));
