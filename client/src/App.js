import React, { useEffect, useState } from "react";
import './styles/reset.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/NavBar/NavBar"
import LandingPage from './pages/LandingPage/LandingPage';
import LandingPageSub from './pages/LandingPage/LandingPageSub';


function App() {
  return (
    <div className="App">
      {/* <LoadingIndicator /> */}
      <LandingPage />
      <LandingPageSub />
      <NavBar />
    </div>
  );
}

export default App;
