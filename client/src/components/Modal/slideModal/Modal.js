import React,{ useCallback, useRef, useEffect } from "react";
import { useSpring } from 'react-spring'
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login'
import { isShowLoginModalHandler, isShowSignUpModalHandler } from '../../../redux/actions/actions'
import { ModalBackdrop } from './ModalStyle'
import { useHistory } from "react-router";
import { useLoginApi} from '../../../utils/api/useLoginApi'
require('dotenv').config()

const Modal = ({ setGoHomeNow }) => {
  const { isShowLoginModal } = useSelector(state => state.isShowModalReducer)
  const dispatch = useDispatch();
  const  modalRef = useRef();
  const { 
    socialDone, setSocialDone, 
    getKakaoAccToken, handleKakaoLoginApi, 
    getGoogleUserInfo, handleGoogleLoginApi,
  } = useLoginApi();
  const history = useHistory();
  // Translate animation by useSpring 
  const props = useSpring({
    transform: isShowLoginModal ? 'translateY(0%)' : 'translateY(100%)',
    opacity : isShowLoginModal ? 1 : 0 
  });

  // Modal False by clx btn 
  const closeModalByBtn = e => {
    dispatch(isShowLoginModalHandler(false))
    dispatch(isShowSignUpModalHandler(false))
  }
  // Modal False by backDrop <- useRef only 
  const closeModalHandler = e => {
    if(modalRef.current === e.target){
      dispatch(isShowLoginModalHandler(false))
      dispatch(isShowSignUpModalHandler(false))
    }
  }
  // Modal False by Esc key <- useCallback only!! 
  const closeKeyPress = useCallback( e => {
    if(e.key === 'Escape' && isShowLoginModal){
      dispatch(isShowLoginModalHandler(false))
    // dispatch(isShowSignUpModalHandler(false))
    }
  }, [dispatch, isShowLoginModal])

  // useEffect to set keydown event 
  useEffect( ()=> {
    document.addEventListener('keydown', closeKeyPress);
    return () => document.removeEventListener('keydown', closeKeyPress)
  }, [closeKeyPress])

  //* 구글 유저 로그인 요청 Done
  const googleTokenHandler = async (goolgeAccToken) => {
    const googleUser = await getGoogleUserInfo({accessToken : goolgeAccToken});
    const { name, email } = googleUser.data
    await handleGoogleLoginApi(email, name)
      
    const redirect = new URL(sessionStorage.getItem('redirect')).pathname
    sessionStorage.removeItem('redirect')
    history.push(redirect)
    // window.location.assign(redirect) // ! coockie 사라짐

  }

  // * 카카오 유저 로그인 요청  Done! 
  const kakaoTokenHandler = async (kakaoCode) => {
    const kakaToken = await getKakaoAccToken(kakaoCode);
    const { accessToken } = kakaToken
    await handleKakaoLoginApi({accessToken})

    const redirect = new URL(sessionStorage.getItem('redirect')).pathname
    sessionStorage.removeItem('redirect')
    history.push(redirect)
    // window.location.assign(redirect) // ! cookie 사라짐
  }
  // useEffect to call API for social login 
  useEffect(()=>{ // only if authen by user from Oauth-website
    if(!socialDone){
      // To check redirect para from social user 
      const url = new URL(window.location.href)
      const googleAccToken = url.hash.split("=")[1]
      const kakaoCode = url.searchParams.get("code")

      // get social users token and info (only if appropriate para in url)  
      if(googleAccToken) googleTokenHandler(googleAccToken);
      if(kakaoCode) kakaoTokenHandler(kakaoCode);
      
    }
    return () => {//!clear effect => warning 존재
      setSocialDone(true)
    }// dependency for not changing
  },[socialDone]) 
  // moved by App.js

  return (
    <>{ !isShowLoginModal ? null : 
      <ModalBackdrop style={props} ref={modalRef} onClick={closeModalHandler}>
        <Login setGoHomeNow = {setGoHomeNow} closeModalByBtn={closeModalByBtn}/>
       </ModalBackdrop>
      }
    </>
  )
};

export default Modal