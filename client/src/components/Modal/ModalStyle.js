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
  > .modalOutter{
    width:100%; 
    height:100vh;
  }  
`;

export const ModalContainer = styled.div`
  width: 75rem;
  height: 65vh;
  z-index: 99;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0,0,0,0.3);
  padding-top: 2.5rem;
  border-radius: 1rem;
  text-decoration: none;
  text-align: center;
  color: #fff;
  &:hover{
    background-color: #fff;
    color: black;
  }
  @media screen and (max-width : 1023px){
    width: 58rem;
    height: 60vh;
  }
  @media screen and (max-width : 767px){
    width: 45rem;
    height: 50vh;
  }
  @media screen and (max-width : 600px){
    width: 38rem;
    height: 45vh;
  }
  @media screen and (max-width : 400px){
    width: 30rem;
    height: 35vh;
  }
`;  

export const InnerContainer =styled.div`
  width: 100%;
  height: ${ ({height}) => height || null };
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  text-align: center;
  /* background-color: cornsilk; */
  > .modalTitle{
    font-size:3.5rem;
    margin-bottom: 4.5rem;
    /* text-align: center; */
    @media screen and (max-width : 1023px){
      font-size:3.0rem;
    };
    @media screen and (max-width : 767px){
      font-size:2.6rem;
    };
    @media screen and (max-width : 600px){
      font-size:2.2rem;
    };
    @media screen and (max-width : 400px){
      font-size:1.8rem;
    };
  }
`;

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
