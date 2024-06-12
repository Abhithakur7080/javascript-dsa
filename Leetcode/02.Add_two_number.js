//problem link: https://leetcode.com/problems/add-two-numbers/

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const ans = new ListNode(0);
  let p = l1;
  let q = l2;
  let curr = ans;
  let carry = 0;

  while (p !== null || q !== null) {
    const x = p !== null ? p.val : 0;
    const y = q !== null ? q.val : 0;
    const sum = carry + x + y;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;

    if (p !== null) p = p.next;
    if (q !== null) q = q.next;
  }

  if (carry > 0) {
    curr.next = new ListNode(carry);
  }

  return ans.next;
};

function printList(node) {
  let output = "";
  while (node !== null) {
    output += node.val;
    node = node.next;
    if (node !== null) {
      output += " -> ";
    }
  }
  console.log(output);
}

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
printList(addTwoNumbers(l1, l2)); // 7 -> 0 -> 8

const l11 = new ListNode(0);
const l12 = new ListNode(0);
printList(addTwoNumbers(l11, l12)); // 0

const l21 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
const l22 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
printList(addTwoNumbers(l21, l22)); //8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1

