/**
 * 题目：442. 数组中重复的数据
 * 来源：https://leetcode.cn/problems/find-all-duplicates-in-an-array
 * 难度：中等
 * 知识点：<points>
 * 描述：给你一个长度为 n 的整数数组 nums ，其中 nums 的所有整数都在范围 [1, n] 内，且每个整数出现 一次 或 两次 。请你找出所有出现 两次 的整数，并以数组形式返回。
        你必须设计并实现一个时间复杂度为 O(n) 且仅使用常量额外空间的算法解决此问题。
 */

// 测试代码

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const set = new Set();
  const len = nums.length;
  // 遍历输入数组，在Set里没有就添加，有就该值标记负数，最后取输入数组里的负数的绝对值
  for (let i = 0; i < len; i++) {
    !set.has(nums[i]) ? set.add(nums[i]) : (nums[i] *= -1);
  }
  return nums.filter((n) => n < 0).map(Math.abs);
};

// 测试用例

nums = [4, 3, 2, 7, 8, 2, 3, 1];
// [2,3]
console.time('执行用时');
console.log(findDuplicates(nums));
console.timeEnd('执行用时');

nums = [1, 1, 2];
// [1]
console.time('执行用时');
console.log(findDuplicates(nums));
console.timeEnd('执行用时');

nums = [1];
// []
console.time('执行用时');
console.log(findDuplicates(nums));
console.timeEnd('执行用时');
