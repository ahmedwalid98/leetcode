/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let ans = [];
  for (let i = 0; i < operations.length; i++) {
    if (Number(operations[i])) {
      ans.push(Number(operations[i]));
    } else if (operations[i] === "C") {
      ans.pop();
    } else if (operations[i] === "D") {
      let element = ans[ans.length - 1] * 2;
      ans.push(element);
    } else if (operations[i] === "+") {
      let element = ans[ans.length - 1] + ans[ans.length - 2];
      ans.push(element);
    }
  }
  const sum = ans.reduce((acc, add) => acc + add, 0);
  return sum;
};
