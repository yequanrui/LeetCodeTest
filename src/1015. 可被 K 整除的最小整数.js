/**
 * 题目：1015. 可被 K 整除的最小整数
 * 来源：https://leetcode.cn/problems/smallest-integer-divisible-by-k
 * 难度：中等
 * 知识点：哈希表、数学
 * 描述：给定正整数 k ，你需要找出可以被 k 整除的、仅包含数字 1 的最 小 正整数 n 的长度。
        返回 n 的长度。如果不存在这样的 n ，就返回-1。
        注意： n 不符合 64 位带符号整数。
 */

// 测试代码

/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function (k) {
  // 只要不满足k % 2 === 0 || k % 5 === 0，就必然有解
  if (k % 2 === 0 || k % 5 === 0) {
    return -1;
  }
  let [num, len] = [0, 1];
  while (true) {
    num = (num * 10 + 1) % k;
    if (num == 0) {
      break;
    }
    len++;
  }
  return len;
};

// 测试用例

k = 1;
// 1
console.time('执行用时');
console.log(smallestRepunitDivByK(k));
console.timeEnd('执行用时');

k = 2;
// -1
console.time('执行用时');
console.log(smallestRepunitDivByK(k));
console.timeEnd('执行用时');

k = 3;
// 3
console.time('执行用时');
console.log(smallestRepunitDivByK(k));
console.timeEnd('执行用时');
