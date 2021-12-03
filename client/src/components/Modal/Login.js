import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { 
  getGoogleAccToken, 
  getKakaoCode,
  getGoogleUserInfo, 
  getKakaoAccToken } from '../../api/social'
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
  const [ prohibit , setProhibit ] = useState(false);
  const [ loginInfo, setLoginInfo ] = useState({ email: "", password: "" });
  const [ errorMessage, setErrorMessage ] = useState("");
  const [ active, setActive ] = useState("");
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
    setErrorMessage("");
  };

  // On backSpace key => make isValid = false 
  const handleKeyPress = (e) => {
    if(e.key === 'Backspace') setActive("")
  };
  // validition : email=null, password=Null, and email regx@ 
  const validCheckHandler = () => {
    const { email, password } = loginInfo
    if(!email || !password ){
      setActive("")
      setErrorMessage('이메일 과 패스워드를 입력해 주세요')
    }
    else if(!email.includes('@')){
      setErrorMessage('이메일 형식을 확인해 주세요')
    }
    // if(email && password && email.includes('@')){ 
    else{
    // GET user Access Token from server
    setActive("-active") // button active
      userLoginHandler() // login ajax call
    }
  };
  const userLoginHandler = async () => {
    const{ email, password } = loginInfo
    axios.post(
      'http://localhost:80/users/signin',
      { email, password},
      { withCredentials: true }
    )
    .then(result => {
      dispatch(loginSuccessHandler(true, result.data.accessToken));
      dispatch(isShowLoginModalHandler(false))
      history.push('/')
    })
    .catch(err =>{
      dispatch(loginSuccessHandler(false, ""));
      if(err.response.status === 403){
        setErrorMessage("회원이 아닙니다. 회원 가입을 진행해 주세요")
      }
      else if(err.response.status === 401){
        setErrorMessage("이메일 비밀번호가 일치하지 않습니다.")
      }
      else{
        setErrorMessage("앗! 서버 error가 낫어요!")
      }
    })
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
