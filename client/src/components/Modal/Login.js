import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getGoogleAccToken, getKakaoCode, getUserAccToken } from '../../api/social'
import { 
  isShowLoginModalHandler, 
  isShowSignUpModalHandler,
  loginSuccessHandler 
} from '../../redux/actions/actions'
import { 
  ModalBackdrop, 
  ModalContainer,
  LogoContainer,
  InputContainer,
  LoginError,
  LoginBtnContainer
} from './ModalStyle';

function Login(){
  // const [ isValid, setIsValid ] = useState(false);
  const [ prohibit , setProhibit ] = useState(false);
  const [ loginInfo, setLoginInfo ] = useState({ email: "", password: "" });
  const [ errorMessage, setErrorMessage ] = useState("");
  const [ active, setActive ] = useState("");
  // const history = useHistory();
  const history= useHistory();
  const dispatch = useDispatch(); 

  // 모달 창 바깥 클릭시 창닫기 
  const modalOffHandler = () => {
    if(!prohibit) // 바깥쪽 일때만 작동!  
    dispatch(isShowLoginModalHandler(false))
    //(모달 창 안쪽 마우스 off => prohibit = false)
  }
  // 모달 창 안쪽 마우스 on => prohibt = true  
  const stayOnHandler = () => {
    setProhibit(true)
  }
  // 모달 창 안쪽 마우스 off => prohibt = false  
  const stayOffHandler = () => {
    setProhibit(false)
  }
  // modal 창 닫기 handler 
  const userSingupHandler = () => {
    dispatch(isShowSignUpModalHandler(true))
    dispatch(isShowLoginModalHandler(false))
  }

  // inputvalue Save to the loginInfo States
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value.toLowerCase() });
    // console.log(key, e.target.value)
    setErrorMessage("");
  };

  // On backSpace key => make isValid = false 
  const handleKeyPress = (e) => {
    if(e.key === 'Backspace'){
      // setIsValid(true);
      setActive("")
    }
  };
  // validition : email=null, password=Null, and email regx@ 
  const validCheckHandler = () => {
    const { email, password } = loginInfo
    if(!email || !password || !email.includes('@') ){
      // setIsValid(false);
      setActive("")
      setErrorMessage('이메일 과 패스워드를 다시 확인해 주세요')
    }
    // GET user Access Token from server
    if(email && password && email.includes('@')){
      // setIsValid(true)
      setActive("-active")
      userLoginHandler()

    }
  };
  const userLoginHandler = async () => {
    const {isSuccess, accessToken } = await getUserAccToken(loginInfo);
    if(!isSuccess){
      //error handle message 
      console.log("user login failed from server");
      return 
    }
    dispatch(loginSuccessHandler(true, accessToken));
    dispatch(isShowLoginModalHandler(false))
    history.push('/')
  }
  const googleLoginHandler = () => {
    getGoogleAccToken()
  }
  const kakaoLoginHandler = () => {
    getKakaoCode()
  }

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
              onKeyUp={ handleKeyPress }
              />
            <input 
              className="login-input"
              type="password"
              placeholder="비밀번호"
              onChange={ handleInputValue("password") }
              onKeyUp={ handleKeyPress }
              />
              <LoginError>{errorMessage}</LoginError>
          </InputContainer>
          <LoginBtnContainer>
            <button onClick={validCheckHandler}  className={`login-btn${active}`}> 로그인</button>
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
