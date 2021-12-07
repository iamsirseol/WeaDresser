import styled from "styled-components";
import { Link } from "react-router-dom";

export const OotdListBoxContainer = styled.div`
    width: fit-content;
    margin: 0 auto;
    display: inline-block;
`
export const OotdListBoxBack = styled.div`
    width: 20%;
    position: absolute;
    box-sizing: border-box;
    padding: 0.3em 0.5em 0.8em 0.5em;
    cursor: pointer;
    &:hover{
    }
    @media screen and (max-width:1200px){
        width: 25%;
    }
    @media screen and (max-width:800px){
        width: 33%;
        padding: 0.2em 0.3em 0.6em 0.3em;
    }
    @media screen and (max-width:400px){
        width: 50%;
        padding: 0.15em 0.25em 0.5em 0.25em;
    }
`
export const OotdListBoxOver = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 1em;
`
export const OotdListBoxImage = styled.img`
    width: 100%;
    display: block;
    border-radius: 1em;
`
export const OotdListBoxItem = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 99;
    border-radius: 1em;
    &:hover{
        background: #000;
        opacity: 0.5;
    }
`
export const OotdLike = styled.div`
    position: absolute;
    
`
export const OotdLikeCount = styled.div`
    
`