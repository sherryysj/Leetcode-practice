/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  // solution 1: using hash map by Dictionary
  if (s.length !== t.length) {
    return false;
  }
  const charMap = {};
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) in charMap) {
      if (t.charAt(i) !== charMap[s.charAt(i)]) {
        return false;
      }
    } else if (Object.values(charMap).includes(t.charAt(i))) {
      return false;
    } else {
      charMap[s.charAt(i)] = t.charAt(i);
    }
  }
  return true;
};
