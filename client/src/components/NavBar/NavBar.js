import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isShowLoginModalHandler, loginSuccessHandler } from '../../redux/actions/actions'
// import axios from 'axios'; // 필요 없을거 같긴 한데 로그아웃에서 쓸 수도
import {
    NavContaier,
    NavBtn
} from "./NavBarStyle"
import {SvgLogoSmall} from "../SvgIcon/SvgIcon"
import { useEffect, useRef, useState } from 'react';
import "../../styles/style.css"
// import { useLogoutApi } from '../../utils/api/useLogoutApi'
// import axios from 'axios';

function NavBar({ logoutHandler }) {
  const curLocation = useLocation();
  const navBar = useRef(null);
  const { isLogin } = useSelector(state => state.isLoginReducer);
  const dispatch = useDispatch();
  const [winY, setWinY] = useState('');
  // const { logoutHandler } = useLogoutApi();
  // const history = useHistory();
  const scrollY = () => {
    setWinY(window.pageYOffset);
  };

  useEffect(() => {
    // console.log(winY)
    window.addEventListener("scroll", scrollY);
    return () => {
      window.removeEventListener("scroll", scrollY);
    };
  });

  const isShowLoginModal =() => {
      dispatch(isShowLoginModalHandler(true));
  }


    return (
        <NavContaier ref={navBar} className={ winY < 10 && curLocation.pathname === "/" ? "nav-home" : "nav-else"}>
            <SvgLogoSmall to='/'></SvgLogoSmall>
            {isLogin ? <NavBtn onClick={logoutHandler}>로그아웃</NavBtn> : <NavBtn onClick={isShowLoginModal}>로그인</NavBtn >}
            {/* svg아이콘은 아이콘 컴포넌트로 만드는게 나을거 같아서 일단 이렇게 했습니다. */}
        </NavContaier>
    );
  }
  
  export default NavBar;