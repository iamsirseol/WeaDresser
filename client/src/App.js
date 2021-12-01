import React, { useEffect, useState } from "react";
import './styles/reset.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLoginHandler, isShowLoginModalHandler, isShowSignUpModalHandler } from './redux/actions/actions'

import NavBar from "./components/NavBar/NavBar"
import Login from "./components/Modal/Login"
import Signup from "./components/Modal/Signup"

// import Signup from "./components/Modal/Signup"
// import {Modal} from './components/Modal/Modal'
import LandingPage from './pages/LandingPage/LandingPage';
import LandingPageSub from './pages/LandingPage/LandingPageSub';


function App() {
  // const isLogin = useSelector(state => state.isLoginReducer.isLogin)
  const { isShowLoginModal } = useSelector(state => state.isShowLoginModalReducer);
  const { isShowSignUpModal } = useSelector(state => state.isShowSignUpModalReducer);

  return (
    <div className="App">
      {/* <LoadingIndicator /> */}
      <LandingPage />
      <LandingPageSub />
      <NavBar />
      { 
        isShowLoginModal ? <Login /> 
        : isShowSignUpModal ? <Signup /> 
        : null 
      }
    </div>
  );
}

export default App;
