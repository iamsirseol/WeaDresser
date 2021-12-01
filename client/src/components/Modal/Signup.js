import { useDispatch } from 'react-redux';
import { isShowSignUpModalHandler } from '../../redux/actions/actions'
import styled from 'styled-components';
import { 
  ModalBackdrop, 
  ModalContainer,
  InnerContainer,
  InnerBox, InnerInputBox,
} from './ModalStyle';
import { useState } from 'react';

const SignupContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const SignupBtnCol = styled.div`
  width: 15%;
  height: 100%;
  position: relative;
  > button{
    display: inline-block;
    position: absolute;
    width: 100%;
    /* min-width: 3.5rem; */
    margin: 0 ;
    padding: .8rem;
    top: 26.5%;
    right: 20%;
    background-color: cornflowerblue;
    border-radius: 1rem;
    color: #fff;
    @media screen and (max-width : 600px){
      padding:.5rem .3rem;
      top: 24.5%;
    }
    @media screen and (max-width : 400px){
      font-size: 1.2rem;
      padding:.5rem .1rem;
      top: 23%;
    }
  }
  @media screen and (max-width : 600px){
    width: 18%;
  }
  @media screen and (max-width : 400px){
    font-size: 1.4rem;
    width: 18%;
  }
`;

function Signup(){
  const [ prohibit , setProhibit ] = useState(true);
  const dispatch = useDispatch();
  // 모달 창 바깥 클릭시 창닫기 
  const modalOffHandler = () => {
    // 바깥쪽 일때만 작동!  
    if(!prohibit) 
    //(모달 창 안쪽 마우스 off => prohibit = false)
      dispatch(isShowSignUpModalHandler(false))
  }
  // 모달 창 안쪽 마우스 on => prohibt = true  
  const stayOnHandler = () => {
    setProhibit(true)
  }
  // 모달 창 안쪽 마우스 off => prohibt = false  
  const stayOffHandler = () => {
    setProhibit(false)
  }
  return (
    <>
    <ModalBackdrop onClick={modalOffHandler}>
      <ModalContainer onMouseOver={stayOnHandler} onMouseLeave={stayOffHandler}>
        <SignupContainer>
          <InnerContainer inHeight={"60vh"} inWidth={"85%"} marginLeft={"5.5rem"}>
            <div className="modalTitle">회 원 가 입</div>
            <InnerBox topMargin={"1.5rem"} height={"10%"}>
              <div className="innerTextBox">Email</div>
              <InnerInputBox marginLeft={"1.2rem"}><input/></InnerInputBox>
            </InnerBox >
            <InnerBox  codeMargin={"6.5rem"} height={"10%"}>
              <div className="innerTextBox">Code</div>
              <InnerInputBox marginLeft={"1.2rem"}><input/></InnerInputBox>
            </InnerBox>
            <InnerBox height={"10%"}>
              <div className="innerTextBox">Name</div>
              <InnerInputBox marginLeft={"1.2rem"}><input/></InnerInputBox>
            </InnerBox>
            <InnerBox height={"10%"}>
              <div className="innerTextBox">Password1</div>
              <InnerInputBox marginLeft={"1.2rem"}><input/></InnerInputBox>
            </InnerBox>
            <InnerBox height={"10%"}>
              <div className="innerTextBox">Password2</div>
              <InnerInputBox marginLeft={"1.2rem"}><input/></InnerInputBox>
            </InnerBox>
          </InnerContainer>
          <SignupBtnCol>
            <button>중복체크</button>
          </SignupBtnCol>
        </SignupContainer>
      </ModalContainer>
    </ModalBackdrop>
    </>
  );
}

export default Signup;
