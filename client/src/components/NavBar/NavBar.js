import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
<<<<<<< HEAD
import { isLoginHandler, isShowLoginModalHandler, isShowSignUpModalHandler } from '../redux/actions/actions'
import axios from 'axios'; // 필요 없을거 같긴 한데 로그아웃에서 쓸 수도
=======
import { isLoginHandler, isShowLoginModalHandler, isShowSignUpModalHandler } from '../../redux/actions/actions'
import axios from 'axios'; // 필요 없을거 같긴 한데 로그아웃에서 쓸 수도
import {
    NavContaier,
    NavBtnLink
} from "./NavBarStyle"
import {SvgLogoSmall} from "../SvgIcon/SvgIcon"

function NavBar() {
    const dispatch = useDispatch();
    const { isLogin } = useSelector(state => state.isLoginReducer);
    const {
        isShowLoginModal, 
        isShowSignUpModal 
    } = useSelector(state => state.isShowModalReducer);
    const showLoginModalHandler = () => {
        dispatch(isShowLoginModalHandler(true))
    }
    return (
        <NavContaier >
            {   // 화면 띄우는 Test !!  conflic시 편하게 삭제 가능 !! 
                !isShowLoginModal && !isShowSignUpModal 
                ? <button onClick={showLoginModalHandler}>로그인 모달</button>
                : !isShowSignUpModal  
                ? null : null  // isShowSignup모달 =true 일때도 버튼이 사라져야함 
            }
            {isLogin ? <NavBtnLink to = "/">로그아웃</NavBtnLink> : <NavBtnLink to ="/">로그인</NavBtnLink>}
            {/* svg아이콘은 아이콘 컴포넌트로 만드는게 나을거 같아서 일단 이렇게 했습니다. */}
        </NavContaier>
    );
  }
  
  export default NavBar;
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
