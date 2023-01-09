function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let result = [];

    function dfs(node) {
        if (!node) return;
        result.push(node.val);
        if (node.left) dfs(node.left);
        if (node.right) dfs(node.right);
    }
    dfs(root);
    return result;
};

const root = new TreeNode(2);
root.left = new TreeNode(null);
root.right = new TreeNode(3);
root.left = new TreeNode(1);

console.log(preorderTraversal(root));
