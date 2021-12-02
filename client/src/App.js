// import React, { useEffect, useState } from "react";
import './styles/reset.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
// import { isLoginHandler, isShowLoginModalHandler, isShowSignUpModalHandler } from './redux/actions/actions'
import LoadingIndicator from './components/Loading/LoadingIndicator'
import NavBar from "./components/NavBar/NavBar"

// import OotdListPage from "./pages/OotdPage/OotdListPage"
// import {SolidHeart} from "./components/SvgIcon/SvgIcon"
import Login from "./components/Modal/Login"
import Signup from "./components/Modal/Signup"
import LandingPage from './pages/LandingPage/LandingPage';
// import LandingPageSub from './pages/LandingPage/LandingPageSub';
require('dotenv').config();

function App() {
  const {isLogin, accessToken} = useSelector(state => state.isLoginReducer)
  console.log(isLogin, accessToken)
  console.log("dotenv", process.env.REACT_APP_API_KEY )
  const {
    isShowLoginModal, 
    isShowSignUpModal 
  } = useSelector(state => state.isShowModalReducer);
  const endpoint = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBHHlX-kIlXjfcPEHxorJT-cCNzpXb7-4c";


  return (
    <div className="App">
      {/* <LoadingIndicator /> */}
      {/* <LandingPage /> */}
      {/* <LandingPageSub /> */}
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
