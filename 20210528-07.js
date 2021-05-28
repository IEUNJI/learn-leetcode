/**
 * 206. 反转链表
 */

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
  var res = {};

  function reverse(p) {
    if (p && p.next) {
      reverse(p.next);
      p.next.next = p;
      p.next = null;
    } else {
      res.head = p;
    }
  }

  reverse(head);

  return res.head;
};

console.log(reverseList({
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}));

