import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import styled from "styled-components";
import {
    UserInfoBackground,
    UserInfoContainer,
    UserInfoHeader,
    UserInfoUpdate,
    UserInfoForm,
    UserInfoNickname,
    UserInfoPwd,
    UserInfoEditPwd,
    UserInfoChkPassword,
    UserInfoSubmitBtn,
    UserInfoSnsLogined,
    UserInfoBox,
    UserInfoLabel,
} from "./UserInfoStyle"



function UserInfo(){
    const [curUserPw, setCurUserPw] = useState('');
    const [updatePw, setUpdatePw] = useState('')
    const [checkUpdatePw, setCheckUpdatePw] = useState(''); 
    const [curUserNickname, setCurUserNickname] = useState('');
    const [fixUserName, setFixUserName] = useState('')
    const [sucUpdate, setSucUpdate] = useState(true);
    const [showUpdateModal, setShowUpdateModal] = useState(null);

    const [validPw, setValidPw] = useState(false); // 유효성(문자, 숫자, 특수문자 각 하나씩)
    const [samePw, setSamePw] = useState(false); // 비번 확인용

    function conditionPassword(updatePw) { // 숫자, 영문, 특수문자 각 1자리 이상이면서 8자에서 16자 사이 통과
        let reg = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/
        if (!reg.test(updatePw)) {
            return false;
        }
        return true
    }

    return(
        <UserInfoBackground>
            <UserInfoContainer>
                <UserInfoHeader>
                    <h2>{curUserNickname}님</h2>
                    <div>회원탈퇴</div>
                </UserInfoHeader>
                <UserInfoUpdate>
                    <UserInfoForm>
                        <UserInfoBox>
                            <UserInfoLabel htmlFor="nickName">변경 할 닉네임</UserInfoLabel>
                            <UserInfoNickname />
                        </UserInfoBox>
                        <UserInfoBox>
                            <UserInfoLabel htmlFor="curPassword">현재 비밀번호 입력</UserInfoLabel>
                            <UserInfoPwd />
                        </UserInfoBox>
                        <UserInfoBox>
                            <UserInfoLabel htmlFor="changePassword">새 비밀번호 입력</UserInfoLabel>
                            {/* 필수 아님 */}
                            <UserInfoEditPwd />
                        </UserInfoBox>
                        <UserInfoBox>
                            <UserInfoLabel htmlFor="checkPassword">새 비밀번호 확인</UserInfoLabel>
                            <UserInfoChkPassword />
                        </UserInfoBox>
                        <UserInfoSubmitBtn>
                            sd
                        </UserInfoSubmitBtn>
                    </UserInfoForm>
                </UserInfoUpdate>
                <UserInfoSnsLogined></UserInfoSnsLogined>
            </UserInfoContainer>
        </UserInfoBackground>
    )

}

export default UserInfo;