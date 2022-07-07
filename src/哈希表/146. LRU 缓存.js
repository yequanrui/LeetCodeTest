/**
 * 题目：LRU 缓存
 * 来源：https://leetcode.cn/problems/lru-cache
 * 难度：中等
 * 描述：请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
        实现 LRUCache 类：
        LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
        int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
        void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
        函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
 */

// 测试代码

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.map = new Map();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// 测试用例

['LRUCache', 'put', 'put', 'get', 'put', 'get', 'put', 'get', 'get', 'get'][([2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4])];
// [null, null, null, 1, null, -1, null, -1, 3, 4]
console.time('执行用时');
console.log(LRUCache());
console.timeEnd('执行用时');
