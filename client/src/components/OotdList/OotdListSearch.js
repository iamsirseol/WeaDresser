import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isLoginHandler, isShowLoginModalHandler, isShowSignUpModalHandler } from '../../redux/actions/actions'
import axios from 'axios'; // 필요 없을거 같긴 한데 로그아웃에서 쓸 수도
import {
    OotdListSearchContainer
} from "./OotdListSearchStyle"


function OotdListSearch(){

    return (
        <OotdListSearchContainer></OotdListSearchContainer>
    )
}

export default OotdListSearch;