/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let ops = 0;
  let regex = /[a-z0-9]/;
  for (let log of logs) {
    if (log.startsWith("../") && ops > 0) {
      ops--;
    } else if (regex.test(log)) {
      ops++;
    }
  }

  return ops;
};
