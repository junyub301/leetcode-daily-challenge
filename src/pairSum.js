/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
    let headToHalf = head;
    let halfToTail = head;
    while (headToHalf.next && halfToTail.next.next) {
        headToHalf = headToHalf.next;
        halfToTail = halfToTail.next.next;
    }
    halfToTail = headToHalf.next;
    headToHalf.next = null;

    let reversHalfToTail = revers(halfToTail),
        cur = head,
        sum = 0;
    while (cur) {
        sum = Math.max(sum, reversHalfToTail.val + cur.val);
        reversHalfToTail = reversHalfToTail.next;
        cur = cur.next;
    }

    return sum;

    function revers(node) {
        let pre = null;
        let cur = node;
        while (cur) {
            let nextNode = cur.next;
            cur.next = pre;
            pre = cur;
            cur = nextNode;
        }

        return pre;
    }

    return sum;
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

const head = makeList([
    47, 22, 81, 46, 94, 95, 90, 22, 55, 91, 6, 83, 49, 65, 10, 32, 41, 26, 83, 99, 14, 85, 42, 99,
    89, 69, 30, 92, 32, 74, 9, 81, 5, 9,
]);
console.log(pairSum(head));
