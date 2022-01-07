/**
 * 94. 二叉树的中序遍历
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  var res = [];

  function traversal(p) {
    if (!p) return;

    traversal(p.left);
    res.push(p.val);
    traversal(p.right);
  }

  traversal(root);

  return res;
};

const root = new TreeNode(1);
root.left = new TreeNode(5);
root.right = new TreeNode(9);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(3);
root.right.right.left = new TreeNode(8);

var res = inorderTraversal(root);
console.log(res);
