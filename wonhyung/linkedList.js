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
const oddEvenList = function (head) {
    if (head === null) {
        return null;
    }

    let odd = head;
    let even = head.next;
    let evenHead = even;

    while (odd !== null && odd.next !== null && even !== null && even.next !== null) {
        odd.next = even.next;

        odd = odd.next;

        even.next = odd.next;

        even = even.next;
    }
    odd.next = evenHead;

    console.log(head);
    return head;
};

oddEvenList([1,2,3,4,5]);