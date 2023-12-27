/**
 * use array and for loop
 *
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const openSmallBracket = "(";
  const openMediumBracket = "[";
  const openBigBracket = "{";
  const endBracketToOpenBracket = {
    [")"]: openSmallBracket,
    ["]"]: openMediumBracket,
    ["}"]: openBigBracket,
  };
  const allOpenBrackets = [openSmallBracket, openMediumBracket, openBigBracket];

  const openBrackets = [];
  for (let i = 0; i < s.length; i++) {
    const charAtIndex = s.charAt(i);
    if (allOpenBrackets.includes(charAtIndex)) {
      openBrackets.push(charAtIndex);
    } else {
      const lastIndex = openBrackets.length - 1;
      if (openBrackets[lastIndex] !== endBracketToOpenBracket[charAtIndex]) {
        return false;
      } else {
        openBrackets.pop();
      }
    }
  }

  if (openBrackets.length === 0) {
    return true;
  }

  return false;
};
