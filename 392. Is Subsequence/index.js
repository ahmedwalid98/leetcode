/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (t.length < s.length) {
    return false;
  }
  if (s === "" && t === "") return true;
  let x = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[x] === t[i]) x++;
    if (x === s.length) return true;
  }

  return false;
};
