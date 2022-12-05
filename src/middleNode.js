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
var middleNode = function (head) {
    let length = 1;
    let current = head;
    let cnt = 1;
    while (current.next !== null) {
        length++;
        current = current.next;
    }
    current = head;
    while (cnt <= Math.floor(length / 2)) {
        cnt++;
        current = current.next;
    }
    return current;
};

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
