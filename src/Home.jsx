import React from "react";
import { Link } from "react-router-dom";
import { stylesButton } from "./App";

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl text-green-300 font-extrabold mb-2 bg-green-50 hover:blur-sm transition-color duration-300 ease-in-out">
        Welcome to the Home Page
      </h1>

      <Link className="mr-1" to="/game">
        <button className={stylesButton}>Go to Game</button>
      </Link>
      <Link className="mr-1" to="/search">
        <button className={stylesButton}>Go to Search</button>
      </Link>
      <Link className="mr-1" to="/check">
        <button className={stylesButton}>Go to Check</button>
      </Link>
      <Link className="mr-1" to="/render">
        <button className={stylesButton}>Go to Render</button>
      </Link>
      <Link className="mr-1" to="/tasks">
        <button className={stylesButton}>Go to Tasks</button>
      </Link>
      <Link className="mr-1" to="/todo">
        <button className={stylesButton}>Go to Todo</button>
      </Link>
      <Link className="mr-1" to="/searchImage">
        <button className={stylesButton}>Go to searchImage</button>
      </Link>
    </div>
  );
}

export default Home;
