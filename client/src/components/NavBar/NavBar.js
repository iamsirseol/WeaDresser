import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isLoginHandler, isShowLoginModalHandler, isShowSignUpModalHandler } from '../../redux/actions/actions'
import axios from 'axios'; // 필요 없을거 같긴 한데 로그아웃에서 쓸 수도
import {
    NavContaier,
    NavBtnLink
} from "./NavBarStyle"
import {SvgMan} from "../SvgIcon/SvgIcon"

function NavBar() {
    const dispatch = useDispatch();
    const { isLogin } = useSelector(state => state.isLoginReducer)
    const { isShowLoginModal } = useSelector(state => state.isShowLoginModalReducer)
    const { isShowSignUpModal } = useSelector(state => state.isShowSignUpModalReducer)
    const showLoginModalHandler = () => {
        dispatch(isShowLoginModalHandler(true))
    }
    // console.log(isShowLoginModal, isShowSignUpModal)
    return (
        <NavContaier >
            {   // 둘다 false => 버튼 존재!! 
                !isShowLoginModal && !isShowSignUpModal 
                ? <button onClick={showLoginModalHandler}>로그인 모달</button>
                : !isShowSignUpModal  // 회원 가입 버튼 눌르면서 isShow로그인모달=false 처리됨 
                ? null : null  // isShowSignup모달 =true 일때도 버튼이 사라져야함 
            // (isLogin으로 한방해결 가능 )
            }
            {isLogin ? <NavBtnLink to = "/">로그아웃</NavBtnLink> : <NavBtnLink to ="/">로그인</NavBtnLink>}
            {/* svg아이콘은 아이콘 컴포넌트로 만드는게 나을거 같아서 일단 이렇게 했습니다. */}
        </NavContaier>
    );
  }
  
  export default NavBar;