/**
 * use forEach loop
 *
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1, player2) {
  const calculateScore = (playerScores) => {
    let tenHitIndex = -1;
    let playerScore = 0;
    playerScores.forEach((score, index) => {
      if (tenHitIndex !== -1 && index - tenHitIndex < 3) {
        playerScore += score * 2;
      } else {
        playerScore += score;
      }

      if (score === 10) {
        tenHitIndex = index;
      }
    });
    return playerScore;
  };

  const player1Score = calculateScore(player1);
  const player2Score = calculateScore(player2);

  if (player1Score === player2Score) {
    return 0;
  } else if (player1Score > player2Score) {
    return 1;
  }

  return 2;
};
