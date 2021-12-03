import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Login  from './Login'
import Signup  from './Signup'
import { 
  isShowLoginModalHandler, 
  isShowSignUpModalHandler,
  loginSuccessHandler 
} from '../../redux/actions/actions'
import { 
  ModalBackdrop, 
  ModalContainer,
} from './ModalStyle';

function Modal(){
  const dispatch = useDispatch(); 
  const [ prohibit , setProhibit ] = useState(false);
  const [ showLogin, setShowLogin ] = useState(true);

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
  const showLoginHandler = () => {
    setShowLogin(!showLogin)
  }

  return (
    <>
    <ModalBackdrop onClick={modalOffHandler} >
      <ModalContainer onMouseOver={stayOnHandler} onMouseLeave={stayOffHandler}>
        { showLogin ? <Login showLoginHandler={showLoginHandler}/> : <Signup /> } 
      </ModalContainer>
    </ModalBackdrop>
    </>
  );
}

export default Modal;
