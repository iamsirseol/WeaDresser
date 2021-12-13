import axios from 'axios';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginSuccessHandler } from '../redux/actions/actions';
require('dotenv').config();
//!Todo Client id, Secret key,숨기기

export const useLoginApi = () => {
  const [ socialDone, setSocialDone ] = useState(false);
  const dispatch = useDispatch();
  const  modalRef = useRef();
  const history = useHistory();

  const getGoogleAccToken = () => {
    const client_id 
      = process.env.REACT_APP_KEY_GOOGLE 
      || "218465323122-rtk87nvtaj2j5qmdg72qvas9sj81jee0.apps.googleusercontent.com";
    const redirect_uri = "https://localhost:3000"
    const google= `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`
    window.location.assign(google)
  };
    
  const getGoogleUserInfo = async ({accessToken}) => {
    const googleData = await axios.get(
      'https://www.googleapis.com/oauth2/v2/userinfo?access_token=' + accessToken, 
      { headers: { 
        authorization: `token ${accessToken}`, 
        accept: 'application/json' 
        }
      })
    .catch(err => {
      console.log(err);
      return { isSuccess : false, accessToken : null , msg : "Server error"} 
    })
    return googleData 
      ? { isSuccess : true, data : googleData.data, msg : "Success" }
      : { isSuccess : false, data : null, msg : "Bad Requset" }

  };
    


  const getUserAccToken = (loginInfo) => {
    const { email, password } = loginInfo; 
    axios.post(
      'http://localhost:80/users/signin',
      { email, password},
      { withCredentials: true }
    )
    .then(data => { 
      // console.log(data)
      return [ true ,  data.data.accessToken,  "Success" ]
    })
    .catch(err => {
        // console.log(err.response)
        return err.response.status === 401 
        ? [ false,  null,  "이메일 과 비밀번호를 다시 확인해 주세요" ]  
        : [ false,  null ,  "Server error" ] 
      })
  }

  // 카카오 코드 요청 
  // * double check ok 
  const getKakaoCode = () => {
    const client_id = process.env.REACT_APP_KEY_KAKAO 
    const redirect_uri= process.env.REACT_APP_REDIRECT_URL 
    const kakao = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;
    window.location.assign(kakao)
  };

  // 카카오 토큰 요청
  // * double check ok
  const getKakaoAccToken = async (kakaoCode) => {
    const client_id = process.env.REACT_APP_KEY_KAKAO
    const client_secret = process.env.REACT_APP_KAKAO_SECRET
    const kakaoUrl = `https://kauth.kakao.com/oauth/token?code=${kakaoCode}&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=https://localhost:3000&grant_type=authorization_code`;
    
    const data = await axios.post(
      kakaoUrl,
      { headers: { accept: `application/x-www-form-urlencoded` } },
      { property_keys: ["kakao_account.email"] }
    )
    .catch(err =>{
      // console.log(err);
      return { isSuccess : false, accessToken : null , msg : "Server error"} 
    })
    return data 
      ? { isSuccess : true ,  accessToken : data.data.access_token, msg : "Success" }
      : { isSuccess : false, accessToken : null, msg : "Bad Request" }
  }
  // 카카오 유저 로그인 토큰 요청
  // * double check ok
  // ! dot env 안됨
  const getKakaoUserToken = async ({accessToken}) => {
    const SERVER = process.env.REACT_APP_SERVER_URL || "http://localhost:80"

    axios.post(
      `${SERVER}/oauth/kakao`,
      { accessToken }, // 카카오 토큰
      { withCredentials : true }
    )
    .then(loginResult => {
      dispatch(loginSuccessHandler(true, loginResult.data.accessToken));
      setSocialDone(true);
      sessionStorage.setItem('isLogin', 'true')
      history.goBack();
    })
    .catch(err=> {
      //err handle
      console.log(err.response);
    })
  }

  return {
    getGoogleAccToken, getGoogleUserInfo, 
    getKakaoCode, getKakaoAccToken, 
    getUserAccToken, getKakaoUserToken
  }
}
