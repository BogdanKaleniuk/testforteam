import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  // Рендеримо 10 рядків з 10 квадратами кожен
  const boardRows = [];
  for (let row = 0; row < 10; row++) {
    const squaresRow = [];
    for (let col = 0; col < 10; col++) {
      const index = row * 10 + col;
      squaresRow.push(
        <Square
          key={index}
          value={squares[index]}
          onSquareClick={() => handleClick(index)}
        />
      );
    }
    boardRows.push(
      <div key={row} className="board-row">
        {squaresRow}
      </div>
    );
  }

  return (
    <>
      <div className="status">{status}</div>
      {boardRows}
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(100).fill(null)]); // Поле 10x10 - 100 елементів
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

// Функція для перевірки переможця
function calculateWinner(squares) {
  const size = 10; // Розмір поля 10x10
  const lines = [];

  // Перевіряємо всі горизонталі, вертикалі і діагоналі
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size - 4; col++) {
      // Горизонталі
      lines.push([
        row * size + col,
        row * size + col + 1,
        row * size + col + 2,
        row * size + col + 3,
        row * size + col + 4,
      ]);
    }
  }

  for (let col = 0; col < size; col++) {
    for (let row = 0; row < size - 4; row++) {
      // Вертикалі
      lines.push([
        row * size + col,
        (row + 1) * size + col,
        (row + 2) * size + col,
        (row + 3) * size + col,
        (row + 4) * size + col,
      ]);
    }
  }

  for (let row = 0; row < size - 4; row++) {
    for (let col = 0; col < size - 4; col++) {
      // Діагоналі зліва направо
      lines.push([
        row * size + col,
        (row + 1) * size + col + 1,
        (row + 2) * size + col + 2,
        (row + 3) * size + col + 3,
        (row + 4) * size + col + 4,
      ]);
      // Діагоналі справа наліво
      lines.push([
        row * size + col + 4,
        (row + 1) * size + col + 3,
        (row + 2) * size + col + 2,
        (row + 3) * size + col + 1,
        (row + 4) * size + col,
      ]);
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d, e] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] === squares[d] &&
      squares[a] === squares[e]
    ) {
      return squares[a];
    }
  }
  return null;
}
