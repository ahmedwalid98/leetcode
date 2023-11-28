/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let firstRow = /^[qwertyuiop]*$/;
  let secondRow = /^[asdfghjkl]*$/;
  let thirdRow = /^[zxcvbnm]*$/;
  let ans = [];
  for (word of words) {
    if (
      firstRow.test(word.toLowerCase()) ||
      secondRow.test(word.toLowerCase()) ||
      thirdRow.test(word.toLowerCase())
    )
      ans.push(word);
  }
  return ans;
};
