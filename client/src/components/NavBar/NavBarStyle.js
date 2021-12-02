import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContaier = styled.nav`
    width:100vw;
<<<<<<< HEAD
    height: 80px;
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
  background: #ffa928;
  white-space: nowrap;
  padding: 10px 38px;
  color: #010606;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
=======
    height: 8em;
    padding: 0 3em;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background: #ddd; // 지울것
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
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
  }
`;