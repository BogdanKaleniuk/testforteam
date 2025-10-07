import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Game from "./Board/Game";
import Search from "./Search/Search";
import Home from "./Home";
import Check from "./Check/Check";
import Render from "./Render/Render";
import TaskApp from "./Tasks/Tasks";
import TasksUpp from "./TasksUpp/TasksApp";
import Task4 from "./Task4/Task4";
import Task3 from "./Task3/Task3";

export const stylesButton =
  "cursor-pointer p-1 list-none mb-1.5 rounded-lg border-2 border-green-500 inline-block hover:text-green-500 transition-color duration-300 ease-in-out";

export default function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/game"
        element={
          <div>
            <button className={stylesButton} onClick={() => navigate("/")}>
              Back
            </button>
            <Game />
          </div>
        }
      />
      <Route
        path="/search"
        element={
          <div>
            <button className={stylesButton} onClick={() => navigate("/")}>
              Back
            </button>
            <Search />
          </div>
        }
      />
      <Route
        path="/check"
        element={
          <div>
            <button className={stylesButton} onClick={() => navigate("/")}>
              Back
            </button>
            <Check />
          </div>
        }
      />
      <Route
        path="/render"
        element={
          <div>
            <button className={stylesButton} onClick={() => navigate("/")}>
              Back
            </button>
            <Render />
          </div>
        }
      />
      <Route
        path="/tasks"
        element={
          <div>
            <button className={stylesButton} onClick={() => navigate("/")}>
              Back
            </button>
            <TaskApp />
          </div>
        }
      />
      <Route
        path="/todo"
        element={
          <div>
            <button className={stylesButton} onClick={() => navigate("/")}>
              Back
            </button>
            <TasksUpp />
          </div>
        }
      />
      <Route
        path="/searchImage"
        element={
          <div>
            <button className={stylesButton} onClick={() => navigate("/")}>
              Back
            </button>
            <Task4 />
          </div>
        }
      />
      <Route
        path="/phoneBook"
        element={
          <div>
            <button className={stylesButton} onClick={() => navigate("/")}>
              Back
            </button>
            <Task3 />
          </div>
        }
      />
    </Routes>
  );
}
