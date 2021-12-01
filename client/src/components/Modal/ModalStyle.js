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
    border:1px solid rebeccapurple;
  }  
`;

export const ModalContainer = styled.div`
  width: 50rem;
  height: 70vh;
  z-index: 99;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding-top: 2.5rem;
  border-radius: 1rem;
  text-decoration: none;
  text-align: center;
  border: 1px solid coral;
  /* background-color: coral; */
  @media screen and (max-width : 600px){
    width: 45rem;

  }
`;  

export const InnerContainer =styled.div`
  /* width: 90%; */
  /* height: 100%; */
  width: ${ ({ inWidth }) => inWidth || "90%" };
  height: ${({ inHeight }) => inHeight || "100%"};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  margin: 0 auto ;
  margin-right: ${ ({ marginRight }) => marginRight || "0px" };

  /* background-color: cornsilk; */
  /* background-color: ${( { backColor} ) => backColor}; */
  > .modalTitle{
    font-size:3.5rem;
    margin-bottom: 2.5rem;
    margin-left: ${ ({ marginLeft }) => marginLeft || "0px" };
    text-align: center;

  }
`;

export const InnerBox = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  /* height: 30%; */
  height: ${ ({height}) => height || "30%"};
  margin-top: ${ ({ topMargin }) => topMargin || "0px"};
  margin-bottom: ${ ({ codeMargin }) => codeMargin || "2.2rem" };
  /* background-color: cornflowerblue; */
  > .innerTextBox{
    width: 15%;
    font-size: 1.6rem;
    height: 100%;
    margin-top: .7rem;
    text-align: right;
    margin-right: 1rem;
  }
    /* border: 1px solid aliceblue; */
  > button{
    width: 8.0rem;
    height: 3.3rem;
    padding: 0.8rem 1.2rem;
    margin-left: 1rem;
    border-radius: 1.0rem;
    background-color: cornflowerblue;
    color: #fff;
  }
  > .codeBtn{ opacity: 0;}
`;

export const InnerInputBox = styled.div`
  /* border: 1px solid coral; */
  width: 65%;
  /* height: ${({ height }) => height }; */
  margin-left: ${ ({ marginLeft }) => marginLeft || "0px" };
  > input{
    width : 100%; 
    height: 100%;
    border-radius: 1rem;
    border : 1px solid rgba(0,0,0,0.5);
  }
`;

export const BtnContainer = styled.div`
  width: 100%;
  height: 50%;
  /* background-color: cornflowerblue; */
  > button{
    width: 60%; 
    height: 15%;
    border-radius: 1rem;
    /* background-color: #fff; */
    color: #252525;
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
