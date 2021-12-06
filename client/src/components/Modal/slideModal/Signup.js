import  SignForm  from './SignForm'
import { useForm }  from'./useForm';
import { useState } from 'react';
import { useSpring } from 'react-spring'
import title from './title.svg'
import { useDispatch, useSelector } from 'react-redux';
import { isShowLoginModalHandler, isShowSignUpModalHandler,} from '../../../redux/actions/actions'
import { LogoContainer,InputContainer,InputButton, BackButton, ErrPtag,} from './SignupStyle';
import { CloseModalButton } from './ModalStyle';
function Signup({ closeModalByBtn }){
  const { isShowLoginModal, isShowSignUpModal } = useSelector(state => state.isShowModalReducer)
  const dispatch = useDispatch(); 

  const 
  { handleInputChange, 
    handleKeyPress, 
    emailValidation,
    codeValidation,
    values, errors, isValid
  } = useForm();
  // Translate animation by useSpring 
  const displayOff = useSpring({
    transform: !isValid[0] ? 'translateY(0%)' : 'translateY(100%)',
    opacity : !isValid[0] ? 1 : 0 
  });
  
  const displayOn = useSpring({
    transform: isValid[0] ? 'translateY(0%)' : 'translateY(100%)',
    opacity : isValid[0] ? 1 : 0 
  });

  const backModalHandler = () => {
    dispatch(isShowLoginModalHandler(true));
    dispatch(isShowSignUpModalHandler(false));
  }

  return (
  <> 
    <BackButton onClick={backModalHandler}/>
    <CloseModalButton onClick={closeModalByBtn}/>
    <LogoContainer><img alter="" src={title}/></LogoContainer>
      { isValid[0] ? null : 
      <>
        <InputContainer style={displayOff} width = {'35em'}>
          <input 
            className="signup-input"
            type="email"
            name='email'
            placeholder="Email"
            onKeyUp= { handleKeyPress }
            onChange={ handleInputChange }
            value={values.email}
            />
        </InputContainer>
        <InputButton onClick={emailValidation}>이메일 인증</InputButton>
      </>
      }
      { !isValid[0] ? null :<>
      <InputContainer style={displayOn} width = {'35em'}>
        <input 
          className="signup-input"
          type="text"
          name='code'
          placeholder="Code"
          onKeyUp= { handleKeyPress }
          onChange={ handleInputChange }
          value={values.code}
          />
      </InputContainer>
        <InputButton onClick={codeValidation}>코드 인증</InputButton>
      </>}
        {errors.on && <ErrPtag>{errors.msg}</ErrPtag>}
        { isValid[0] && isValid[1] ?    <SignForm isValid={isValid}/> : null}
  </>
  );
}

export default Signup;
