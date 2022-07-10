/**
 * 题目：33. 搜索旋转排序数组
 * 来源：https://leetcode.cn/problems/search-in-rotated-sorted-array
 * 难度：中等
 * 知识点：数组、二分查找
 * 描述：整数数组 nums 按升序排列，数组中的值 互不相同 。
        在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
        给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
        你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
 */

// 测试代码

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return nums.indexOf(target);
};

// 测试用例

nums = [4, 5, 6, 7, 0, 1, 2];
target = 0;
// 4
console.time('执行用时');
console.log(search(nums, target));
console.timeEnd('执行用时');

nums = [4, 5, 6, 7, 0, 1, 2];
target = 3;
// -1
console.time('执行用时');
console.log(search(nums, target));
console.timeEnd('执行用时');

nums = [1];
target = 0;
// -1
console.time('执行用时');
console.log(search(nums, target));
console.timeEnd('执行用时');
