/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }
  for (key of Object.keys(obj)) {
    if (obj[key] > 1) return key;
  }
};
