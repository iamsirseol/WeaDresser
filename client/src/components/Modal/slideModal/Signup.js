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


function Signup(){
  const [ signupInfo, setSignupInfo ] = useState({ email : "", code : "" })
  const [ errorMessage, setErrorMessage ] = useState("");
  const [ isValid, setIsValid ] = useState([false, false]);

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

        { !isValid[0] && !isValid[1] ? null :
        <>
        <InputContainer>
          <input 
            className="signup-input"
            type="password"
            placeholder="비밀번호1"
            />
        </InputContainer>
        <InputContainer>
          <input 
            className="signup-input"
            type="password"
            placeholder="비밀번호2"
            />
        </InputContainer>
        </>
        }    
      <LoginError>{errorMessage}</LoginError>
    </>
  );
}

export default Signup;
