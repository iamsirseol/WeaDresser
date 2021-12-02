import styled from "styled-components";
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isLoginHandler, isShowLoginModalHandler, isShowSignUpModalHandler } from '../../redux/actions/actions'
import axios from 'axios';
import {SolidHeart, RedHeart} from "../SvgIcon/SvgIcon"
import { useEffect, useRef, useState } from 'react';

const LikeCount = styled.span`
    display: inline-block;
    position: absolute;
    left: 1.8em;
    bottom: -0.1em;
    font-size: 1.6em;
`

function OotdLikeCont(){
    const [likes, setLikes] = useState(0);
    const [isLike, setIsLike] = useState();

    let imageListArray = []

    // function imageRequest(){ // 이미지 get요청 및 무한 스크롤
    //     axios.get
    // }

    // function likeThis(e, diariesId){ // 좋아요 요청
    //     axios.post()
    //     .then(res => {
    //         // 요청시 온 배열에
    //     })
    // }

    // function disLikeThis(diariesId){ // 좋아요 요청 취소

    // }

    return (
        <>
            {!isLike ? <SolidHeart bottom={'0.2em'}></SolidHeart > : <RedHeart bottom={'0.2em'}></RedHeart>}<LikeCount>{likes}</LikeCount> {/* 좋아요 수도 component로 만들것 */}
            {/* 온클릭 이벤트 useEffect로 만들어야 되겠다. 클릭하면 빨간색 돼야 되고 api로 요청 OotdListBox에서 like를 받아옴 그리고 like상태인 애는 RedHeart 그리고 클릭하면 어쨋든 빨간색도 돼야 되는데 아씨 어려워 socketIo 어때요 */}
        </>
    )
}

export default OotdLikeCont;
    