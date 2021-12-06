import { InputContainer, ErrPtag,} from './SignupStyle';
import styled from 'styled-components';
import { animated } from 'react-spring/web'
import { useForm } from './useForm';
import { useSpring } from '@react-spring/core';
const FormContainer = styled(animated.div)`
  width: 32em;
  padding-top: 2em;
  background-color: transparent;
  text-align: center;
  margin: 0 auto;
  button{
    width: 8em;
    font-size: 1.4em;
    padding: 0.5em 0.3em;
    color: #fff;
    border: .5px solid #fff;
    border-radius: 5px; 
  }
  input{
    width:15em
  }

`;

const RadioContainer =styled.div`
  width: 32em;
  margin: 2.2em auto;
  input{
    width: 3.4em;
    background-color:coral;
  }
  span{
    font-size:1.5em;
    color: #ffffff;
  }

`;

const SignForm = ({ isValid }) => {
  const{ values,errors, gender, handleInputChange, handleKeyPress, handleRadioChange , handleSubmit} = useForm()
    // Translate animation by useSpring 
    const props = useSpring({
      transform: isValid[1] ? 'translateY(0%)' : 'translateY(100%)',
      opacity : isValid[1] ? 1 : 0 
    });
  return(
    <>
    <form id='signForm' onSubmit={handleSubmit}>
      <FormContainer style={props}>
        <InputContainer width={'10em'}>
          <input 
            id="surName"
            type="text"
            name='userName'
            placeholder="닉네임"
            onKeyUp= { handleKeyPress }
            onChange={ handleInputChange }
            value={values.userName}
            />
        </InputContainer>
        <InputContainer width={'10em'}>
          <input 
            id="password"
            type="password"
            name='passowrd'
            placeholder="비밀번호"
            onKeyUp= { handleKeyPress }
            onChange={ handleInputChange }
            value={values.password1}
            />
        </InputContainer>
        <InputContainer width={'10em'}>
          <input 
            id="password2"
            type="password"
            name='password2'
            placeholder="비밀번호 확인"
            onKeyUp= { handleKeyPress }
            onChange={ handleInputChange }
            value={values.password2}
            />
        </InputContainer>
          <RadioContainer>
            <label>
              <input type="radio" value="male" checked={gender == 'male'}
                    onChange={handleRadioChange} />
              <span>Male</span>
            </label>
            <label>
              <input type="radio" value="female" checked={gender == 'female'}
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