import React,{ useRef } from "react";
import { useSpring } from 'react-spring'
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login'
import { isShowLoginModalHandler, } 
from '../../../redux/actions/actions'
import { 
  ModalBackdrop, 
  ModalContainer,
  CloseModalButton,
} from './ModalStyle'

const Modal = () => {
  const { isShowLoginModal } = useSelector(state => state.isShowModalReducer)
  const dispatch = useDispatch();
  const  modalRef = useRef();

  // Translate animation by useSpring 
  const props = useSpring({
    transform: isShowLoginModal ? 'translateY(0%)' : 'translateY(100%)',
    opacity : isShowLoginModal ? 1 : 0 
  });

  // 최초 Modal창 전체 Open : True/False 결정! 
  const showModalHandler = () => {
    // 모든 모달창 open/close dispatch 수행은 이 함수내에서만 이뤄짐 !
    dispatch(isShowLoginModalHandler(!isShowLoginModal))
  }

  return (
    <>{ !isShowLoginModal ? null : 
      <ModalBackdrop>
          <ModalContainer style={props}>
            <Login/>
            <CloseModalButton onClick={showModalHandler}/>
          </ModalContainer>
       </ModalBackdrop>
      }
    </>
  )
};

export default Modal