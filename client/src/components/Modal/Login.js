import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getGoogleAccToken, getKakaoCode } from '../../api/social'
import { isShowLoginModalHandler, isShowSignUpModalHandler } from '../../redux/actions/actions'
import { 
  ModalBackdrop, 
  ModalContainer,
  InnerContainer,
  InnerBox, InnerInputBox,
  BtnContainer, DivMargin
} from './ModalStyle';

function Login(){
  const [ prohibit , setProhibit ] = useState(false)
  const dispatch = useDispatch(); 
  
  // 모달 창 바깥 클릭시 창닫기 
  const modalOffHandler = () => {
    // 바깥쪽 일때만 작동!  
    if(!prohibit) 
    //(모달 창 안쪽 마우스 off => prohibit = false)
      dispatch(isShowLoginModalHandler(false))
  }
  // 모달 창 안쪽 마우스 on => prohibt = true  
  const stayOnHandler = () => {
    setProhibit(true)
  }
  // 모달 창 안쪽 마우스 off => prohibt = false  
  const stayOffHandler = () => {
    setProhibit(false)
  }
  // user loginHandler 
  const userLoginHandler = () => {

  }
  // get google token 
  const googleLoginHandler = () => {
    getGoogleAccToken()
  }
  // get kakao code 
  const kakaoLoginHandler = () => {
    getKakaoCode()
  }
  const userSingupHandler = () => {
    dispatch(isShowSignUpModalHandler(true))
    dispatch(isShowLoginModalHandler(false))
  }

  return (
    <>
    <ModalBackdrop onClick={modalOffHandler} >
        <ModalContainer onMouseOver={stayOnHandler} onMouseLeave={stayOffHandler}>
          <InnerContainer>
            <div className="modalTitle">로그인</div>
            <InnerBox height={"15%"}>
              <div className="innerTextBox">Email </div>
              <InnerInputBox ><input/></InnerInputBox>
            </InnerBox>
            <InnerBox marginRight={"1rem"}  >
              <div className="innerTextBox">Password </div>
              <InnerInputBox><input/></InnerInputBox>
            </InnerBox>
          </InnerContainer>
          <DivMargin marginTop={"10rem"}/>
          <BtnContainer>
            <button onClick={userLoginHandler} className='userLoginBtn'> 로그인</button>
            <button onClick={kakaoLoginHandler} className='kakaoLoginBtn'>Kakao 로그인</button>
            <button onClick={googleLoginHandler} className='googleLoginBtn'>Google 로그인</button>
            <button onClick={userSingupHandler} className='singupBtn'>회원가입</button>
          </BtnContainer>
        </ModalContainer>
    </ModalBackdrop>
    </>
  );
}

export default Login;
