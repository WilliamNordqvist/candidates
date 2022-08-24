import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./pages/App/App";
import { Add } from "./pages/Add/Add";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
