/**
 * 题目：223. 矩形面积
 * 来源：https://leetcode.cn/problems/rectangle-area
 * 难度：中等
 * 知识点：几何、数学
 * 描述：给你 二维 平面上两个 由直线构成且边与坐标轴平行/垂直 的矩形，请你计算并返回两个矩形覆盖的总面积。
        每个矩形由其 左下 顶点和 右上 顶点坐标表示：
        第一个矩形由其左下顶点 (ax1, ay1) 和右上顶点 (ax2, ay2) 定义。
        第二个矩形由其左下顶点 (bx1, by1) 和右上顶点 (bx2, by2) 定义。
 */

// 测试代码

/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  // 覆盖的总面积等于矩形1的面积加上矩形2的面积减去公共的面积
  const [area1, area2] = [(ax2 - ax1) * (ay2 - ay1), (bx2 - bx1) * (by2 - by1)];
  const [width, height] = [Math.min(ax2, bx2) - Math.max(ax1, bx1), Math.min(ay2, by2) - Math.max(ay1, by1)];
  const area = Math.max(width, 0) * Math.max(height, 0);
  return area1 + area2 - area;
};

// 测试用例

ax1 = -3;
ay1 = 0;
ax2 = 3;
ay2 = 4;
bx1 = 0;
by1 = -1;
bx2 = 9;
by2 = 2;
// 45
console.time('执行用时');
console.log(computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2));
console.timeEnd('执行用时');

ax1 = -2;
ay1 = -2;
ax2 = 2;
ay2 = 2;
bx1 = -2;
by1 = -2;
bx2 = 2;
by2 = 2;
// 16
console.time('执行用时');
console.log(computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2));
console.timeEnd('执行用时');
