import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'; // 필요 없을거 같긴 한데 로그아웃에서 쓸 수도
import { isShowOotdImageModalHandler } from '../../redux/actions/actions'
import {
    OotdImageModalBack,
    OotdImageModalCont,
    OotdImageModalImg,
    OotdImageModalCloseBtn,

} from './OotdImageModalStyle'

function OotdImageModal({modalImage, setModalImage}){
    
    function closeModal(){
        setModalImage('')
    }

    return(
        <>
        <OotdImageModalBack onClick={closeModal}>
        </OotdImageModalBack>
        <OotdImageModalCont>
            {/* <OotdImageModalCloseBtn onClick={closeModal}>
                <span>
                    <i></i>
                    <i></i>
                </span>
            </OotdImageModalCloseBtn> */}
            <OotdImageModalImg src={modalImage} />
        </OotdImageModalCont>
        </>
    )
}

export default OotdImageModal