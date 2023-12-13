/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let map = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  let str = s.split("");
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      stack.push(str[i]);
    } else {
      let value = stack.pop();

      if (map[value] !== str[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
