function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 */

var Solution = function (head) {
    this.size = 0;
    this.nodes = [];
    let node = head;
    while (node) {
        this.nodes.push(node.val);
        this.size++;
        node = node.next;
    }
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
    let randomIndex = Math.floor(Math.random() * this.size);
    return this.nodes[randomIndex];
};

function makeListNode(arr) {
    let listNode = null;
    let curr;
    for (let node of arr) {
        if (!listNode) {
            listNode = new ListNode(node);
            curr = listNode;
        } else {
            curr.next = new ListNode(node);
            curr = curr.next;
        }
    }

    return listNode;
}

const obj = new Solution(makeListNode([1, 2, 3]));
console.log(obj.getRandom());

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
