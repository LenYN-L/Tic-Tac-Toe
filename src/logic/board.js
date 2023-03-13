import { WINNER_COMBOS } from "../constants";

export const checkWinner = (boardTeCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardTeCheck[a] &&
      boardTeCheck[a] === boardTeCheck[b] &&
      boardTeCheck[a] === boardTeCheck[c]
    ) {
      return boardTeCheck[a];
    }
  }
  return null;
};

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null);
};
