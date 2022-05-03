import { useState, useMemo, useEffect } from "react";

const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const emptyBoard = (board) => {
  return board.filter((s) => s == null);
};

const checkGameWin = (board) => {
  for (let i = 0; i < winCondition.length; i++) {
    const [a, b, c] = winCondition[i];

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { boardResult: [a, b, c], result: true, sign: board[a] };
    }
  }

  if (emptyBoard(board).length > 0) {
    return { boardResult: [], result: false, sign: null };
  } else {
    return { boardResult: [], result: "Tie", sign: null };
  }
};

const miniMax = (currentBoard, currentSign, aiSign, playerSign) => {
  const { result, sign } = checkGameWin(currentBoard);

  if (result === true) {
    if (sign === playerSign) {
      return { score: -1 };
    } else {
      return { score: 1 };
    }
  } else if (emptyBoard(currentBoard).length === 0) {
    return { score: 0 };
  }

  const testResult = [];

  for (let i = 0; i < currentBoard.length; i++) {
    if (!currentBoard[i]) {
      const testMove = {};

      testMove.index = i;
      currentBoard[i] = currentSign;

      if (currentSign === aiSign) {
        const result = miniMax(currentBoard, playerSign, aiSign, playerSign);
        testMove.score = result.score;
      } else {
        const result = miniMax(currentBoard, aiSign, aiSign, playerSign);
        testMove.score = result.score;
      }

      currentBoard[i] = null;
      testResult.push(testMove);
    }
  }

  let bestMove = null;

  if (currentSign === aiSign) {
    let bestScore = -Infinity;

    for (let i = 0; i < testResult.length; i++) {
      if (testResult[i].score > bestScore) {
        bestScore = testResult[i].score;
        bestMove = i;
      }
    }
  } else {
    let bestScore = Infinity;

    for (let i = 0; i < testResult.length; i++) {
      if (testResult[i].score < bestScore) {
        bestScore = testResult[i].score;
        bestMove = i;
      }
    }
  }

  return testResult[bestMove];
};

export default function useTicTacToeGame() {
  const [isSinglePlayer, setIsSinglePlayer] = useState(null);
  const [isSelectSignX, setIsSelectSignX] = useState(null);
  const [gameRound, setGameRound] = useState(0);
  const [board, setBoard] = useState([]);
  const [scoreCount, setScoreCont] = useState({ x: 0, o: 0 });
  const [isXplayerTurn, setIsXplayerTurn] = useState(Math.random() < 0.5);
  const [isGameEnd, setIsGameEnd] = useState(false);
  const [winResult, setWinResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isTie, setIsTie] = useState(false);
  const [isXPlayerWin, setIsXPlayerWin] = useState(false);
  const [isOPlayerWin, setIsOPlayerWin] = useState(false);

  const aiMove = (isXplayerTurn) => {
    const currentSign = isXplayerTurn ? "x" : "o";
    const aiSign = isSelectSignX ? "o" : "x";
    const playerSign = isSelectSignX ? "x" : "o";

    let newboard = [...board];
    const nextMove = miniMax(newboard, currentSign, aiSign, playerSign).index;

    if (isXplayerTurn) {
      newboard[nextMove] = "x";
    } else {
      newboard[nextMove] = "o";
    }

    setTimeout(() => {
      setBoard(newboard);
    }, 1000);
  };

  const resetBoard = () => {
    setGameRound(1);
    setBoard([null, null, null, null, null, null, null, null, null]);
    setIsXplayerTurn(Math.random() < 0.5);
    setIsGameEnd(false);
    setWinResult([]);
    setIsTie(false);
    setIsXPlayerWin(false);
    setIsOPlayerWin(false);
  };

  useEffect(() => {
    const nextMove = () => {
      if (gameRound > 0) {
        setIsLoading(true);
        const { boardResult, result, sign } = checkGameWin(board);

        if (result) {
          setIsGameEnd(true);
          setWinResult(boardResult);

          setTimeout(() => {
            if (result === "Tie") {
              setIsTie(true);
            } else if (result === true) {
              if (sign === "x") {
                setScoreCont({ ...scoreCount, x: 1 + scoreCount["x"] });
                setIsXPlayerWin(true);
              } else if (sign === "o") {
                setScoreCont({ ...scoreCount, o: 1 + scoreCount["o"] });
                setIsOPlayerWin(true);
              }
            }
          }, 1000);

          setTimeout(() => {
            resetBoard();
          }, 3000);
          return;
        }

        const nextXplayerTurn = !isXplayerTurn;

        if (isSinglePlayer && nextXplayerTurn !== isSelectSignX) {
          setTimeout(() => {
            aiMove(nextXplayerTurn);
          }, 100)
        }

        setIsXplayerTurn(!isXplayerTurn);
        setIsLoading(false);
      }
    };

    nextMove();
  }, [board]);

  const handleSelectUser = (player) => {
    setIsSinglePlayer(player);
  };

  const handleSelectSign = (sign) => {
    setIsSelectSignX(sign);
    setGameRound(1);
    setBoard([null, null, null, null, null, null, null, null, null]);
  };

  const handleReturnSelectUsePage = () => {
    setIsSinglePlayer(null);
  };

  const handleSelectBoard = (index) => {
    if (isSinglePlayer && isSelectSignX !== isXplayerTurn) {
      return;
    }

    setIsLoading(true);
    let newboard = [...board];

    if (isXplayerTurn) {
      newboard[index] = "x";
    } else {
      newboard[index] = "o";
    }

    setBoard(newboard);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleResetGame = () => {
    setIsSinglePlayer(null);
    setIsSelectSignX(null)
    setGameRound(0);
    setBoard([null, null, null, null, null, null, null, null, null]);
    setScoreCont({ x: 0, o: 0 })
    setIsXplayerTurn(Math.random() < 0.5);
    setIsGameEnd(false);
    setWinResult([]);
    setIsLoading(false);
    setIsTie(false);
    setIsXPlayerWin(false);
    setIsOPlayerWin(false);
  }

  const isAiTurn = useMemo(() => {
    return isSinglePlayer &&  isXplayerTurn !== isSelectSignX
  }, [isSinglePlayer, isXplayerTurn, isSelectSignX])


  return {
    board,
    winResult,
    isLoading,
    isGameEnd,
    isSinglePlayer,
    isSelectSignX,
    isXplayerTurn,
    isAiTurn,
    gameRound,
    isTie,
    scoreCount,
    isXPlayerWin,
    isOPlayerWin,
    handleSelectUser,
    handleSelectSign,
    handleReturnSelectUsePage,
    handleSelectBoard,
    handleResetGame
  };
}
