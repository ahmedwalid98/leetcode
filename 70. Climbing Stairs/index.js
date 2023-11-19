var climbStairs = function(n) {
  /**
* @param {number} n
* @return {number}
*/
  if (n === 1) return 1;
  let prev = 1, curr = 1;
  for(let i = 2; i < n + 1; i++){
      let temp = curr;
      curr = curr + prev;
      prev = temp
  }
  return curr
};