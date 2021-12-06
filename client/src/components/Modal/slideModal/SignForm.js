import { InputContainer, InputContainer2, } from './SignupStyle';
import styled from 'styled-components';
import { animated } from 'react-spring/web'
import { useForm, validationInfo } from './useForm';
import { useSpring } from '@react-spring/core';

const FormContainer = styled(animated.div)`
  width: 40em;
  padding-top: 2em;
  background-color: transparent;
  text-align: center;
  /* border: 1px solid coral; */
  button{
    width: 8em;
    font-size: 1.4em;
    padding: 0.5em 0.3em;
    color: #fff;
    border: .5px solid #fff;
    border-radius: 5px; 
    margin-bottom: 1.6em;
    @media screen and (max-width : 767px){
      width: 6em;
      font-size: 1.2em;
      padding: 0.4em 0.2em;
      color: #fff;
      border: .5px solid #fff;
      border-radius: 5px; 
    }
  };

`;
const EmailDiv = styled(animated.div)`
  width : 30em; height: 2em;
  margin: 0 center;
  margin-top: 5em;
  text-align: center;
  font-size: 1.8em;
  color: #fff;
  @media screen and (max-width : 767px){
    
    font-size: 1.6em;
  }
`;
const ErrP  = styled.p`
  width: 100%;
  font-size:1.3em;
  color: red;
  opacity: 0.7;
`;

const RadioContainer =styled.div`
  width: 32em;
  margin: 2.2em auto;
  input{
    width: 3.4em;
    background-color:coral;
  margin: 1.5em auto;
  }
  span{
    font-size:1.5em;
    color: #ffffff;
  }

`;

const SignForm = ({ isValid, email }) => {
  const{ 
    values, errors, gender,
    handleInputChange, handleKeyPress, 
    handleRadioChange , handleSubmit} = useForm()
    // Translate animation by useSpring 
    const props = useSpring({
      transform: isValid[0] && isValid[1]? 'translateY(0%)' : 'translateY(100%)',
      opacity : isValid[0] && isValid[1] ? 1 : 0 
    });
  return(
    <>
    { isValid[0] && isValid[1] ? <EmailDiv className='emailDiv' style={props}>{email}</EmailDiv> : null }
    <form id='signForm' onSubmit={handleSubmit}>
      <FormContainer style={props}>
        <InputContainer2 >
          <input 
            id="surName"
            type="text"
            name='userName'
            placeholder="닉네임"
            onKeyUp= { handleKeyPress }
            onChange={ handleInputChange }
            value={values.userName}
            />
        </InputContainer2>
         { errors.userName  && <ErrP >{errors.userName}</ErrP>}
         <InputContainer2 >
          <input 
            id="password"
            type="password"
            name='password'
            placeholder="비밀번호"
            onKeyUp= { handleKeyPress }
            onChange={ handleInputChange }
            value={values.password}
            />
        </InputContainer2>
        <InputContainer2 >
          <input 
            id="password2"
            type="password"
            name='password2'
            placeholder="비밀번호 확인"
            onKeyUp= { handleKeyPress }
            onChange={ handleInputChange }
            value={values.password2}
            />
        </InputContainer2>
        { errors.password && <ErrP >{errors.password}</ErrP>} 
        <RadioContainer>
            <label>
              <input type="radio" value= 'male' checked={values.gender == 'male'}
                    onChange={handleRadioChange} />
              <span>Male</span>
            </label>
            <label>
              <input type="radio" value='female' checked={values.gender == 'female'}
                    onChange={handleRadioChange} 
                    />
              <span>Female</span>
            </label>
          </RadioContainer>
          <button type="submit">Submit</button>
        </FormContainer>
      </form>
    </>
  )
}

export default SignForm