/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let word = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return word === word.split("").reverse().join("");
};
