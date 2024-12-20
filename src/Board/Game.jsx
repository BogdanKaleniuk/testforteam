import { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "./Board";
import "../styles.css";

export default function Game() {
  const [history, setHistory] = useState([Array(100).fill(null)]);
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

  const winner = calculateWinner(currentSquares);
  const gameOver = winner || currentSquares.every((sqr) => sqr);

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button
          onClick={() => jumpTo(move)}
          style={{
            backgroundColor: gameOver && move === 0 ? "green" : "initial",
          }}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="flex flex-row justify-center">
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="ml-5">
        <ol className="text-green-600">{moves}</ol>
      </div>
    </div>
  );
}
