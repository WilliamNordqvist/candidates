import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./pages/App/App";
import { Add } from "./pages/Add/Add";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContextProvider } from "./context/themeContext";
import { CandidateContextProvider } from "./context/candidateContext";
import { Background } from "./components/background/background";
import { Candidate } from "./pages/Candidate/Candidate";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CandidateContextProvider>
        <ThemeContextProvider>
          <Background>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="add" element={<Add />} />
              <Route path="/:id" element={<Candidate />} />
            </Routes>
          </Background>
        </ThemeContextProvider>
      </CandidateContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
