/**
 * 二叉树的轮廓
 */

function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

const root = new TreeNode(1);
root.left = new TreeNode(5);
root.right = new TreeNode(9);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(3);
root.right.right.left = new TreeNode(8);

// d 代表树的层数
function leftoutlineTree(node, d = 0, outline = []) {
  if (!node) return;

  if (outline[d] == null) {
    outline[d] = node.value;
  }

  leftoutlineTree(node.left, d + 1, outline);
  leftoutlineTree(node.right, d + 1, outline);

  return outline;
}

console.log(leftoutlineTree(root));
