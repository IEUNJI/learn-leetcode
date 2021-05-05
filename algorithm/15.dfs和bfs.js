/**
 * dfs和bfs
 * 
 * 深度优先 和 广度优先
 */

function Node(key) {
  this.key = key;
  this.children = [];
}

const n1 = new Node('1');
const n2 = new Node('2');
const n3 = new Node('3');
const n4 = new Node('4');
const n5 = new Node('5');
const n6 = new Node('6');

n1.children.push(n2);
n1.children.push(n5);
n2.children.push(n3);
n2.children.push(n4);
n5.children.push(n6);

function dfs(node) {
  const stack = [node]; // 先进后出
  while (stack.length > 0) {
    const last = stack.pop(); // 出栈
    console.log('dfs', last.key);
    // 子节点入栈
    last.children.slice().reverse().forEach(child => {
      stack.push(child);
    });
  }
}
function bfs(node) {
  const queue = [node]; // 先进先出
  while (queue.length > 0) {
    const first = queue.shift(); // 出队列
    console.log('bfs', first.key);
    // 子节点入队列
    first.children.forEach(child => {
      queue.push(child);
    });
  }
}
dfs(n1);
bfs(n1);
