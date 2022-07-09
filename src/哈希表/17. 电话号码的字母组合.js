/**
 * 题目：17. 电话号码的字母组合
 * 来源：https://leetcode.cn/problems/letter-combinations-of-a-phone-number
 * 难度：中等
 * 知识点：哈希表、回溯
 * 描述：给定一个仅包含数字2-9的字符串，返回所有它能表示的字母组合。
 *      答案可以按任意顺序返回。给出数字到字母的映射如下（与电话按键相同）。注意1不对应任何字母。
 */

// 测试代码

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === '') {
    return [];
  }
  const len = digits.length;
  // 建立数字和字母的关系表
  const map = { 2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz' };
  if (len === 1) {
    return map[digits].split('');
  }
  const res = []; // 用来存储字母组合
  const path = []; // 用来存储路径
  backtrack(0);
  return res;
  // 回溯函数
  function backtrack(i) {
    // 终止条件
    if (path.length === len) {
      res.push(path.join(''));
      return;
    }
    if (map[digits[i]]) {
      // 遍历
      for (const k of map[digits[i]]) {
        path.push(k); // 标记
        backtrack(i + 1); // 递归
        path.pop(); // 撤回标记
      }
    }
  }
};

// 测试用例

digits = '23';
// ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.time('执行用时');
console.log(letterCombinations(digits));
console.timeEnd('执行用时');

digits = '';
// []
console.time('执行用时');
console.log(letterCombinations(digits));
console.timeEnd('执行用时');

digits = '2';
// ["a","b","c"]
console.time('执行用时');
console.log(letterCombinations(digits));
console.timeEnd('执行用时');
