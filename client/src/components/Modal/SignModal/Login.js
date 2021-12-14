import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useSpring } from 'react-spring'
import { useForm } from "../../../utils/useForm";import Signup from "./Signup";
import title from './title.svg'
import { CloseModalButton } from "./ModalStyle";
import { useLoginApi} from '../../../utils/api/useLoginApi'
import { isShowSignUpModalHandler} from '../../../redux/actions/actions'
import { LoginContainer,LogoContainer,InputContainer,LoginError,LoginBtnContainer } from './LoginStyle';
require('dotenv').config();

function Login({ closeModalByBtn }){
  const dispatch = useDispatch(); 
  const [ active, setActive ] = useState("");
  const { pattern } = useForm();
  const [ loginInfo, setLoginInfo ] = useState({ email: "", password: "" });
  const { isShowLoginModal, isShowSignUpModal } = useSelector(state => state.isShowModalReducer)
  const { getGoogleAccToken, getKakaoCode, handleUserLoginApi, errorMessage, setErrorMessage } = useLoginApi();
  // const history= useHistory();

  // Translate animation (Signin)
  const displayLogin = useSpring({
    transform: isShowLoginModal ? 'translateY(0%)' : 'translateY(100%)',
    opacity : isShowLoginModal ? 1 : 0 
  });
  // Translate animation (Signup)
  const displaySignup = useSpring({
    transform: isShowSignUpModal ? 'translateX(0%)' : 'translateX(100%)', 
    opacity : isShowSignUpModal ? 1 : 0 
  })

  // inputvalue save to the loginInfo States
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value.toLowerCase() });
    setErrorMessage("");
  };
  // On backSpace key => active false 
  const handleKeyPress = (e) => {
    if(e.key === 'Backspace') setActive("")
  };
  // validition : email=null, password=Null, email regx@ 
  const validCheckHandler = () => {
    const { email, password } = loginInfo

    setActive("")
    if(!email){
      setErrorMessage('이메일를 입력해 주세요')
    }
    else if( !pattern.test(email) || !email.includes('@') || !email.includes('.') ){
      setErrorMessage("이메일 형식을 확인해 주세요")
    }
    else if(!password){
      setErrorMessage('비밀번호를 입력해 주세요')
    }
    //! 6자리 이상 으로 교체
    else if(password.length < 3){
      setErrorMessage('3자리 이상 비밀번호를 입력해 주세요')
    }
    else{
      setActive("-active") // button active
      userLoginHandler() // * login ajax call
    }
        
  };

  // * 일반 유저 로그인 done ! 
  const userLoginHandler = async () => {
    const{ email, password } = loginInfo;
    handleUserLoginApi({ email, password})
    //! server uri dotenv 안될때 있음!
  }
  const modalChangeHandler = () => {
    dispatch(isShowSignUpModalHandler(true));
  }
  return (
    <>{ isShowSignUpModal ? 
      <LoginContainer style={displaySignup}>
        <Signup closeModalByBtn={closeModalByBtn}/> 
      </LoginContainer>
      :
      <LoginContainer style={displayLogin}>
        <LogoContainer><img alt="Weadresser" src={title}/></LogoContainer>
        <InputContainer>
          <input 
            className="login-input"
            type="email"
            placeholder="Email"
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
          <button onClick={modalChangeHandler} className='singup-btn'>회원가입</button>
          <button onClick={getKakaoCode} className='kakao-btn'>Kakao</button>
          <button onClick={getGoogleAccToken} className='google-btn'>Google</button>
        </LoginBtnContainer>
        <CloseModalButton onClick={closeModalByBtn}/>
      </LoginContainer>
      }
    </>
  );
}
export default Login;