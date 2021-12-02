import { useDispatch } from 'react-redux';
import { isShowSignUpModalHandler } from '../../redux/actions/actions'
import styled from 'styled-components';
import { 
  ModalBackdrop, 
  ModalContainer,
  InnerContainer,
  InnerBox, InnerInputBox,
  DivMargin
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
    top: 22%;
    right: 20%;
    background-color: cornflowerblue;
    border-radius: 1rem;
    color: #fff;
    @media screen and (max-width : 600px){
      padding:.5rem .3rem;
      top: 21.5%;
    }
    @media screen and (max-width : 400px){
      font-size: 1.2rem;
      padding:.6rem .1rem;
      top: 20.5%;
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
        {/* <SignupContainer> */}
          <InnerContainer inHeight={"60vh"} inWidth={"85%"} marginLeft={"5.5rem"}>
            <div className="modalTitle">회 원 가 입</div>
            <InnerBox topMargin={"1.5rem"}>
              <div className="innerTextBox">Email</div>
              <InnerInputBox ><input/></InnerInputBox>
              <button className="dupBtn">중복체크</button>
            </InnerBox >
            <InnerBox  codeMargin={"10.5rem"}>
              <div className="innerTextBox">Code</div>
              <InnerInputBox ><input/></InnerInputBox>
              <button className="codeBtn">중복체크</button>
            </InnerBox>
            <DivMargin />
            <InnerBox>
              <div className="innerTextBox">Name</div>
              <InnerInputBox ><input/></InnerInputBox>
              <button className="codeBtn">중복체크</button>
            </InnerBox>
            <InnerBox>
              <div className="innerTextBox">Password1</div>
              <InnerInputBox ><input/></InnerInputBox>
              <button className="codeBtn">중복체크</button>
            </InnerBox>
            <InnerBox>
              <div className="innerTextBox">Password2</div>
              <InnerInputBox ><input/></InnerInputBox>
              <button className="codeBtn">중복체크</button>
            </InnerBox>
          </InnerContainer>
          {/* <SignupBtnCol> */}
          {/* </SignupBtnCol> */}
        {/* </SignupContainer> */}
      </ModalContainer>
    </ModalBackdrop>
    </>
  );
}

export default Signup;
