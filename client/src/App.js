
   
import React, { useEffect, useState } from "react";
import './styles/reset.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { isLoginHandler, isShowLoginModalHandler, isShowSignUpModalHandler } from './redux/actions/actions'
import LoadingIndicator from './components/Loading/LoadingIndicator'
import NavBar from "./components/NavBar/NavBar"

import OotdListPage from "./pages/OotdPage/OotdListPage"
// import {SolidHeart} from "./components/SvgIcon/SvgIcon"
import LandingPage from './pages/LandingPage/LandingPage';
import SideBar from './components/SideBar/SideBar'
import {SolidHeart} from "./components/SvgIcon/SvgIcon"
import Modal from "./components/Modal/slideModal/Modal"
// import RecordPage from './pages/RecordPage/RecordPage';
import MyPage from './pages/MyPage/MyPage'
import { isShowLoginModalHandler } from './redux/actions/actions';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecordPage from './pages/RecordPage/RecordPage'
require('dotenv').config();

function App() {
  //!Todo : 랜더링시 session 로그인 정보 확인 후 isLogin 값 변경 해주기
  const { isLogin } = useSelector(state => state.isLoginReducer)

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <SideBar />
        {/* <UserInfo/> */}
        <Switch>
          {/* <Route exact path = '/'><LandingPage /></Route> */}
          <Route path = '/mypage'><MyPage/></Route>
          <Route path = '/ootd-list'><OotdListPage /></Route>
          <Route path = '/record'><RecordPage/></Route>
        </Switch>
        <Modal/>
      </div>
    </BrowserRouter>
  );
}

export default App;