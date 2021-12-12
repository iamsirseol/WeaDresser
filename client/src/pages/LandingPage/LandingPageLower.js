import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import axios from "axios";
import {
    LowerPageContainer,
    LowerPageBox,
    UserWore,
    UserWoreImage,
    UserWoreText,
    BestDresser,
    BestDresserImage,
    BestDresserText,
} from "./LandingPageLowerStyle"

function LandingPageLower(){
    const [woreImage, setWereImage] = useState('')
    const [bestImage, setBestImage] = useState('')

    function userWoreImageRequest(){
        axios.get('',)
        .then( res => {
            setWereImage()
        }).catch(

        )
    }

    function userWoreImageRequest(){
        axios.get('',)
        .then( res => {
            setBestImage()
        }).catch(

        )
    }

    return(
        <LowerPageContainer>
            <LowerPageBox>
                <UserWore>
                    <UserWoreImage woreUrl={woreImage}></UserWoreImage>
                    <UserWoreText>이런 날씨에 2020년 OO님은<br />이렇게 입으셨어요</UserWoreText>
                </UserWore>
                <BestDresser>
                    <BestDresserImage bestUrl={bestImage}>
                    </BestDresserImage>
                    <BestDresserText>오늘 날씨 최고 좋아요 받은 코디</BestDresserText>
                </BestDresser>
            </LowerPageBox>
        </LowerPageContainer>

    )
}

export default LandingPageLower;