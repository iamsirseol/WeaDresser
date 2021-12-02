import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getGoogleAccToken, getKakaoCode } from '../../api/social'
import { isShowLoginModalHandler, isShowSignUpModalHandler } from '../../redux/actions/actions'
// import axios from 'axios';
import { 
  ModalBackdrop, 
  ModalContainer,
  LogoContainer,
  InputContainer,
  LoginError,
  LoginBtnContainer
} from './ModalStyle';

function Login(){
  const [ prohibit , setProhibit ] = useState(false);
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch(); 
  
  // 모달 창 바깥 클릭시 창닫기 
  const modalOffHandler = () => {
    // 바깥쪽 일때만 작동!  
    if(!prohibit) 
    //(모달 창 안쪽 마우스 off => prohibit = false)
      dispatch(isShowLoginModalHandler(false))
  }
  // 모달 창 안쪽 마우스 on => prohibt = true  
  const stayOnHandler = () => {
    setProhibit(true)
  }
  // 모달 창 안쪽 마우스 off => prohibt = false  
  const stayOffHandler = () => {
    setProhibit(false)
  }
  // user loginHandler 
  const userLoginHandler = () => {

  }
  // get google token 
  const googleLoginHandler = () => {
    getGoogleAccToken()
  }
  // get kakao code 
  const kakaoLoginHandler = () => {
    getKakaoCode()
  }

  const userSingupHandler = () => {
    console.log("okokokokokokokokokokok")
    dispatch(isShowSignUpModalHandler(true))
    dispatch(isShowLoginModalHandler(false))
  }

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value.toLowerCase() });
    console.log(key, e.target.value)
    console.log(loginInfo)
    setErrorMessage("");
  };

  const handleKeyPress = (e) => {
    const isValid = loginInfo.email && loginInfo.password;
    if (e.type === "keypress" && e.code === "Enter" && isValid) {
      handleLogin();
    }
  };
  const handleLogin = () => {
    const { email, password } = loginInfo;
  };

  return (
    <>
    <ModalBackdrop onClick={modalOffHandler} >
        <ModalContainer onMouseOver={stayOnHandler} onMouseLeave={stayOffHandler}>
          <LogoContainer><img alter="" src=""/></LogoContainer>
          <InputContainer>
            <input 
              className="login-input"
              type="email"
              placeholder="E-mail"
              onChange={ handleInputValue("email") }
              onKeyPress={ handleKeyPress }
              />
            <input 
              className="login-input"
              type="password"
              placeholder="비밀번호"
              onChange={ handleInputValue("password") }
              onKeyPress={ handleKeyPress }
              />
              <LoginError>{errorMessage}</LoginError>
          </InputContainer>
          <LoginBtnContainer>
            {
              !loginInfo.email || !loginInfo.password
              ? <button onClick={userLoginHandler} className='login-btn'> 로그인</button>
              : <button className='login-btn-active'> 로그인</button>
            }
            <button onClick={kakaoLoginHandler} className='kakao-btn'>Kakao</button>
            <button onClick={googleLoginHandler} className='google-btn'>Google</button>
            <button onClick={userSingupHandler} className='singup-btn'>회원가입</button>
          </LoginBtnContainer>
        </ModalContainer>
    </ModalBackdrop>
    </>
  );
}

export default Login;
