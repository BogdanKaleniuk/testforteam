import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Game from "./Board/Game";
import Search from "./Search/Search";
import Home from "./Home";
import Check from "./Check/Check";
import Render from "./Render/Render";
import TaskApp from "./Tasks/Tasks";
import TasksUpp from "./TasksUpp/TasksApp";

export default function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/game"
        element={
          <div>
            <button onClick={() => navigate("/")}>Back</button>
            <Game />
          </div>
        }
      />
      <Route
        path="/search"
        element={
          <div>
            <button onClick={() => navigate("/")}>Back</button>
            <Search />
          </div>
        }
      />
      <Route
        path="/check"
        element={
          <div>
            <button onClick={() => navigate("/")}>Back</button>
            <Check />
          </div>
        }
      />
      <Route
        path="/render"
        element={
          <div>
            <button onClick={() => navigate("/")}>Back</button>
            <Render />
          </div>
        }
      />
      <Route
        path="/tasks"
        element={
          <div>
            <button onClick={() => navigate("/")}>Back</button>
            <TaskApp />
          </div>
        }
      />
      <Route
        path="/todo"
        element={
          <div>
            <button onClick={() => navigate("/")}>Back</button>
            <TasksUpp />
          </div>
        }
      />
    </Routes>
  );
}
