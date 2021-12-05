// import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isShowLoginModalHandler } from '../../redux/actions/actions'
// import axios from 'axios'; // 필요 없을거 같긴 한데 로그아웃에서 쓸 수도
import {
    NavContaier,
    NavBtn
} from "./NavBarStyle"
import {SvgLogoSmall} from "../SvgIcon/SvgIcon"

function NavBar() {
  const { isLogin } = useSelector(state => state.isLoginReducer);
  const dispatch = useDispatch();

  const isShowLoginModal =() => {
      dispatch(isShowLoginModalHandler(true));
    }
  const closeShowLoginModal =() => {
    dispatch(isShowLoginModalHandler(false));
  }
    // temporal button to show up login-modal
    const showModalHandler =() => {
      dispatch(isShowLoginModalHandler(true))
    }
    const closeModalHandler = () => {
      dispatch(isShowLoginModalHandler(false))
        
    }
    return (
        <NavContaier >
            <SvgLogoSmall to='/'></SvgLogoSmall>
            {isLogin ? <NavBtn onClick={closeShowLoginModal}>로그아웃</NavBtn> : <NavBtn onClick={isShowLoginModal}>로그인</NavBtn >}
            {/* svg아이콘은 아이콘 컴포넌트로 만드는게 나을거 같아서 일단 이렇게 했습니다. */}
        </NavContaier>
    );
  }
  
  export default NavBar;