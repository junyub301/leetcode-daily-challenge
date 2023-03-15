function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

/* 
    Check Completeness of a Binary Tree(이진트리의 완전성 확인)
    * BFS를 활용
    1. BFS를 수행하여 존재 여부에 관계없이 각 노드의 왼쪽 및 오른쪽 자식 노드를 queue에 넣는다..
    2. 완전한 이진트리를 나타낼 경우 유효한 값에 null이 존재해서는 안된다
        ex) [1,2,3,null,4]일 경우 완전한 이진트리일 수 없다.
    3. 첫번째 null값을 찾으면 루프를 빠져나온다.
    4. 루프를 빠져나오면 null 또는 유효한 노드를 가지는 queue를 얻을수 있다.
    5. 완전한 이진트리일 경우 queue에는 모두 null값이 포함되어야 한다. 

*/
var isCompleteTree = function (root) {
    let node = root;
    const queue = [];
    queue.push(node);
    while (queue.length) {
        node = queue.shift();
        if (!node) break;
        queue.push(node.left);
        queue.push(node.right);
    }
    while (queue.length && !queue[queue.length - 1]) {
        queue.pop();
    }
    return queue.length === 0;
};
