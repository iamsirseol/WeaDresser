import styled from "styled-components";
import { Link } from "react-router-dom";

export const OotdPageContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    height: fit-content;
    box-sizing: border-box;
    padding: 8em 4em;
    @media screen and (max-width:800px){
        padding: 8em 3em;
    }
    @media screen and (max-width:400px){
        padding: 8em 2em;
    }
`

export const OotdPageTitle = styled.h2`
    text-align: center;
    font-size: 3em;
    color: #000;
`
export const OotdListContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    height: fit-content;
    box-sizing: border-box;
    position: relative;
`
