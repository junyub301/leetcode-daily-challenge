/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    const leaf1 = [],
        leaf2 = [];

    const dfs = (node, leaf) => {
        const arr = [];
        if (!node) return;
        if (node.left) dfs(node.left, leaf);
        if (node.right) dfs(node.right, leaf);
        if (!node.left && !node.right) {
            leaf.push(node.val);
        }
    };
    dfs(root1, leaf1);
    dfs(root2, leaf2);
    return (
        leaf1.length === leaf2.lenfth &&
        leaf1.every((val, index) => val === leaf2[index])
    );
};
