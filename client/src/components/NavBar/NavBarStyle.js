import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContaier = styled.nav`
    width:100vw;
    height: 8em;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    background: #ddd;
`;

export const NavBtnLink = styled(Link)`
    border-radius: 50px;
    background: transparent;
    padding: 0.5em 2em;
    color: #fff;
    font-size: 1.6em;
    transition: all 0.2s ease-in-out;
    border: 2px solid #fff;
    position: relative;
    &:hover {
        background: #fff;
        color: #000;
  }
`;