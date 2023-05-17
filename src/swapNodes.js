var swapNodes = function (head, k) {
    let slow = head,
        fast = head;
    let i = 1;
    let kNode = null;
    while (fast) {
        if (i === k) kNode = fast;
        if (i > k) slow = slow.next;
        fast = fast.next;
        i++;
    }
    let kVal = kNode.val;
    kNode.val = slow.val;
    slow.val = kVal;

    return head;
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

const head = [1, 2, 3, 4, 5],
    k = 2;

console.log(swapNodes(makeList(head), k));
