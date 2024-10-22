import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/testforteam/game">
        <button>Go to Game</button>
      </Link>
      <Link to="/testforteam/search">
        <button>Go to Search</button>
      </Link>
    </div>
  );
}

export default Home;
