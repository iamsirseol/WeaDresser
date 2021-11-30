import React, { useEffect, useState } from "react";
import './styles/reset.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/NavBar/NavBar"
import Login from "./components/Modal/Login"

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Login />
    </div>
  );
}

export default App;
