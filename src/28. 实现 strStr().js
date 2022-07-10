/**
 * 题目：28. 实现 strStr()
 * 来源：https://leetcode.cn/problems/implement-strstr
 * 难度：简单
 * 知识点：双指针、字符串、字符串匹配
 * 描述：实现 strStr() 函数。
        给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。
 * 说明：
        当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
        对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。
 */

// 测试代码

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

// 测试用例

haystack = 'hello';
needle = 'll';
// 2
console.time('执行用时');
console.log(strStr(haystack, needle));
console.timeEnd('执行用时');

haystack = 'aaaaa';
needle = 'bba';
// -1
console.time('执行用时');
console.log(strStr(haystack, needle));
console.timeEnd('执行用时');
