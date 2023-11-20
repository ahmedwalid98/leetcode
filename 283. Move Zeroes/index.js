/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0;
    nums.forEach((num) => {
        if (num != 0) {
            nums[j] = num
            j++;
        }
    })
    while (j < nums.length) {
        nums[j] = 0;
        j++;
    }
};