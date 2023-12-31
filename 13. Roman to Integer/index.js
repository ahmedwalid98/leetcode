/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let output = 0
  let obj = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  }
  for(let i = 0; i < s.length; i++){
          const next = obj[s[i + 1]]
          const current = obj[s[i]]
          if (current < next) {
              output += next - current
              i++
          } else {
              output += current
          }

          
  }
  return output
};