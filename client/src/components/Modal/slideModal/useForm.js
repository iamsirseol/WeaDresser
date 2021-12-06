import { useState, useEffect } from 'react';

export const useForm = () => {
  const [values, setValues] = useState({
    email : '', code : '', userName : '', 
    password: '', password2: '', gender : '',
  }); 
  const [errors, setErrors] = useState({on:false, msg :""});
  const [isValid, setIsValid ] = useState([false, false])
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
    setErrors({ on: false, msg : ""})
  };
  
  const handleSubmit = e => {
    e.prevemtDefault();

  }

  // Validation 
  const emailValidation = () => {
    console.log(values)
    if(!values.email){
      setErrors({ on:true, msg : "이메일을 입력해 주세요"})
    }
    else if(!pattern.test(values.email) ||
      !values.email.includes('@') || 
      !values.email.includes('.')){
      setErrors({ on:true, msg :"이메일 형식을 확인해 주세요"})
    }
    else{
      setIsValid([true, isValid[1]])
    }
  }
  const codeValidation = () => {
    if(!values.code || values.code.length !== 6){
      setErrors({ on:true, msg :"6자리 인증 코드를 입력 하세요"})
    }
    else if(values.code === "test12"){
      setIsValid([isValid[0], true])
    }
  }
  return { 
    isValid, values, errors, 
    handleInputChange, handleRadioChange, handleSubmit, 
    handleKeyPress, emailValidation, codeValidation 
  }
}

export const validationInfo = (values) => {
  let errors = { };
  const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if(!values.userName.trim()){
    errors.userName = "회원명을 입력해 주세요";
  }
  if(!values.email){
    errors.email = "이메일을 입력해 주세요";
  }
  else if(pattern.test(values.email)){
    errors.email = "이메일 형식을 확인해 주세요"
  }
  if(!values.password){
    errors.password = "비밀번호를 입력해 주세요"
  }
  else if(values.password.length < 6){
    errors.password = "비밀번호는 6자리 이상이여야 합니다"
  }
  if(!values.password2){
    errors.password2 = "비밀번호를 입력해 주세요"
  }
  else if(!values.password !== values.password2){
    errors.password2 = "비밀번호가 일치하지 않습니다" 
  }
  if(!Number(values.code) || values.code.length !== 6){
    errors.code = "6자리 인증 코드를 입력 하세요"
  }
  return errors
}
