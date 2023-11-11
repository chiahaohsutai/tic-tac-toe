
'use client'
import { useState } from "react";

function Square({ onClick, value }) {
  return (
    <button onClick={onClick} className="square">{value}</button>
  );
};

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXisNext] = useState(true)

  function handleClick(idx) {
    if (board[idx] || calculateWinner(board)) {
      return;
    }

    const newBoard = board.slice()
    newBoard[idx] = xIsNext ? 'X' : 'O';
    setBoard(newBoard)
    setXisNext(!xIsNext)
  }
  const nextPlayer = xIsNext ? 'X' : 'O';

  return (
    <>
      <div className="m-12 w-[110px]">
        <div className="my-2">Next Player: {nextPlayer}</div>
        <div>
          <Square onClick={() => handleClick(0)} value={board[0]} />
          <Square onClick={() => handleClick(1)} value={board[1]} />
          <Square onClick={() => handleClick(2)} value={board[2]} />
        </div>
        <div>
          <Square onClick={() => handleClick(3)} value={board[3]} />
          <Square onClick={() => handleClick(4)} value={board[4]} />
          <Square onClick={() => handleClick(5)} value={board[5]} />
        </div>
        <div>
          <Square onClick={() => handleClick(6)} value={board[6]} />
          <Square onClick={() => handleClick(7)} value={board[7]} />
          <Square onClick={() => handleClick(8)} value={board[8]} />
        </div>
      </div>
    </>
  )
}

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    };
  };

  return null;
}
