/**
 * 题目：2086. 从房屋收集雨水需要的最少水桶数
 * 来源：https://leetcode.cn/problems/minimum-number-of-buckets-required-to-collect-rainwater-from-houses
 * 难度：中等
 * 知识点：贪心、字符串、动态规划
 * 描述：给你一个下标从 0 开始的字符串 street 。street 中每个字符要么是表示房屋的 'H' ，要么是表示空位的 '.' 。
        你可以在 空位 放置水桶，从相邻的房屋收集雨水。位置在 i - 1 或者 i + 1 的水桶可以收集位置为 i 处房屋的雨水。一个水桶如果相邻两个位置都有房屋，那么它可以收集 两个 房屋的雨水。
        在确保 每个 房屋旁边都 至少 有一个水桶的前提下，请你返回需要的 最少 水桶数。如果无解请返回 -1 。
 */

// 测试代码

/**
 * @param {string} street
 * @return {number}
 */
var minimumBuckets = function (street) {
  const n = street.length;
  let [ans, last] = [0, -2];
  for (let i = 0; i < n; i++) {
    if (street[i] === 'H') {
      if (last === i - 1) {
        continue;
      } else if (i + 1 < n && street[i + 1] === '.') {
        ans++;
        last = i + 1;
      } else if (i - 1 >= 0 && street[i - 1] === '.') {
        ans++;
        last = i - 1;
      } else {
        return -1;
      }
    }
  }
  return ans;
};

// 测试用例

street = 'H..H';
// 2
console.time('执行用时');
console.log(minimumBuckets(street));
console.timeEnd('执行用时');

street = '.H.H.';
// 1
console.time('执行用时');
console.log(minimumBuckets(street));
console.timeEnd('执行用时');

street = '.HHH.';
// -1
console.time('执行用时');
console.log(minimumBuckets(street));
console.timeEnd('执行用时');

street = 'H';
// -1
console.time('执行用时');
console.log(minimumBuckets(street));
console.timeEnd('执行用时');

street = '.';
// 0
console.time('执行用时');
console.log(minimumBuckets(street));
console.timeEnd('执行用时');
