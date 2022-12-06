/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

// 내가 푼 풀이
var oddEvenList = function (head) {
    let cnt = 0;
    let oddValues = [];
    let evenValues = [];
    let curr = head;
    while (curr) {
        if (cnt % 2 === 0) {
            evenValues.push(curr.val);
        } else {
            oddValues.push(curr.val);
        }
        curr = curr.next;

        cnt++;
    }
    return makeNodeFromArray([].concat(evenValues, oddValues));
};

function makeNodeFromArray(head) {
    let node = new ListNode();
    let curr = node;
    while (head.length) {
        let val = head.shift();
        let newNode = new ListNode(val);
        curr.next = newNode;
        curr = curr.next;
    }
    return node.next;
}

// 솔루션 제공 풀이

var oddEvenList2 = function (head) {
    if (head == null) return null;
    let odd = head,
        even = head.next,
        evenHead = even;
    while (even != null && even.next != null) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
};
