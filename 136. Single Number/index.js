/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
  const count = {};
  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]]) {
      count[nums[i]] += 1;
    } else {
      count[nums[i]] = 1;
    }
  }
  return Object.entries(count).sort(([, a], [, b]) => a - b)[0][0];
};
