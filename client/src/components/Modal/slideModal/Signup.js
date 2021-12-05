// import { useDispatch } from 'react-redux';
// import { useSpring, animated } from 'react-spring'
// import { isShowSignUpModalHandler } from '../../../redux/actions/actions'
import title from './title.svg'
import { 
  LogoContainer,
  InputBtnContainer,
  BtnContainer,
  InputContainer,
  LoginError,
} from './SignupStyle';
import { useState } from 'react';
import axios from 'axios'; 
import { useDispatch } from 'react-redux';
import { isShowLoginModalHandler } from '../../../redux/actions/actions'
function Signup(){
  const [ signupInfo, setSignupInfo ] = useState({ 
    email : "", code : "" , 
    password1 : "", password2 : "" 
  })
  const [ errorMessage, setErrorMessage ] = useState("");
  const [ isValid, setIsValid ] = useState([false, false]);
  const [ isSuccess , setIsSuccess ] = useState(false);
  const dispatch = useDispatch(); 
  

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
      axios.post(
        'http://localhost:80/users/signin',
        { email, password1 },
        { withCredentials: true }
      )
      .then(result => {
        // isLogin =true & set the accessToken + page redirection
        setIsSuccess(true);
        dispatch(isShowLoginModalHandler(false));
        // history.push('/')
      })
    
    }
  }
  return (
    <>
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
