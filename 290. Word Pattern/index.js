/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  let patt = pattern.split("")
  let str = s.split(" ")
  let object = {}
  
  if (patt.length !== str.length) return false
  
  for (let i = 0; i < patt.length && i < str.length; i++){
    if (object.hasOwnProperty(patt[i]) || Object.values(object).includes(str[i])) continue
      object[`${patt[i]}`] = str[i]
  }
  console.log(object)
  for (let i = 0; i < patt.length && i < str.length; i++){
    if (object[patt[i]] !== str[i]) return false
  }
  return true
};

console.log(wordPattern("aaa", "aa aa aa aa"))