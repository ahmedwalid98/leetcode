/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const freq = new Map();
  for (let num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  const output = [];

  for (let [num, freqs] of freq) {
    output[freqs] = (output[freqs] || new Set()).add(num);
  }
  const ans = [];
  for (let i = output.length - 1; i >= 0; i--) {
    if (output[i]) ans.push(...output[i]);
    if (ans.length === k) break;
  }
  return ans;
};
