/**
 * 题目名称：删除最外层的括号
 * 题目地址：https://leetcode-cn.com/problems/remove-outermost-parentheses
 */

// 思路：从头到尾寻找有效括号组合，push到结果集中

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  const bracket = { '(': ')' };
  const stack = [];
  const result = [];
  let res = [];
  for (let i = 0; i < s.length; i++) {
    const val = s[i];
    if (bracket[val]) {
      stack.push(val); // 左括号
    } else {
      stack.pop(); // 右括号
    }
    if (stack.length === 0) {
      // 存在一组有效括号
      res.push(val);
      const cur = [...res];
      cur.shift();
      cur.pop();
      result.push(cur);
      res = [];
      continue;
    }
    res.push(val);
  }
  return result.flat().join('');
};

// 测试用例

s = '(()())(())';
// ()()()
console.time('执行用时');
console.log(removeOuterParentheses(s));
console.timeEnd('执行用时');

s = '(()())(())(()(()))';
// ()()()()(())
console.time('执行用时');
console.log(removeOuterParentheses(s));
console.timeEnd('执行用时');

s = '()()';
//
console.time('执行用时');
console.log(removeOuterParentheses(s));
console.timeEnd('执行用时');
