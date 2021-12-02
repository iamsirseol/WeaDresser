import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getGoogleAccToken, getKakaoCode } from '../../api/social'
import { isShowLoginModalHandler, isShowSignUpModalHandler } from '../../redux/actions/actions'
import axios from 'axios';
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
  const [ loginInfo, setLoginInfo ] = useState({ email: "", password: "" });
  const [ errorMessage, setErrorMessage ] = useState("");
  const [ isValid, setIsValid ] = useState(false);
  const [ active, setActive ] = useState("");
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
  // get google token 
  const googleLoginHandler = () => {
    getGoogleAccToken()
  }
  // get kakao code 
  const kakaoLoginHandler = () => {
    getKakaoCode()
  }

  const userSingupHandler = () => {
    dispatch(isShowSignUpModalHandler(true))
    dispatch(isShowLoginModalHandler(false))
  }

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value.toLowerCase() });
    // console.log(key, e.target.value)
    setErrorMessage("");
  };

  const handleKeyPress = (e) => {
    if(e.key === 'Backspace'){
      setIsValid(true);
      setActive("")
    }
  };
  const userLoginHandler = () => {

    const { email, password } = loginInfo;
    axios.post(
      'http://localhost:80/users/signin',
      { email, password},
      { withCredentials: true }
    )
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })

  };
  const validCheckHandler = () => {
    const { email, password } = loginInfo
    // console.log(email)
    if(!email || !password || !email.includes('@') ){
      setIsValid(false);
      setActive("")
      setErrorMessage('이메일 과 패스워드를 다시 확인해 주세요')
    }
    if(email && password && email.includes('@')){
      setIsValid(true)
      setActive("-active")
      userLoginHandler()
    }
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
