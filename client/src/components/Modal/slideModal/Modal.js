import React,{ useCallback, useRef, useState, useEffect } from "react";
import { useSpring } from 'react-spring'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import Login from './Login'
import { getGoogleUserInfo, getKakaoAccToken } from '../../../api/social'
import { isShowLoginModalHandler, loginSuccessHandler, isShowSignUpModalHandler } from '../../../redux/actions/actions'
import { ModalBackdrop } from './ModalStyle'
import { useHistory } from "react-router";

const Modal = ({ setGoHomeNow }) => {
  const { isShowLoginModal } = useSelector(state => state.isShowModalReducer)
  const [ socialDone, setSocialDone ] = useState(false);
  const dispatch = useDispatch();
  const  modalRef = useRef();
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
  }, [isShowLoginModalHandler, isShowLoginModal])

  // useEffect to set keydown event 
  useEffect( ()=> {
    document.addEventListener('keydown', closeKeyPress);
    return () => document.removeEventListener('keydown', closeKeyPress)
  }, [closeKeyPress])

  // Get google userinfo & cookie token
  const googleTokenHandler = async (goolgeAccToken) => {
    const googleUser = await getGoogleUserInfo({accessToken : goolgeAccToken});
    const { name, email } = googleUser.data
    // axios.post("http://localhost:80/oauth/google", 
    const SERVER 
      = process.env.REACT_APP_SERVER
      || "http://localhost:80"
      axios.post(`${SERVER}/oauth/google`, 
        { email, userName : name }, 
        { withCredentials : true }
      )
    . then(loginResult => {
        dispatch(loginSuccessHandler(true, loginResult.data.accessToken));
        setSocialDone(true);
        history.push('/');  //! 구글 auth 성공시 back => 다시 구글 로그인 page 
        // home으로 우선 랜더링  
      })
      .catch(err => {
        console.log(err.response);
      })
  }
  // Get kakao userinfo & cookie token
  const kakaoTokenHandler = async (kakaoCode) => {
    const kakaToken = await getKakaoAccToken(kakaoCode);
    const { accessToken } = kakaToken
    const SERVER = process.env.REACT_APP_SERVER 
    // ! 카카오 유저 로그인 요청  
    //! 우리서버 유저 valid 및 우리 토큰 요청 with kakao 토큰 
    // 1. 서버는 카카오 토큰을 받고 카카오 oauth 에 유저 정보를 요청 
    // 2. 해당 유저 정보를 받아와서, 유저 valid (있는지 확인) 
    // => 있으면 id+ email 로 토큰 쿠키 전송 
    // => 없으면 유저 새로 생성 ! 이경우 클라이언트는 로그인 창으로 보냄 
    // 3. 로그인 성공시 처리 상황 
    //  => 서버 : accessToekn 쿠키 전송, (바디로도 전송중) ,  
    //  => 클라이언트 : state 값 변경 
    //    =>  is Login = true,  accessToken = 저장  
    //    => session storage isLogin : true 설정 
    //    => (물론 쿠키에 토큰 존재)
    axios.post(
      `${SERVER}/oauth/kakao`,
      { accessToken }, // 카카오 토큰
      { withCredentials : true }
    )
    .then(loginResult => {
      dispatch(loginSuccessHandler(true, loginResult.data.accessToken));
      setSocialDone(true);
      sessionStorage.setItem('isLogin', 'true')
      history.goBack();
      // Todo : 새로 고침시 주의 사항 + 세션에서 isLogin을 확인 해줘야함 
      // redirect code 주소가 떠있으면 새로고침시 다시 카카오 oauth 요청이 가게 됨 
      // => 이때 kakao 측에서 이미 토큰 발급된 코드로 토큰 요청하기에 invalid 시켜서 404 가나게됨
    
      // Todo : sessionStorage 확인으로 페이지 , 컴포넌트 마다  추가 작업이  필요 있음 
      // [goback 시켜서 redirect 주소가 url에 사라지게 해놓은 상태]
      // login 상태값이 뒤로가기 되서 false 이기 때문에 버튼이 로그아웃으로 바뀌지 않는 상황 
      // 쿠키 와 세션에서는 로그인 확인 가능 한 상황
      // ! 유의 사항 케이스
      // 이런 상황이 계속 발생 할 수 있음 (구글 유저 ) 또는 유저가 로그인 후 바로 뒤로가기 클릭시 
      // state로 isLogin true 확인이 안되서 오류가 뜰 가능성 존재
      // 반대로 로그아웃 하고 뒤로 가기 하면 로그인 상태가 뒬 수 있는 등 
    })
    .catch(err=> {
      //err handle
      console.log(err.response);
    })
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
    return () => {//clear effect
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