/**
 * 题目：和为 K 的子数组
 * 来源：https://leetcode.cn/problems/subarray-sum-equals-k
 * 难度：中等
 * 描述：给你一个整数数组nums和一个整数k，请你统计并返回该数组中和为k的子数组的个数。
 */

// 测试代码

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {};

// 测试用例

let nums = [1, 1, 1];
let k = 2;
// 2
console.time("执行用时");
console.log(subarraySum(nums, k));
console.timeEnd("执行用时");

nums = [1, 2, 3];
k = 3;
// 2
console.time("执行用时");
console.log(subarraySum(nums, k));
console.timeEnd("执行用时");
