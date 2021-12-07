import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
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

    return(
        <LowerPageContainer>
            <LowerPageBox>
                <UserWore>
                    <UserWoreImage></UserWoreImage>
                    <UserWoreText>이런 날씨에 2020년 OO님은<br />이렇게 입으셨어요</UserWoreText>
                </UserWore>
                <BestDresser>
                    <BestDresserImage>
                        <BestDresserText>오늘 날씨 최고 좋아요 받은 코디</BestDresserText>
                    </BestDresserImage>
                </BestDresser>
            </LowerPageBox>
        </LowerPageContainer>

    )
}

export default LandingPageLower;