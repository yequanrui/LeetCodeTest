/**
 * 题目：23. 合并K个升序链表
 * 来源：https://leetcode.cn/problems/merge-k-sorted-lists
 * 难度：困难
 * 知识点：链表
 * 描述：给你一个链表数组，每个链表都已经按升序排列。请你将所有链表合并到一个升序链表中，返回合并后的链表。
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {};

// 测试用例

lists = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];
// [1,1,2,3,4,4,5,6]
console.time('执行用时');
console.log(mergeKLists(lists));
console.timeEnd('执行用时');

lists = [];
// []
console.time('执行用时');
console.log(mergeKLists(lists));
console.timeEnd('执行用时');

lists = [[]];
// []
console.time('执行用时');
console.log(mergeKLists(lists));
console.timeEnd('执行用时');
