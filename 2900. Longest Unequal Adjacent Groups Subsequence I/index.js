/**
 * @param {number} n
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getWordsInLongestSubsequence = function (n, words, groups) {
  let ans = [];
  let j = 0;
  ans.push(words[0]);
  for (let i = 1; i < n; i++) {
    if (groups[i] !== groups[j]) ans.push(words[i]);
    j++;
  }
  return ans;
};
