import logo from "./logo.svg";
import React, { useRef } from "react";
import "./App.css";
import Home from "./Home";
import { Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <span className="longband"></span>
      <Home />
    </div>
  );
}

export default App;
