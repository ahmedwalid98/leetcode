/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let temp = new Set(nums);
  return nums.length > temp.size ? true : false;
};
