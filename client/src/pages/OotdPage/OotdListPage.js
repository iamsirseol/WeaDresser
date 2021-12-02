// import { Link, useHistory } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { isLoginHandler, isShowLoginModalHandler, isShowSignUpModalHandler } from '../../redux/actions/actions'
// import axios from 'axios'; // 필요 없을거 같긴 한데 로그아웃에서 쓸 수도
import {
    OotdPageContainer,
    OotdPageTitle,
    OotdListContainer,
} from "./OotdListPageStyle"
import OotdListSearch from "../../components/OotdList/OotdListSearch"
import OdtdListBox from "../../components/OotdList/OotdListBox"

function OotdListPage(){

    return (
        <OotdPageContainer>
            <OotdPageTitle>OOTD LIST</OotdPageTitle> {/* 이름 뭐로 바꿀지.. */}
            <OotdListSearch /> {/* 민찬님 몫 ㅋㅋㅋ */}
            <OotdListContainer>
                <OdtdListBox/>
            </OotdListContainer>
        </OotdPageContainer>
    )
}

export default OotdListPage;