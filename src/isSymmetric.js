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
 * @return {boolean}
 */

/*
    ❋ 대칭 트리
    1. 양쪽다 null일 경우 그 레벨노드는 대칭
    2. 한쪽만 null일 경우 그 레벨노드는 대칭이 아님
    3. 값이 같지 않을 경우 대칭이 아님
    3. 자식 노드가 있을 경우
        - 왼쪽 노드와 오른쪽 노드 && 오른쪽노드와 왼쪽노드를 비교
        

 */
var isSymmetric = function (root) {
    const isSame = (p, q) => {
        if (p === null && q === null) return true;
        if (p === null || q === null) return false;
        if (p.val !== q.val) return false;
        return isSame(p.left, q.right) && isSame(p.right, q.left);
    };

    return isSame(root.left, root.right);
};
