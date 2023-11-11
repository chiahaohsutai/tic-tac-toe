
'use client'
import { useState } from "react";

function Square({ handler, value }) {
  return (
    <button onClick={handler} className="square">{value}</button>
  );
};

function Reset({ handler }) {
  return (
    <button 
    onClick={handler} 
    className="border-solid border-[1px] rounded-md px-4 border-[#999] hover:opacity-70 active:opacity-60"
    >
      Reset
    </button>
  )
}

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
  let status;
  let winner = calculateWinner(board);
  if (!winner) {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  } else {
    status = `Winner: ${winner}`;
  }


  function handleReset() {
    setBoard(Array(9).fill(null))
    setXisNext(!xIsNext)
  }

  return (
    <main className="m-12">
      <div className="my-2">{status}</div>
      <div className="game-board">
        <div>
          <Square handler={() => handleClick(0)} value={board[0]} />
          <Square handler={() => handleClick(1)} value={board[1]} />
          <Square handler={() => handleClick(2)} value={board[2]} />
        </div>
        <div>
          <Square handler={() => handleClick(3)} value={board[3]} />
          <Square handler={() => handleClick(4)} value={board[4]} />
          <Square handler={() => handleClick(5)} value={board[5]} />
        </div>
        <div>
          <Square handler={() => handleClick(6)} value={board[6]} />
          <Square handler={() => handleClick(7)} value={board[7]} />
          <Square handler={() => handleClick(8)} value={board[8]} />
        </div>
      </div>
      <div className="mt-2">
        <Reset handler={handleReset} />
      </div>
    </main>
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
