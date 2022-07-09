/**
 * 题目：142. 环形链表 II
 * 来源：https://leetcode.cn/problems/linked-list-cycle-ii
 * 难度：中等
 * 知识点：链表
 * 描述：给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
        如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
        不允许修改 链表。
 */

// 测试代码

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {};

// 测试用例

head = [3, 2, 0, -4];
pos = 1;
// 返回索引为 1 的链表节点
console.time('执行用时');
console.log(detectCycle(head));
console.timeEnd('执行用时');

head = [1, 2];
pos = 0;
// 返回索引为 0 的链表节点
console.time('执行用时');
console.log(detectCycle(head));
console.timeEnd('执行用时');

head = [1];
pos = -1;
// 返回 null
console.time('执行用时');
console.log(detectCycle(head));
console.timeEnd('执行用时');
