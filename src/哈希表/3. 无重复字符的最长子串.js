/**
 * 题目：3. 无重复字符的最长子串
 * 来源：https://leetcode.cn/problems/longest-substring-without-repeating-characters
 * 难度：中等
 * 知识点：哈希表、滑窗
 * 描述：给定一个字符串s，请你找出其中不含有重复字符的最长子串的长度。
 */

// 测试代码

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let [left, right, max] = [0, -1, 0];
  while (right < s.length - 1) {
    if (set.has(s[right + 1])) {
      // 如果窗口右边界的右边一位的值在窗口里已经有了，就需要左边界不断压缩，左边值也删掉
      set.delete(s[left++]);
    } else {
      // 如果窗口右边界的右边一位的值在窗口里没有，右边界就可以扩张，值也加入set中
      set.add(s[++right]);
      // 更新set的大小与原来的最比较；即保存窗口的最大长度
      max = Math.max(max, set.size);
    }
  }
  return max;
};

// 测试用例

s = 'abcabcbb';
// 3
console.time('执行用时');
console.log(lengthOfLongestSubstring(s));
console.timeEnd('执行用时');

s = 'bbbbb';
// 1
console.time('执行用时');
console.log(lengthOfLongestSubstring(s));
console.timeEnd('执行用时');

s = 'pwwkew';
// 3
console.time('执行用时');
console.log(lengthOfLongestSubstring(s));
console.timeEnd('执行用时');

s = '';
// 0
console.time('执行用时');
console.log(lengthOfLongestSubstring(s));
console.timeEnd('执行用时');

s = 'aab';
// 2
console.time('执行用时');
console.log(lengthOfLongestSubstring(s));
console.timeEnd('执行用时');

s = 'dvdf';
// 3
console.time('执行用时');
console.log(lengthOfLongestSubstring(s));
console.timeEnd('执行用时');
