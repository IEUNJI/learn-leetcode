/**
 * 反转单向链表
 */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(element) {
    const node = new Node(element);
    if (!this.head) {
      this.head = node;
    } else {
      let index = 0;
      let current = this.head;
      while (++index < this.length) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
    return this;
  }

  insert(position, element) {
    const node = new Node(element);
    if (!this.head) {
      this.head = node;
    } else {
      let index = 0;
      let previous = null;
      let current = this.head;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = node;
      node.next = current;
    }
    this.length++;
    return this;
  }

  reverse(p = this.head) {
    if (p.next) {
      this.reverse(p.next);
      // 此时p是链表倒数第二个节点，开始回溯
      p.next.next = p;
      p.next = null;
    } else { // p是链表最后一个节点
      this.head = p;
    }
  }
}

const linkList = new LinkList();

for (let i = 1; i <= 4; i++) {
  linkList.append(i);
}

linkList.reverse();

console.log(linkList);
