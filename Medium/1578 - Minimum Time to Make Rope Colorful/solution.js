/**
 * not improved yet
 *
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {
  const getRemovedTimeSum = (times) => {
    let longestTime = times[0];
    let sum = 0;
    times.forEach((time) => {
      if (time > longestTime) {
        longestTime = time;
      }
      sum += time;
    });
    return sum - longestTime;
  };

  let sameColorRemovedTimes = [];
  let removedTime = 0;

  neededTime.forEach((time, index) => {
    const color = colors.charAt(index);
    if (color === colors.charAt(index + 1)) {
      sameColorRemovedTimes.push(time);
    } else {
      if (sameColorRemovedTimes.length) {
        sameColorRemovedTimes.push(time);
        removedTime += getRemovedTimeSum(sameColorRemovedTimes);
        sameColorRemovedTimes = [];
      }
    }
  });
  return removedTime;
};
