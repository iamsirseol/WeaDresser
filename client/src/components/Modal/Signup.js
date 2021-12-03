import { useDispatch } from 'react-redux';
import { isShowSignUpModalHandler } from '../../redux/actions/actions'
import { 
  InnerContainer,
  InnerBox, InnerInputBox,
  DivMargin
} from './ModalStyle';
import { useState } from 'react';

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
    </>
  );
}

export default Signup;
