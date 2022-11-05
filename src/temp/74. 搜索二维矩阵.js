/**
 * 题目：74. 搜索二维矩阵
 * 来源：https://leetcode.cn/problems/search-a-2d-matrix
 * 难度：中等
 * 知识点：数组、二分
 * 描述：编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
        每行中的整数从左到右按升序排列。
        每行的第一个整数大于前一行的最后一个整数。
 */

// 测试代码

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {};

// 测试用例

matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
target = 3;
// true
console.time('执行用时');
console.log(searchMatrix(matrix, target));
console.timeEnd('执行用时');

matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
target = 13;
// false
console.time('执行用时');
console.log(searchMatrix(matrix, target));
console.timeEnd('执行用时');
