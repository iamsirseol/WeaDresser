// import React, { useEffect, useState } from "react";
import './styles/reset.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { isLoginHandler, isShowLoginModalHandler, isShowSignUpModalHandler } from './redux/actions/actions'
import LoadingIndicator from './components/Loading/LoadingIndicator'
import NavBar from "./components/NavBar/NavBar"
import { getGoogleUserInfo, getKakaoAccToken } from './api/social'
import OotdListPage from "./pages/OotdPage/OotdListPage"
// import {SolidHeart} from "./components/SvgIcon/SvgIcon"
// import {SideBar} from './components/SideBar/SideBar'
import Login from "./components/Modal/Login"
import Signup from "./components/Modal/Signup"
import LandingPage from './pages/LandingPage/LandingPage';
import { isShowLoginModalHandler, loginSuccessHandler } from './redux/actions/actions';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
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
  width: 100%;
  height: 5rem;
  margin-top:30rem;
  margin-left:10rem;
  color: #FFF;
  font-size: 2rem;
`;

function App() {
  const { isLogin, accessToken } = useSelector(state => state.isLoginReducer)
  const { isShowLoginModal, isShowSignUpModal 
  } = useSelector(state => state.isShowModalReducer);
  const dispatch = useDispatch();
  const [ socialDone, setSocialDone ] = useState(false);


  const tempLoginHandler =() => {
    dispatch(isShowLoginModalHandler(true))
  }
  const googleTokenHandler = async (goolgeAccToken) => {
    const googleUser = await getGoogleUserInfo({accessToken : goolgeAccToken});
    const { name, email } = googleUser.data
    axios.post("http://localhost:80/oauth/google", 
      { email, userName : name }, 
      { withCredentials : true }
    )
    .then(loginResult => {
      dispatch(loginSuccessHandler(true, loginResult.data.accessToken));
      setSocialDone(true);
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  const kakaoTokenHandler = async (kakaoCode) => {
    // console.log(kakaoCode)
    const kakaToken = await getKakaoAccToken(kakaoCode);
    const { accessToken } = kakaToken
    axios.post(
      "http://localhost:80/oauth/kakao",
      { accessToken },
      { withCredentials : true }
    )
    .then(loginResult => {
      console.log(loginResult)
      dispatch(loginSuccessHandler(true, loginResult.data.accessToken));
      setSocialDone(true);
    })
    .catch(err=> {
      //err handle
      console.log(err.response);
    })
  }

  useEffect(()=>{
    if(!socialDone){
      // google token on redirect para
      // kakao code on redirect para
      const url = new URL(window.location.href)
      const googleAccToken = url.hash.split("=")[1]
      const kakaoCode = url.searchParams.get("code")

      // google and kakao 로긴 유저 
      if(googleAccToken) googleTokenHandler(googleAccToken);
      if(kakaoCode) kakaoTokenHandler(kakaoCode);
      
    }
    return () => {//clear effect
      setSocialDone(true)
    }// dependency for not changing
  },[socialDone])


  return (
    <div className="App">
      {/* <LoadingIndicator /> */}
      {/* <LandingPage /> */}
      {/* <LandingPageSub /> */}
      {/* <NavBar /> */}
      {/* <SideBar/> */}
      {/* <OotdListPage/> */}
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
  );
}



export default App;