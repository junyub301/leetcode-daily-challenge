/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function (root) {
    let maxAncestor = 0;

    const dfs = (node, max, min) => {
        if (!node) return;
        max = Math.max(max, node.val);
        min = Math.min(min, node.val);
        maxAncestor = Math.max(
            maxAncestor,
            Math.abs(node.val - max),
            Math.abs(node.val - min)
        );
        if (node.left) {
            dfs(node.left, max, min);
        }
        if (node.right) {
            dfs(node.right, max, min);
        }
    };

    dfs(root, root.val, root.val);
    return maxAncestor;
};
