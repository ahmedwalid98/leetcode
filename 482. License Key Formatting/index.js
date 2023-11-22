/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  s = s.replaceAll("-", "");

  let start = s.length % k;

  let group = [];

  if (start) {
    group.push(s.substring(0, start));
  }

  for (let i = start; i < s.length; i += k) {
    group.push(s.substring(i, i + k));
  }

  return group.join("-").toUpperCase();
};
