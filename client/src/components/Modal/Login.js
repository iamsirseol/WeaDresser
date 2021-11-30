import { getGoogleAccToken, getKakaoCode } from '../../api/social'
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../../styles/Login.css'

function Login(){

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
  return (
    <div className='loginContainer'>
      <div className='loginTitle'>Login</div>
      <div className='inputContainer'>
        <div className='emailBox'>
          <div className="emailTextBox">Email</div>
          <div className='emailInputBox'>
            <input className='inputEmail'/>
          </div>
        </div>
        <div className='passwordBox'>
          <div className="passwordTextBox">Password</div>
          <div className='passwordInputBox'>
            <input className='inputPassword' type="password"/>
          </div>
        </div>
      </div>
      <div className='btnContainer'>
        <button onClick={userLoginHandler} className='userLoginBtn'> 로그인</button>
        <button onClick={kakaoLoginHandler} className='kakaoLoginBtn'>Kakao 로그인</button>
        <button onClick={googleLoginHandler} className='googleLoginBtn'>Google 로그인</button>
        <button onClick={userLoginHandler} className='singupBtn'>회원가입</button>
      </div>
    </div>
  );
}

export default Login;
