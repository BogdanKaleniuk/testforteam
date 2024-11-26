import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/game">
        <button>Go to Game</button>
      </Link>
      <Link to="/search">
        <button>Go to Search</button>
      </Link>
      <Link to="/check">
        <button>Go to Check</button>
      </Link>
      <Link to="/render">
        <button>Go to Check</button>
      </Link>
      <Link to="/tasks">
        <button>Go to Tasks</button>
      </Link>
      <Link to="/todo">
        <button>Go to Todo</button>
      </Link>
    </div>
  );
}

export default Home;
