import React, { useEffect, useState } from "react";
import './styles/reset.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { isLoginHandler, isShowLoginModalHandler, isShowSignUpModalHandler } from './redux/actions/actions'
import LoadingIndicator from './components/Loading/LoadingIndicator'
import NavBar from "./components/NavBar/NavBar"
=======
import { isLoginHandler, isShowLoginModalHandler, isShowSignUpModalHandler } from './redux/actions/actions'
import LoadingIndicator from './components/Loading/LoadingIndicator'
import NavBar from "./components/NavBar/NavBar"

import OotdListPage from "./pages/OotdPage/OotdListPage"
import {SolidHeart} from "./components/SvgIcon/SvgIcon"
import Login from "./components/Modal/Login"
import Signup from "./components/Modal/Signup"
import LandingPage from './pages/LandingPage/LandingPage';
import LandingPageSub from './pages/LandingPage/LandingPageSub';
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82

import OotdListPage from "./pages/OotdPage/OotdListPage"
import {SolidHeart} from "./components/SvgIcon/SvgIcon"
import Login from "./components/Modal/Login"
import Signup from "./components/Modal/Signup"
import LandingPage from './pages/LandingPage/LandingPage';
import LandingPageSub from './pages/LandingPage/LandingPageSub';

>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
function App() {
  const isLogin = useSelector(state => state.isLoginReducer.isLogin)
  const {
    isShowLoginModal, 
    isShowSignUpModal 
  } = useSelector(state => state.isShowModalReducer);

  return (
    <div className="App">
<<<<<<< HEAD
<<<<<<< HEAD
      
=======
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
      <LoadingIndicator />
      {/* <LandingPage />
      <LandingPageSub /> */}
      <NavBar />
      <SolidHeart></SolidHeart>
      <OotdListPage /> {/* 지울것 */}
      { 
        isShowLoginModal ? <Login /> 
        : isShowSignUpModal ? <Signup /> 
        : null 
      }
<<<<<<< HEAD
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
    </div>
  );
}

export default App;
