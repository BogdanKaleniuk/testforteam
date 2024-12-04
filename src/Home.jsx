import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 className="text-4xl text-green-400">Welcome to the Home Page</h1>

      <Link to="/game">
        <button class="cursor-pointer list-none mb-1.5 rounded-lg border-2 border-gray-500">
          Go to Game
        </button>
      </Link>
      <Link to="/search">
        <button class="cursor-pointer list-none mb-1.5 rounded-lg border-2 border-gray-500">
          Go to Search
        </button>
      </Link>
      <Link to="/check">
        <button class="cursor-pointer list-none mb-1.5 rounded-lg border-2 border-gray-500">
          Go to Check
        </button>
      </Link>
      <Link to="/render">
        <button class="cursor-pointer list-none mb-1.5 rounded-lg border-2 border-gray-500">
          Go to Check
        </button>
      </Link>
      <Link to="/tasks">
        <button class="cursor-pointer list-none mb-1.5 rounded-lg border-2 border-gray-500">
          Go to Tasks
        </button>
      </Link>
      <Link to="/todo">
        <button class="cursor-pointer list-none mb-1.5 rounded-lg border-2 border-gray-500">
          Go to Todo
        </button>
      </Link>
    </div>
  );
}

export default Home;
