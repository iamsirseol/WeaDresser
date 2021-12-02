import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.4);
  display: grid;
  place-items: center;
`;

export const ModalContainer = styled.div`
  width: 60rem;
  height: 75rem;
  z-index: 99;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.5rem;
  border-radius: 1rem;
  text-decoration: none;
  text-align: center;
  background-color: white;
  /* border: 1px solid coral; */
  @media screen and (max-width : 767px){
    width: 40rem;
    height: 50rem;
  }
  @media screen and (max-width : 424px){
    width: 28rem;
    height: 35rem;
  }
`;  

export const LogoContainer =styled.div`
  width: 25rem;
  height: 20rem;
  background-color: aliceblue;
  > img{
    cursor: pointer;
    width: 100%;
  }
  @media screen and (max-width : 767px){
    width: 20rem;
    height: 16rem;
  }
  @media screen and (max-width : 424px){
    width: 15rem;
    height: 12rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.5rem; //<- responisive
  .login-input{
    /* -webkit-appearance: none; */
    font-size: 1.2rem;
    height: 3rem;
    width: 30rem;
    border: none;
    border-bottom: solid 0.5px rgba(0,0,0,0.5);
    transition: 0.4s;
    margin: 1.5rem; // responsive 
    &:focus{
      transition: 0.2s;
      outline: none;
      border-bottom: 1px solid cornflowerblue;
    }
    &::placeholder{
      color: gray;
      opacity: 0.6;
    }
    &::placeholder::hover{
      opacity: 0;
    }
    @media screen and (max-width : 767px){
      width: 24rem;
      height: 2.3rem;
      margin: 1.5rem;
      font-size: 1.2rem
    }
    @media screen and (max-width : 424px){
      width: 18rem;
      height: 1.2rem;
      margin: 1.0rem;
      font-size: 0.8rem;
    }
  }
  @media screen and (max-width : 767px){
    margin-top: 1.5rem
  }
  @media screen and (max-width : 424px){
    margin-top: 1.2rem;
  }
`;

export const LoginError = styled.div`
  font-size: 1.8rem;
  height: 1.5rem;
  color: red;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
    margin-left: 1rem;
  }
`;

export const LoginBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin:2rem;
  margin-top: 4.5rem;
  /* background:cornflowerblue; */
  @media screen and (max-width: 787px){
    margin-top:2.5rem;
  }
  button{
    color: #757575;
    background-color:#fff;
    border: 1px solid #d9d9d9;
    border-radius: 0.7rem;
    height: 4rem;
    width: 28rem;
    margin: 0.5rem;
    font-size: 1.6rem;
    cursor: pointer;
    @media screen and (max-width: 767px) {
      font-size: 1.4rem;
      margin-left: 1rem;
      width: 22rem;
      height: 3.5rem;
    }
  }
  .login-btn{
    background-color: #fff;
    color: #757575;
  }
  .login-btn-active{
    background-color: cornflowerblue;
    color: #fff;
  }
  .kakao-btn{
    background-color: #FFE650;
  }
  .google-btn{
    background-color: #252525;
    color: #fff;
  }

`;
export const Button = styled.button`
  color: ${({ textColor }) => textColor || "#757575"};
  background-color:${({ backColor }) => backColor || "white"};
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  height: 3rem;
  width: 25rem;
  margin: 0.3rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 17rem;
    height: 3rem;
    font-size: 0.7rem;
  }
`;
export const SocialBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* margin:2rem; */
  /* background:cornflowerblue; */
`;
export const SocialButton = styled.button`
  color: ${({ textColor }) => textColor || "#757575"};
  background-color:${({ backColor }) => backColor || "white"};
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  height: 3rem;
  width: 25rem;
  margin: 0.3rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 17rem;
    height: 3rem;
    font-size: 0.7rem;
  }
`;


export const InnerContainer = styled.div``;

export const InnerBox = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  height: 4.5rem;
  /* margin-top: ${ ({ topMargin }) => topMargin || "0px"}; */
  margin-bottom: ${ ({ codeMargin }) => codeMargin || "2.2rem" };
  /* background-color: cornflowerblue; */
  > .innerTextBox{
    width: 2.5rem;
    font-size: 1.6rem;
    height: 100%;
    margin-top: .7rem;
    text-align: center;
    margin-right: ${({ marginRight }) => marginRight || "0"};
    @media screen and (max-width : 1023px){
      font-size: 1.5rem;
      height : 3.8rem;
    };
    @media screen and (max-width : 767px){
      font-size:1.4rem;
      height : 3.6rem;
    };
    @media screen and (max-width : 600px){
      font-size:1.3rem;
      height : 3.3rem;
    };
    @media screen and (max-width : 400px){
      font-size:1.3rem;
      height : 2.8rem;
    };
  }
  > button{
    width: 8.0rem;
    height: 3.3rem;
    padding: 0.8rem 1.2rem;
    margin-left: 1rem;
    margin-top:.5rem;
    border-radius: 1.0rem;
    background-color: cornflowerblue;
    color: #fff;
    
  }
  > .codeBtn{ opacity: 0;}
`;

export const InnerInputBox = styled.div`
  /* border: 1px solid coral; */
  width: 90%;
  width : ${ ({ width }) => width || "75%" };
  margin-left: ${ ({ marginLeft }) => marginLeft || "0px" };
  text-align: center;
  > input{
    width : 90%; 
    height: 100%;
    border-radius: 1rem;
    border : 1px solid rgba(0,0,0,0.5);
    margin-left:1rem;
  }
  @media screen and (max-width : 1023px){
    font-size: 1.5rem;
    height : 3.8rem;
  };
  @media screen and (max-width : 767px){
    font-size:1.4rem;
    height : 3.6rem;
  };
  @media screen and (max-width : 600px){
    font-size:1.3rem;
    height : 3.3rem;
  };
  @media screen and (max-width : 400px){
    font-size:1.4rem;
    height : 2.8rem;
  };
`;
export const DivMargin = styled.div`
  margin-top : ${ ({ marginTop }) => marginTop || "2.5rem"};
`;

export const BtnContainer = styled.div`
  width: 100%;
  height: 50%;
  color: black;
  /* background-color: cornflowerblue; */
  > button{
    width: 60%; 
    height: 13%;
    border-radius: 1rem;
    /* background-color: #fff; */
    color: #fff;
    font-size: 1.5rem;
    margin-top: 1rem;
    cursor: pointer;
    border: 2px solid gainsboro;  
    &:hover{
      background-color:gainsboro;
      color: #fff;
    }
    &:first-child{
      margin-top: 3rem;
    }
    &:nth-child(2){
      background-color:#FFE650;
      color: gray;
    }
    &:nth-child(3){
      background-color:#252525;
      color: #fff;  
    }
  }
`; 

// 세로열 정렬 container
const SignupContainer = styled.div`
  width: 75rem;
  height: 70vh;
  display: flex;
  justify-content: space-around;
  background-color: aliceblue;
  @media screen and (max-width : 1023px){
    width: 58rem;
    height: 65vh;
  }
  @media screen and (max-width : 767px){
    width: 45rem;
    height: 55vh;
  }
  @media screen and (max-width : 600px){
    width: 38rem;
    height: 48vh;
  }
  @media screen and (max-width : 400px){
    width: 30rem;
    height: 42vh;
  }

`;

const SignupBtnCol = styled.div`
  width: 15%;
  height: 100%;
  position: relative;
  background-color: aquamarine;
  > button{
    display: inline-block;
    position: absolute;
    width: 100%;
    /* min-width: 3.5rem; */
    margin: 0 ;
    padding: .8rem;
    top: 12.5%;
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
