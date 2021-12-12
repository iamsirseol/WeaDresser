import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    width: 100%;
    height: 23em;
    position: relative;
    bottom: 0;
    background: #051120;
    border-top: 1em solid #123962;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
export const FooterLeft = styled.div`
    width: 33.3%;
    background: #fff;
    height: 20em;

`
export const FooterMiddle = styled.div`
    width: 33.3%;
    background: yellow;
    height: 20em;
`
export const FooterRight = styled.div`
    width: 33.3%;
    background: green;
    height: 20em;
`
export const FooterBottom = styled.div`
    width: 100%;
    background: olivedrab;
    height: 2.5em;
`