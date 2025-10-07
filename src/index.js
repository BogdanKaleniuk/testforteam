import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import { Provider } from "react-redux"; // 👈 додай це

import App from "./App";
import store from "./Task3/redux/store";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/testforteam">
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
