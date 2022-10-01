/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let num = 0;
  let dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let charCanBeMinus = {
    C: ["M", "D"],
    X: ["C", "L"],
    I: ["V", "X"],
  };
  for (let index = 0; index < s.length; index++) {
    if (
      s[index] in charCanBeMinus &&
      index < s.length - 1 &&
      charCanBeMinus[s[index]].includes(s[index + 1])
    ) {
      num += dict[s[index + 1]] - dict[s[index]];
      index += 1;
    } else {
      num += dict[s[index]];
    }
  }
  return num;
};
