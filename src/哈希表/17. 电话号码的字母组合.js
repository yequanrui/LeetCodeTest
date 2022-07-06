/**
 * 题目：电话号码的字母组合
 * 来源：https://leetcode.cn/problems/letter-combinations-of-a-phone-number
 * 难度：中等
 * 描述：给定一个仅包含数字2-9的字符串，返回所有它能表示的字母组合。
 *      答案可以按任意顺序返回。给出数字到字母的映射如下（与电话按键相同）。注意1不对应任何字母。
 */

// 测试代码

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === "") {
    return [];
  }
  const len = digits.length;
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  if (len === 1) {
    return map[digits].split("");
  }
  const res = []; // 用来存储组合
  const path = []; // 用来存储路径
  backtrack(digits, 0);
  return res;
  // 回溯函数
  function backtrack(digits, i) {
    // 终止条件
    if (path.length === len) {
      res.push(path.join(""));
      return;
    }
    if (map[digits[i]]) {
      // 遍历
      for (const k of map[digits[i]]) {
        // 标记
        path.push(k);
        // 递归
        backtrack(digits, i + 1);
        // 撤回标记
        path.pop();
      }
    }
  }
};

// 测试用例

let digits = "23";
// ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.time("执行用时");
console.log(letterCombinations(digits));
console.timeEnd("执行用时");

digits = "";
// []
console.time("执行用时");
console.log(letterCombinations(digits));
console.timeEnd("执行用时");

digits = "2";
// ["a","b","c"]
console.time("执行用时");
console.log(letterCombinations(digits));
console.timeEnd("执行用时");
