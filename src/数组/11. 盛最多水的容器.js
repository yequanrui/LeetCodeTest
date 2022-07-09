/**
 * 题目：11. 盛最多水的容器
 * 来源：https://leetcode.cn/problems/container-with-most-water
 * 难度：中等
 * 知识点：数组、双指针
 * 描述：给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
        找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
        返回容器可以储存的最大水量。
        说明：你不能倾斜容器。
 */

// 测试代码

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {};

// 测试用例

height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// 49
console.time('执行用时');
console.log(maxArea(height));
console.timeEnd('执行用时');

height = [1, 1];
// 1
console.time('执行用时');
console.log(maxArea(height));
console.timeEnd('执行用时');
