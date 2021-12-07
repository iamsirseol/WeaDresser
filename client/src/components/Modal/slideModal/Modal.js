import React,{ useCallback, useRef, useState, useEffect } from "react";
import { useSpring } from 'react-spring'
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login'
import Signup from "./Signup";
import { getGoogleUserInfo, getKakaoAccToken } from '../../../api/social'
import axios from 'axios'
import { isShowLoginModalHandler, loginSuccessHandler } 
from '../../../redux/actions/actions'
import { 
  ModalBackdrop, 
  ModalContainer,
  CloseModalButton,
} from './ModalStyle'

const Modal = () => {
  const { isShowLoginModal } = useSelector(state => state.isShowModalReducer)
  const [ isSingupModal, setIsSingupModal ] = useState(false);
  const [ socialDone, setSocialDone ] = useState(false);
  const dispatch = useDispatch();
  const  modalRef = useRef();

  // Translate animation by useSpring 
  const props = useSpring({
    transform: isShowLoginModal ? 'translateY(0%)' : 'translateY(100%)',
    opacity : isShowLoginModal ? 1 : 0 
  });

  // Modal False by clx btn 
  const closeModalByBtn = e => {
    dispatch(isShowLoginModalHandler(false))
  }
  // Modal False by backDrop <- useRef only 
  const closeModalHandler = e => {
    if(modalRef.current === e.target){
      dispatch(isShowLoginModalHandler(false))
    }
  }
  // Modal False by Esc key <- useEffect only!! 
  const closeKeyPress = useCallback( e => {
    if(e.key === 'Escape' && isShowLoginModal){
      dispatch(isShowLoginModalHandler(false))
    }
  }, [isShowLoginModalHandler, isShowLoginModal])

  // Component change 
  const modalChangeHandler  =() => {
    setIsSingupModal(!isSingupModal)
  }
  // useEffect to set keydown event 
  useEffect( ()=> {
    document.addEventListener('keydown', closeKeyPress);
    return () => document.removeEventListener('keydown', closeKeyPress)
  }, [closeKeyPress])

  // moved by App.js
  // request to get google user info & accessToken (우리서버)
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
  
  // request to get kakao user info & accessToken (우리서버)
  const kakaoTokenHandler = async (kakaoCode) => {
    const kakaToken = await getKakaoAccToken(kakaoCode);
    const { accessToken } = kakaToken
    axios.post(
      `http://localhost:80/oauth/kakao`,
      { accessToken },
      { withCredentials : true }
    )
    .then(loginResult => {
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
      // To check redirect para from social user 
      const url = new URL(window.location.href)
      const googleAccToken = url.hash.split("=")[1]
      const kakaoCode = url.searchParams.get("code")

      // get social users token and info (only if appropriate para in url)  
      if(googleAccToken) googleTokenHandler(googleAccToken);
      if(kakaoCode) kakaoTokenHandler(kakaoCode);
      
    }
    return () => {//clear effect
      setSocialDone(true)
    }// dependency for not changing
  },[socialDone]) 
  // moved by App.js

  return (
    <>{ !isShowLoginModal ? null : 
      <ModalBackdrop ref={modalRef} onClick={closeModalHandler}>
          <ModalContainer style={props}>
            { isSingupModal 
              ? <Signup
                  isSingupModal={isSingupModal}
                  modalChangeHandler={modalChangeHandler} 
                /> 
              : <Login 
                  isSingupModal={isSingupModal} 
                  modalChangeHandler = {modalChangeHandler}/>
            }
            <CloseModalButton onClick={closeModalByBtn}/>
          </ModalContainer>
       </ModalBackdrop>
      }
    </>
  )
};

export default Modal