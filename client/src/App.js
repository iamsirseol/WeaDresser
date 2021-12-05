import React, { useEffect, useState } from "react";
import './styles/reset.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLoginHandler, isShowLoginModalHandler, isShowSignUpModalHandler } from './redux/actions/actions'
import LoadingIndicator from './components/Loading/LoadingIndicator'
import NavBar from "./components/NavBar/NavBar"
import OotdListPage from "./pages/OotdPage/OotdListPage"
import Login from "./components/Modal/Login"
import Signup from "./components/Modal/Signup"
import LandingPage from './pages/LandingPage/LandingPage';
import SideBar from './components/SideBar/SideBar'
import {SolidHeart} from "./components/SvgIcon/SvgIcon"
import RecordPage from './pages/RecordPage/RecordPage';

function App() {
  const isLogin = useSelector(state => state.isLoginReducer.isLogin)
  const {
    isShowLoginModal, 
    isShowSignUpModal 
  } = useSelector(state => state.isShowModalReducer);

  return (
    <div className="App">
      <LoadingIndicator />
      <SideBar />
      <NavBar />
      {/* <OotdListPage /> */}
      <LandingPage />
      {/* <RecordPage /> */}
      {/* <SolidHeart></SolidHeart> */}
      {/* <OotdListPage /> */}
      { 
        isShowLoginModal ? <Login /> 
        : isShowSignUpModal ? <Signup /> 
        : null 
      }
    </div>

  );
}

export default App;
