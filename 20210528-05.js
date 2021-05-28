/**
 * 104. 二叉树的最大深度
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const root = new TreeNode(1);
root.left = new TreeNode(5);
root.right = new TreeNode(9);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(3);
root.right.right.left = new TreeNode(8);

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  var res = [];

  function traversal(p, depth) {
    if (!p) return;

    if (!res[depth]) {
      res[depth] = [p.val];
    } else {
      res[depth].push(p.val);
    }

    traversal(p.left, depth + 1);
    traversal(p.right, depth + 1);
  }

  traversal(root, 0);

  return res;
};

var res = levelOrder(root);
console.log(res);
