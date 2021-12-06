import { useState, useEffect } from 'react';
import { getEmailValidation } from '../../../api/signup'

export const useForm = () => {
  const [values, setValues] = useState({
    email : '', code : '', userName : '', 
    password: '', password2: '', gender : '',
  }); 

  const [errors, setErrors] = useState({ on: false, msg : "" });
  const [isValid, setIsValid ] = useState( [false, false] );
  const [codeMsg, setCodeMsg] = useState({ on : false, msg: "" })
  const [toLogin, setToLogin] = useState({ on: false })
  const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const handleInputChange = e => {
    const { name, value } = e.target; 
    setValues({ ...values, [name] : value})
  };
  
  const handleRadioChange = e => {
    if(e.target.checked){
      setValues({ ...values, [e.target.name] : e.target.value})
    }
  }

  const handleKeyPress = (e) => {
    const { name } = e.target ; 
    setErrors({ on: false, msg : "" })
    setCodeMsg({ on: false, msg : "" })
    setToLogin({ on: false, msg : "" })
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validationInfo(values))


  }
  // Validation 
  const emailValidation = async () => {
    if(!values.email){
      setErrors({ on : true, msg : "이메일을 입력해 주세요"})
    }
    else if(!pattern.test(values.email) ||
      !values.email.includes('@') || 
      !values.email.includes('.')){
      setErrors({ on : true, msg :"이메일 형식을 확인해 주세요"})
    }
    else{ // email validation => API server 요청 
      const resultStatus = await getEmailValidation('users/email', values.email)
      // console.log(resultStatus);
      if( resultStatus === 200 ){
        setIsValid([true, isValid[1]]);
        setErrors({ on : true, msg :"사용 가능한 이메일 입니다." });
        setCodeMsg({ on: true, msg : "이메일 인증을 완료해 주세요" })
      }
      else if ( resultStatus === 203 ){
        setIsValid([false, isValid[1]]); 
        setErrors({ on : true, msg :"이미 가입된 회원 입니다" });
        setToLogin({ on : true })
      }
      else{
        setIsValid([false, isValid[1]]); 
        setErrors({ on : true, msg :"앗 서버 에러가 낫어요" });
      } 
    }
  }
  const codeValidation = () => {
    if(!values.code || values.code.length !== 6){
      setErrors({ on:true, msg :"6자리 인증 코드를 입력 하세요"});
    }
    else if(values.code === "test12"){
      setIsValid([isValid[0], true])
    }
  }
  return { 
    isValid, values, errors, codeMsg, toLogin,
    handleInputChange, handleRadioChange, handleSubmit, 
    handleKeyPress, emailValidation, codeValidation, 
  }
}

export const validationInfo = (values) => {
  let validMsg = { };

  if(values.userName === ''){ 
    validMsg.userName = "닉네임을 입력해 주세요" 
  }
  if(!values.password  || !values.password2){
    validMsg.password= "비밀번호를 입력해 주세요" 
  }
  if(values.password && values.password2 && values.password !== values.password2){
    validMsg.password = "비밀번호가 일치 하지 않습니다" 
  }
  return validMsg
}
