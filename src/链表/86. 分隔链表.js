/**
 * 题目：86. 分隔链表
 * 来源：https://leetcode.cn/problems/partition-list
 * 难度：中等
 * 知识点：链表
 * 描述：给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
        你应当 保留 两个分区中每个节点的初始相对位置。
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {};

// 测试用例

head = [1, 4, 3, 2, 5, 2];
x = 3;
// [1,2,2,4,3,5]
console.time('执行用时');
console.log(partition(head, x));
console.timeEnd('执行用时');

head = [2, 1];
x = 2;
// [1,2]
console.time('执行用时');
console.log(partition(head, x));
console.timeEnd('执行用时');
