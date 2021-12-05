// import React, { useEffect, useState } from "react";
import './styles/reset.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { isLoginHandler, isShowLoginModalHandler, isShowSignUpModalHandler } from './redux/actions/actions'
import LoadingIndicator from './components/Loading/LoadingIndicator'
import NavBar from "./components/NavBar/NavBar"

import OotdListPage from "./pages/OotdPage/OotdListPage"
// import {SolidHeart} from "./components/SvgIcon/SvgIcon"
import Login from "./components/Modal/Login"
import Signup from "./components/Modal/Signup"
import LandingPage from './pages/LandingPage/LandingPage';
import LandingPageSub from './pages/LandingPage/LandingPageSub';
import SideBar from './components/SideBar/SideBar'
import {SolidHeart} from "./components/SvgIcon/SvgIcon"
// import RecordPage from './pages/RecordPage/RecordPage';
import MyPage from './pages/MyPage/MyPage'
import { isShowLoginModalHandler } from './redux/actions/actions';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import LandingPageSub from './pages/LandingPage/LandingPageSub';
require('dotenv').config();

const TemBtn = styled.button`
  background-color: black;
  width: 10rem;
  height: 5rem;
  margin-top:10rem;
  margin-left:3rem;
  color: #FFF;
  font-size: 3rem;
  
  `;
const TemDiv =styled.div`
  background-color: black;
  width: 100rem;
  height: 5rem;
  margin-top:30rem;
  margin-left:10rem;
  color: #FFF;
  font-size: 3rem;
`;

function App() {
  const {isLogin, accessToken} = useSelector(state => state.isLoginReducer)
  // console.log(isLogin, accessToken)
  // console.log("dotenv", process.env.REACT_APP_API_KEY )
  const {
    isShowLoginModal, 
    isShowSignUpModal 
  } = useSelector(state => state.isShowModalReducer);
  const dispatch = useDispatch();
  const endpoint = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBHHlX-kIlXjfcPEHxorJT-cCNzpXb7-4c";

  const tempLoginHandler =() => {
    dispatch(isShowLoginModalHandler(true))
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <SideBar />
        {/* <UserInfo/> */}
        <Switch>
          {/* <Route exact path = '/'><LandingPage /></Route> */}
          <Route exact path = '/'><MyPage/></Route>
          <Route exact path = '/ootd-list'><OotdListPage /></Route>
        </Switch>
        {/* <RecordPage /> */}
        {/* <LandingPageSub /> */}
        <TemBtn onClick={tempLoginHandler}>로그인</TemBtn>
        {
          isLogin 
            ? <TemDiv>{accessToken}</TemDiv>
            :null
        }
        { 
          isShowLoginModal ? <Login /> 
          : isShowSignUpModal ? <Signup /> 
          : null 
        }
      </div>
    </BrowserRouter>
  );
}



export default App;
