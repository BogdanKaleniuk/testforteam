import Square from "./Square";
import "../styles.css";

export default function Board({ xIsNext, squares, onPlay }) {
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
  } else if (squares.every((square) => square)) {
    status = "It's a draw!";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

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

export function calculateWinner(squares) {
  const size = 10;
  const lines = [];

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size - 4; col++) {
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
      lines.push([
        row * size + col,
        (row + 1) * size + col + 1,
        (row + 2) * size + col + 2,
        (row + 3) * size + col + 3,
        (row + 4) * size + col + 4,
      ]);
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
