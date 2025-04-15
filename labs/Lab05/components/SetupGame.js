import React, { useState, useEffect } from "react";

// Main game component
const SetupGame = ({ player1, player2, setWinner, isAI, difficulty }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  useEffect(() => {
    if (isAI && !isXNext) {
      setTimeout(() => makeAIMove(), 300); // Simulate AI delay
    }
  }, [isXNext]);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const winner = calculateWinner(newBoard);
    if (winner) {
      setWinner(winner === "X" ? player1 : player2);
    } else if (!newBoard.includes(null)) {
      setWinner("Draw");
    }
  };

  const makeAIMove = () => {
    const availableMoves = board
      .map((val, index) => (val === null ? index : null))
      .filter((val) => val !== null);
  
    let move;
  
    if (difficulty === "easy") {
      // Always random
      move = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    } else if (difficulty === "medium") {
      // 70% smart, 30% random
      const shouldPlayDumb = Math.random() < 0.3;
      if (shouldPlayDumb) {
        move = availableMoves[Math.floor(Math.random() * availableMoves.length)];
      } else {
        move = findBestMove(board);
      }
    } else {
      // Hard = full Minimax
      move = findBestMove(board);
    }
  
    if (move !== null) {
      handleClick(move);
    }
  };
  
  const findBestMove = (newBoard) => {
    let bestScore = -Infinity;
    let move = null;

    newBoard.forEach((cell, index) => {
      if (cell === null) {
        newBoard[index] = "O";
        const score = minimax(newBoard, 0, false);
        newBoard[index] = null;

        if (score > bestScore) {
          bestScore = score;
          move = index;
        }
      }
    });

    return move;
  };

  const minimax = (board, depth, isMaximizing) => {
    const winner = calculateWinner(board);
    if (winner === "X") return -10 + depth;
    if (winner === "O") return 10 - depth;
    if (!board.includes(null)) return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      board.forEach((cell, index) => {
        if (cell === null) {
          board[index] = "O";
          const score = minimax(board, depth + 1, false);
          board[index] = null;
          bestScore = Math.max(score, bestScore);
        }
      });
      return bestScore;
    } else {
      let bestScore = Infinity;
      board.forEach((cell, index) => {
        if (cell === null) {
          board[index] = "X";
          const score = minimax(board, depth + 1, true);
          board[index] = null;
          bestScore = Math.min(score, bestScore);
        }
      });
      return bestScore;
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const renderSquare = (index) => (
    <button key={index} className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  return (
    <div>
      <h2>{player1} (X) vs {player2} (O)</h2>
      <div className="board">
        {board.map((_, i) => renderSquare(i))}
      </div>
    </div>
  );
};

export default SetupGame;