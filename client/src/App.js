import React, { useEffect, useState } from "react";
import './styles/reset.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
