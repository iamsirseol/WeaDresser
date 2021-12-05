import React, { useEffect, useState } from "react";
import './styles/reset.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { isLoginHandler, isShowLoginModalHandler, isShowSignUpModalHandler } from './redux/actions/actions'
// import LoadingIndicator from './components/Loading/LoadingIndicator'
import NavBar from "./components/NavBar/NavBar"
import { getGoogleUserInfo, getKakaoAccToken } from './api/social'
import OotdListPage from "./pages/OotdPage/OotdListPage"
// import {SolidHeart} from "./components/SvgIcon/SvgIcon"
// import {SideBar} from './components/SideBar/SideBar'
// import LandingPage from './pages/LandingPage/LandingPage';
import { isShowLoginModalHandler, loginSuccessHandler } from './redux/actions/actions';
import axios from 'axios';
import Modal from "./components/Modal/slideModal/Modal"
import { TemBtn , TemDiv} from "./components/Modal/slideModal/ModalStyle"
// import LandingPageSub from './pages/LandingPage/LandingPageSub';
require('dotenv').config();


function App() {
  const { isLogin, accessToken } = useSelector(state => state.isLoginReducer)
  console.log(isLogin, accessToken)


  return (
    <div className="App">
      {/* <LoadingIndicator /> */}
      {/* <LandingPage /> */}
      {/* <LandingPageSub /> */}
      <NavBar  />
      {/* <SideBar/> */}
      {/* <OotdListPage/> */}
      {/* <TemBtn onClick={tempLoginHandler}>로그인</TemBtn>
      { isLogin ? <TemDiv>{accessToken}</TemDiv> :null } */}
      <Modal /> 
    </div>
  );
}

export default App;