import React, { useEffect, useState } from "react";
import './styles/reset.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/NavBar/NavBar"
import OotdListPage from "./pages/OotdPage/OotdListPage"
import {SolidHeart} from "./components/SvgIcon/SvgIcon"

function App() {
  return (
    <div className="App">
      <NavBar />
      <SolidHeart></SolidHeart>
      <OotdListPage /> {/* 지울것 */}
    </div>
  );
}

export default App;
