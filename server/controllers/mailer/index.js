const mailer = require('nodemailer');
const emailer = {
  "host": "smtp.mailtrap.io",
  "port": 25,
  "secure" : false,
  "host": "smtp.ethereal.email",
  "auth": {
    "user": "5130552df43c6f", // generated ethereal user
    "pass": "7e64240ce0f912", // generated ethereal password
  }
}

module.exports = {
  //! mailer 확인
  sendEmailCode : async (res, userEmail) => {
    const contentData = {
      from : userEmail,
      to : "a53bc43658-7eade4@inbox.mailtrap.io", 
      subject : "Weadresser 회원 가입 인증메일 발송 되었습니다.",
      text : "generating Code, 아래의 코드를 입력해 인증을 완료해 주세요"
    }
    
    mailer
      .createTransport(emailer)
      .sendMail(contentData, (err, info) => {
        if(err) console.log(err)
        else
        {
          console.log(info);
          info.response;
          return res.status(200).json({msg : "please get your verification code on your email"})
        }
    })
  }
}