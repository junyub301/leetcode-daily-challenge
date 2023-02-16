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
var maxDepth = function (root) {
    if (root === null) return 0;
    let max = 1;
    const dfs = (node) => {
        let lCnt = 1;
        let rCnt = 1;
        if (node.left) lCnt += dfs(node.left);
        if (node.right) rCnt += dfs(node.right);

        max = Math.max(max, Math.max(lCnt, rCnt));
        return Math.max(lCnt, rCnt);
    };
    dfs(root);
    return max;
};
