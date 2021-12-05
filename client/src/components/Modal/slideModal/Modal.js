import React,{ useCallback, useRef, useState, useEffect } from "react";
import { useSpring } from 'react-spring'
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login'
import Signup from "./Signup";
import title from './title.svg'
import { isShowLoginModalHandler, } 
from '../../../redux/actions/actions'
import { 
  ModalBackdrop, 
  ModalContainer,
  CloseModalButton,
  LogoContainer
} from './ModalStyle'

const Modal = () => {
  const { isShowLoginModal } = useSelector(state => state.isShowModalReducer)
  const [ isSingupModal, setIsSingupModal ] = useState(false);
  const dispatch = useDispatch();
  const  modalRef = useRef();

  // Translate animation by useSpring 
  const props = useSpring({
    transform: isShowLoginModal ? 'translateY(0%)' : 'translateY(100%)',
    opacity : isShowLoginModal ? 1 : 0 
  });

  // Modal False by clx btn 
  const closeModalByBtn = e => {
    dispatch(isShowLoginModalHandler(false))
  }
  // Modal False by backDrop <- useRef only 
  const closeModalHandler = e => {
    if(modalRef.current === e.target){
      dispatch(isShowLoginModalHandler(false))
    }
  }
  // Modal False by Esc key <- useEffect only!! 
  const closeKeyPress = useCallback( e => {
    if(e.key === 'Escape' && isShowLoginModal){
      dispatch(isShowLoginModalHandler(false))
    }
  }, [isShowLoginModalHandler, isShowLoginModal])

  // Component change 
  const modalChangeHandler  =() => {
    setIsSingupModal(!isSingupModal)
  }
  // useEffect to set keydown event 
  useEffect( ()=> {
    document.addEventListener('keydown', closeKeyPress);
    return () => document.removeEventListener('keydown', closeKeyPress)
  }, [closeKeyPress])

  return (
    <>{ !isShowLoginModal ? null : 
      <ModalBackdrop ref={modalRef} onClick={closeModalHandler}>
          <ModalContainer style={props}>
            { isSingupModal 
              ? <Signup
                  isSingupModal={isSingupModal}
                  modalChangeHandler={modalChangeHandler} 
                /> 
              : <Login 
                  isSingupModal={isSingupModal} 
                  modalChangeHandler = {modalChangeHandler}/>
            }
            <CloseModalButton onClick={closeModalByBtn}/>
          </ModalContainer>
       </ModalBackdrop>
      }
    </>
  )
};

export default Modal