import styled from "styled-components"
import { FiArrowLeftCircle } from 'react-icons/fi'
import { animated } from "@react-spring/web";


export const LogoContainer =styled.div`
  width: 25rem; 
  height: 20rem;
  align-items: center;
  margin-bottom: 2.5rem;
  > img{
    position: relative;
    width: 100%; 
    top: 50%;
    margin: auto;
    cursor: pointer;
  }
  @media screen and (max-width : 767px){
    width: 20rem; 
    height: 16rem;
    margin-bottom: 2.0rem;
  }
  @media screen and (max-width : 424px){
    width:15rem; 
    height: 12rem;
    margin-bottom: 1.5rem;
  }
`;

export const InputContainer = styled(animated.div)`
  width: ${({ width })=> width || '40em'};
  height: 3em;
  display: flex;
  align-items: center;
  text-align: center;
  color: #fff;
  margin: 1em;
  @media screen and (max-width : 767px){
    width: 30em;
    margin-top: 0.2em
  }
  @media screen and (max-width : 424px){
    width: 30em;
  }
  input{
    /* width: 23em; */
    width : ${({width}) => width || '23em'} ;
    height: 1.5em;
    margin: 0.5em; // responsive 
    font-size: ${({size})=> size|| '1.8em'};
    color: #fff;
    background-color: #5b81fa;
    border: none;
    border-bottom: solid 0.5px #fff;
    transition: 0.4s;
    &:focus{
      /* transition: 0.2s; */
      outline: none;
      background-color: #5b81fa;
      border-bottom: 1px solid #fff;
    }
    &::placeholder{
      color: #fff;
      font-size:.8em;
    }
    &::placeholder:hover{
      opacity: 0;
    }
    @media screen and (max-width : 767px){
      width: 18em; 
      width: ${({ width })=> width || '18em'};
      height: 2em;
      margin-top: 0.2rem;
      font-size: 1.5rem
    }
    @media screen and (max-width : 424px){
      width: 16rem;
      height: 1.2rem;
      margin-top: 0.2rem;
      font-size: 1rem;
    }
  }
`;

export const InputButton = styled.div`
    width: 7em;
    padding: 0.6em 0.3em;
    margin-left:1.5em;
    margin-top: 0.6em;
    color: #fff;
    font-size: 1.3em;
    display: inline-block;
    text-align: center;
    cursor:pointer;
    border-radius: 1em;
    border: 0.5px solid rgba(255,255,255,0.5);
    
    &:hover{ background-color:coral; }
    @media screen and (max-width : 767px){
      width: 6.5em;
      font-size: 1.1em;
      padding: 0.5em 0.4em;
    }
    @media screen and (max-width : 424px){
      width: 4em;
      font-size: 1.2em;
      padding: 0.5em 0.2em;
    }

`;

export const ErrPtag = styled.div`
  width: 20em;
  height: 2em;
  color: #fff;
  font-size: 1.8em;
  text-align: center;
  margin-top: 2em ; // responsive 
  font-size: 1.8em;
  @media screen and (max-width : 767px){
    height: 1.8em;
    margin-top: 1.5rem;
    font-size: 1.5rem;
  }
  @media screen and (max-width : 424px){
    width: 18rem;
    height: 1.2rem;
    margin-top: 0.2rem;
    font-size: 1rem;
  }
`;

export const BackButton = styled(FiArrowLeftCircle)`
  width: 2.5rem; height: 2.5rem;
  padding: 1.5em;
  z-index:1000000000000000000000000; // <-- cursor pointer 왜 안됨;;?
  color: #fff;
  cursor: pointer; 
  position:absolute;
  top: 1rem; left: 1rem;

  &:hover{
    cursor: pointer; 
    color:coral;
  }
`;


// export const BtnContainer = styled.div`
//   width: 7.0rem;
//   height: 3rem;
//   margin-top: 1.2rem;
//   margin-left: 1.5rem;
//   text-align: center;
//   padding: 0.2rem;
//   button{
//     width:100%;
//     height: 100%;
//     padding: 0.5rem;
//     color: #fff;
//     font-size: 1.5rem;
//     display: inline-block;
//     border-radius: 1.2rem;
//     border: 1px solid #fff;

//   }
// `;


// export const InputBtnContainer =styled.div`
//   position:relative;
//   left: 2.5rem;
//   display: flex;
//   align-items: center;
//   color: #fff;
//   margin-bottom: 3.5rem; //<- responisive
// `;