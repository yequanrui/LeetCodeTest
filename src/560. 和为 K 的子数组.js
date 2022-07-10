/**
 * 题目：560. 和为 K 的子数组
 * 来源：https://leetcode.cn/problems/subarray-sum-equals-k
 * 难度：中等
 * 知识点：数组、哈希表、前缀和
 * 描述：给你一个整数数组nums和一个整数k，请你统计并返回该数组中和为k的子数组的个数。
 */

// 测试代码

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let len = nums.length,
    map = new Map(),
    prefixSum = 0,
    result = 0;
  map.set(0, 1); // 前缀和为 0 的出现次数初始化为 1
  for (let i = 0; i < len; i++) {
    prefixSum += nums[i];
    // 例如 k = 6，如果遍历到前缀和为 8 时，如果前面出现过 2，说明满足前缀和
    if (map.get(prefixSum - k)) {
      result += map.get(prefixSum - k);
    }
    // 如果 prefixSum 这个前缀和第一次出现的，那就初始化为 1，否则 map.get(prefixSum) 的基础上 + 1
    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }
  return result;
};

// 测试用例

nums = [1, 1, 1];
k = 2;
// 2
console.time('执行用时');
console.log(subarraySum(nums, k));
console.timeEnd('执行用时');

nums = [1, 2, 3];
k = 3;
// 2
console.time('执行用时');
console.log(subarraySum(nums, k));
console.timeEnd('执行用时');
