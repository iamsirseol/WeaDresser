const mailer = require('nodemailer');
const email = {
  "host": "smtp.mailtrap.io",
  "port": 25,
  "secure" : false,
  "host": "smtp.ethereal.email",
  "auth": {
    "user": "5130552df43c6f", // generated ethereal user
    "pass": "7e64240ce0f912", // generated ethereal password
  }
}
const contentData = {
  from : "a53bc43658-7eade4@inbox.mailtrap.io", 
  to : "minchjung@gmail.com",
  subject : "Weadresser 회원 가입 인증메일 발송 되었습니다.",
  text : "generating Code, 아래의 코드를 입력해 인증을 완료해 주세요"
}

export const sendEmailCode = async (contentData) => {
  mailer
    .createTransport(email)
    .sendMail(contentData, (err, info) => {
      if(err) console.log(err)
      else{
        console.log(info);
        return info.response;
      }
    })
}

sendEmailCode(contentData);