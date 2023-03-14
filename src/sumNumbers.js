function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */

/* 
    Sum Root to Leaf Numbers
    1. root부터 최하위 노드까지의 경로수를 계산한다.
    2. 리프노드(최하위 노드)에 도달했을 경우 총합계에 숫자를 더한다.

*/
var sumNumbers = function (root) {
    let sum = 0;
    const dfs = (node, sumStr = "") => {
        sumStr += node.val;
        if (!node.left && !node.right) {
            sum += +sumStr;
            return;
        }
        if (node.left) {
            dfs(node.left, sumStr);
        }
        if (node.right) {
            dfs(node.right, sumStr);
        }
    };
    dfs(root);
    return sum;
};
