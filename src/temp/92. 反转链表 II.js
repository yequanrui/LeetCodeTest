/**
 * 题目：92. 反转链表 II
 * 来源：https://leetcode.cn/problems/reverse-linked-list-ii
 * 难度：中等
 * 知识点：链表
 * 描述：给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表。
 */

// 测试代码

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {};

// 测试用例

head = [1, 2, 3, 4, 5];
left = 2;
right = 4;
// [1,4,3,2,5]
console.time('执行用时');
console.log(reverseBetween(head, left, right));
console.timeEnd('执行用时');

head = [5];
left = 1;
right = 1;
// [5]
console.time('执行用时');
console.log(reverseBetween(head, left, right));
console.timeEnd('执行用时');
