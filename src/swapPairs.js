/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let result = new ListNode();
    result.next = head;
    let prev = result;
    while (prev.next && prev.next.next) {
        let n1 = prev.next;
        let n2 = n1.next;
        n1.next = n2.next;
        n2.next = n1;
        prev.next = n2;
        prev = n1;
    }
    return result.next;
};

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

function makeList(arr) {
    let list = new ListNode(arr[0]);
    let current = list;
    for (let i = 1; i < arr.length; i++) {
        if (!current.next) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
    }
    return list;
}

const head = makeList([1, 2, 3, 4]);

console.log(swapPairs(head));
