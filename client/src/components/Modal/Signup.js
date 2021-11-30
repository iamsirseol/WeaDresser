import { getGoogleAccToken, getKakaoCode } from '../../api/social'
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../../styles/Signup.css'

function Signup(){

  return (
    <div className='signupContainer'>
      <div className='signupTitle'>회 원 가 입</div>
      <div className='signEmailContainer'>
        <div className='signEmailBox'>
          <div className="signEmailTextBox">Email</div>
          <div className='signEmailInputBox'><input className='inputEmail'/></div>
          <button className='duplicateBtn'>중복체크</button>
        </div>
        <div className='codeBox'>
          <div className="codeTextBox">Code</div>
          <div className='codeInputBox'><input className='inputCode'/></div>
          <button className='codeBtn'>코드전송</button>
        </div>
        {/* <button className='duplicateBtn'>중복체크</button> */}
      </div>
      <br/>
      <div className='userContainer'>
        <div className='leftBox'>
          <div className="leftTextBox">name</div>
          <div className='leftInputBox'><input className='inputCode'/></div>
          {/* <div className='dumBox'>코드전송</div> */}
        </div>
        <div className='leftBox'>
          <div className="leftTextBox">password1</div>
          <div className='leftInputBox'><input className='inputCode'/></div>
          {/* <div className='dumBox'>코드전송</div> */}
        </div>
        <div className='leftBox'>
          <div className="leftTextBox">password2</div>
          <div className='leftInputBox'><input className='inputCode'/></div>
          {/* <div className='dumBox'>코드전송</div> */}
        </div>
        <button className="submitBtn">Submit</button>
      </div> {/* userContainer */}
    </div>
  );
}

export default Signup;
