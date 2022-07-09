/**
 * 题目：46. 全排列
 * 来源：https://leetcode.cn/problems/permutations
 * 难度：中等
 * 知识点：数组、回溯
 * 描述：给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 */

// 测试代码

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const [len, res, path] = [nums.length, [], []];
  function backtrack(used) {
    if (path.length === len) {
      // 递归终止条件
      res.push(Array.from(path));
      return;
    }
    for (let i = 0; i < len; i++) {
      if (used[i]) {
        // 已经使用过了就跳过本轮循环
        continue;
      }
      path.push(nums[i]);
      used[i] = true;
      backtrack(used); // 递归
      path.pop(); // 回溯 将push进的元素pop出来 然后标记成未使用 继续其他分支
      used[i] = false;
    }
  }
  backtrack([]); // 调用回溯函数 传入nums，nums长度，used数组
  return res;
};

// 测试用例

nums = [1, 2, 3];
// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.time('执行用时');
console.log(permute(nums));
console.timeEnd('执行用时');

nums = [0, 1];
// [[0,1],[1,0]]
console.time('执行用时');
console.log(permute(nums));
console.timeEnd('执行用时');

nums = [1];
// [[1]]
console.time('执行用时');
console.log(permute(nums));
console.timeEnd('执行用时');
