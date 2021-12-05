import { useDispatch, useSelector } from 'react-redux';
import { 
  isShowLoginModalHandler, 
  isShowSignUpModalHandler, 
  loginSuccessHandler,
  createUserHandler 
} 
from '../../../redux/actions/actions'
import { useState } from 'react';
import title from './title.svg'
import { 
  LogoContainer,
  InputBtnContainer,
  BtnContainer,
  InputContainer,
  LoginError,
  BackButton, 
  SignupContainer,
} from './SignupStyle';
import { CloseModalButton } from './ModalStyle';
import { useSpring } from '@react-spring/core';

function Signup({ closeModalByBtn }){
  const [ signupInfo, setSignupInfo ] = useState({ 
    email : "", code : "" , 
    password1 : "", password2 : "" 
  })
  const [ errorMessage, setErrorMessage ] = useState("");
  const [ isValid, setIsValid ] = useState([false, false]);
  const { isShowLoginModal, isShowSignUpModal } = useSelector(state => state.isShowModalReducer)
  const dispatch = useDispatch(); 


  const backModalHandler = () => {
    dispatch(isShowLoginModalHandler(true));
    dispatch(isShowSignUpModalHandler(false));
  }
  const handleInputValue = (key) => (e) => {
    setSignupInfo({ ...signupInfo, [key]: e.target.value.toLowerCase() });
    setErrorMessage("");
  }

  const emailCheckHandler = () => {
    const { email } = signupInfo
    if(!email || !email.includes("@")){
      setErrorMessage('이메일을 다시 작성해주세요')
    }
    else{
      setErrorMessage('사용 가능한 이메일 입니다.')
      setIsValid([true, isValid[1]])
    }
  }

  const submitHandler = () => {
    const { email, password1, password2 } = signupInfo;
    if(password1 !== password2){
      setErrorMessage('비밀 번호를 다시 확인 하세요')
    }
    else{
      const endpoint = '/users/signup'
      const reqBody = {
        email, 
        password : password1,
        userName : "testUser", 
        gender : 'male', 
        social : true  
      }
      dispatch(createUserHandler( endpoint, reqBody ))
    
    }
  }
  return (
    <>
      <CloseModalButton onClick={closeModalByBtn}/>
      <LogoContainer><img alter="" src={title}/></LogoContainer>
      <InputBtnContainer>
        <InputContainer>
          <input 
            className="signup-input"
            type="email"
            placeholder="Email"
            onChange={ handleInputValue("email") }
            // onKeyUp={ handleKeyPress }
            />
        </InputContainer>
        <BtnContainer onClick={emailCheckHandler}>
          <button onClick={emailCheckHandler}>중복체크</button>
          </BtnContainer>
      </InputBtnContainer>
      <InputBtnContainer>
        <InputContainer>
          <input 
            className="signup-input"
            type="email"
            placeholder="Code"
            onChange={ handleInputValue("code") }
            // onKeyUp={ handleKeyPress }
            />
        </InputContainer>
        <BtnContainer><button>코드전송</button></BtnContainer>
      </InputBtnContainer>
      <LoginError>{errorMessage}</LoginError>
      <BackButton onClick={backModalHandler}/>
        { !isValid[0] && !isValid[1] ? null :
        <>
        <InputContainer>
          <input 
            className="signup-input"
            type="password"
            placeholder="비밀번호1"
            onChange={ handleInputValue("password1") }
            />
        </InputContainer>
        <InputContainer>
          <input 
            className="signup-input"
            type="password"
            placeholder="비밀번호2"
            onChange={ handleInputValue("password2") }
            />
        </InputContainer>
        <BtnContainer><button onClick={submitHandler}>회원가입</button></BtnContainer>
        </>
        }    
    </>
  );
}

export default Signup;
