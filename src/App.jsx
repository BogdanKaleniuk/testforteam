import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Game from "./Board/Game";
import Search from "./Search/Search";
import Home from "./Home";

export default function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/testforteam" element={<Home />} />
      <Route
        path="/testforteam/game"
        element={
          <div>
            <button onClick={() => navigate("/testforteam")}>Back</button>
            <Game />
          </div>
        }
      />
      <Route
        path="/testforteam/search"
        element={
          <div>
            <button onClick={() => navigate("/testforteam")}>Back</button>
            <Search />
          </div>
        }
      />
    </Routes>
  );
}
