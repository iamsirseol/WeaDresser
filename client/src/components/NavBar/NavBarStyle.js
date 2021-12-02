import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContaier = styled.nav`
    width:100vw;
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
  }
`;