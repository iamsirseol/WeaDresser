
   
// import React, { useEffect, useState } from "react";
import './styles/reset.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { isLoginHandler, isShowLoginModalHandler, isShowSignUpModalHandler } from './redux/actions/actions'
import LoadingIndicator from './components/Loading/LoadingIndicator'
import NavBar from "./components/NavBar/NavBar"

import OotdListPage from "./pages/OotdPage/OotdListPage"
// import {SolidHeart} from "./components/SvgIcon/SvgIcon"
// import Login from "./components/Modal/slideModal/Login"
// import Signup from "./components/Modal/slideModal/Signup"
import LandingPage from './pages/LandingPage/LandingPage';
import SideBar from './components/SideBar/SideBar'
import {SolidHeart} from "./components/SvgIcon/SvgIcon"
import Modal from "./components/Modal/SignModal/Modal"
// import RecordPage from './pages/RecordPage/RecordPage';
import MyPage from './pages/MyPage/MyPage'
import { isLoadingHandler, loginSuccessHandler } from './redux/actions/actions';
// import styled from 'styled-components';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import RecordPage from './pages/RecordPage/RecordPage';
import DiaryPage from './pages/MyPage/DiaryPage';
import Footer from './components/Footer/Footer'
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { getWeatherData, getLocationData, tempLoadingHandler } from './redux/actions/actions'
import { useLoading } from './useLoading'
import { LoginContainer } from './components/Modal/SignModal/LoginStyle';
require('dotenv').config();

function App() {
  const { tempLoading, logoutHandler } = useLoading();
  // console.log("App rendering with ", tempLoading )

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar logoutHandler={logoutHandler}/>
        <SideBar />
        {/* <LoadingIndicator/> */}
        {/* <UserInfo/> */}
        <Switch>
          <Route exact path = '/'><LandingPage /></Route>
          <Route path = '/mypage'><MyPage /></Route>
          <Route path = '/ootd-list'>{tempLoading ? <OotdListPage/> : <LoadingIndicator/>}</Route>
          <Route path = '/record'><RecordPage /></Route>
        </Switch>
        <Modal/>
        {/* <DiaryPage /> */}
      </div>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;