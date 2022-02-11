/**
 * @param {number[]} nums
 * @return {boolean}
 *
 */
var increasingTriplet = function (nums) {
  // 첫번 째 풀이
  let stack = [];
  while (nums.length !== 0) {
    const current = nums.shift();
    while (stack[stack.length - 1] >= current && stack.length !== 0) {
      stack.pop();
    }
    stack.push(current);
    if (stack.length === 3) {
      return true;
    }
  }
  return false;
};

// 두번째 풀이
var increasingTriplet = function (nums) {
  let s = Infinity;
  let m = Infinity;
  for (let num of nums) {
    if (num <= s) {
      s = num;
    } else if (num <= m) {
      m = num;
    } else {
      return true;
    }
  }
  return false;
};
