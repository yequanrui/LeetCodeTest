/**
 * 题目：805. 数组的均值分割
 * 来源：https://leetcode.cn/problems/split-array-with-same-average
 * 难度：困难
 * 知识点：位运算、数组、数学、动态规划、状态压缩
 * 描述：给定你一个整数数组 nums
        我们要将 nums 数组中的每个元素移动到 A 数组 或者 B 数组中，使得 A 数组和 B 数组不为空，并且 average(A) == average(B) 。
        如果可以完成则返回true ， 否则返回 false  。
        注意：对于数组 arr ,  average(arr) 是 arr 的所有元素除以 arr 长度的和。
 */

// 测试代码

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var splitArraySameAverage = function (nums) {
  const len = nums.length;
  const sum = nums.reduce((prev, curr) => prev + curr, 0);
  const res = new Array(31).fill(0).map(() => new Map());
  const dfs = (total, index, count) => {
    if (count === len) {
      return false;
    }
    if (count && count < len && total / count === (sum - total) / (len - count)) {
      res[index].set(total, true);
      return true;
    }
    if (res[index].has(total)) {
      return res[index].get(total);
    }
    for (let i = index; i < len; i++) {
      if (dfs(total + nums[i], i + 1, count + 1)) {
        res[index].set(total, true);
        return true;
      }
    }
    res[index].set(total, false);
    return false;
  };
  return dfs(0, 0, 0);
};

// 测试用例

nums = [1, 2, 3, 4, 5, 6, 7, 8];
// true
console.time('执行用时');
console.log(splitArraySameAverage(nums));
console.timeEnd('执行用时');

nums = [3, 1];
// false
console.time('执行用时');
console.log(splitArraySameAverage(nums));
console.timeEnd('执行用时');
