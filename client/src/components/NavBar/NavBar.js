import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isShowLoginModalHandler } from '../../redux/actions/actions'
import {
    NavContaier,
    NavBtn
} from "./NavBarStyle"
import SideBar from "../SideBar/SideBar"
import {SvgLogoSmall} from "../SvgIcon/SvgIcon"
import { useEffect, useRef, useState } from 'react';
import "../../styles/style.css"

function NavBar({ logoutHandler }) {
  const curLocation = useLocation();
  const navBar = useRef(null);
  const { isLogin } = useSelector(state => state.isLoginReducer);
  const {navTopLoc} = useSelector(state => state.navTopReducer);
  const dispatch = useDispatch();
  const [winY, setWinY] = useState('');
  const scrollY = () => {
    setWinY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollY);
    return () => {
      window.removeEventListener("scroll", scrollY);
    };
  });

  const isShowLoginModal =() => {
      dispatch(isShowLoginModalHandler(true));
  }


    return (
        <NavContaier ref={navBar} className={ winY <= navTopLoc- 70 && curLocation.pathname === "/" ? "nav-home" : winY > navTopLoc- 70 && curLocation.pathname === "/" ? "nav-home-scroll" : "nav-else"}>
            <div><SideBar /></div>
            <div><SvgLogoSmall to='/'></SvgLogoSmall></div>
            <div>{isLogin ? <NavBtn onClick={logoutHandler}>로그아웃</NavBtn> : <NavBtn onClick={isShowLoginModal}>로그인</NavBtn >}</div>
            {/* svg아이콘은 아이콘 컴포넌트로 만드는게 나을거 같아서 일단 이렇게 했습니다. */}
        </NavContaier>
    );
  }
  
  export default NavBar;