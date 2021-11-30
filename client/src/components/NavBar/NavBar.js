import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isLoginHandler, isShowLoginModalHandler, isShowSignUpModalHandler } from '../../redux/actions/actions'
import axios from 'axios'; // 필요 없을거 같긴 한데 로그아웃에서 쓸 수도
import {
    NavContaier,
    NavBtnLink
} from "./NavBarStyle"
import {SvgMan} from "../SvgIcon/SvgIcon"

function NavBar({temporalHandler}) {

    const isLogin = useSelector(state => state.isLoginReducer.isLogin)
    console.log(isLogin)

    return (
        <NavContaier onClick={temporalHandler} >
            {/* <button >temp</button> */}
            {isLogin ? <NavBtnLink to = "/">로그아웃</NavBtnLink> : <NavBtnLink to ="/">로그인</NavBtnLink>}
            {/* svg아이콘은 아이콘 컴포넌트로 만드는게 나을거 같아서 일단 이렇게 했습니다. */}
        </NavContaier>
    );
  }
  
  export default NavBar;