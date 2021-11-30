import React, { useEffect, useState } from "react";
import './styles/reset.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/NavBar/NavBar"
import Login from "./components/Modal/Login"
import Signup from "./components/Modal/Signup"


function App() {
  const [ bool, setBool ] = useState(true)
  const temporalHandler = () => {
    setBool(!bool)
  }
  return (
    <div className="App">
      <NavBar temporalHandler={temporalHandler}/>
      { 
        bool ? <Login /> : <Signup />
      }
    </div>
  );
}

export default App;
